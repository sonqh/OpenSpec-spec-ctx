import { formatPatch, OMIT_HEADERS, structuredPatch } from 'diff';
import {
  extractRequirementsSection,
  foldRequirementName,
  normalizeRequirementName,
  requirementMatchKey,
} from '../core/parsers/requirement-blocks.js';

/** A main-spec requirement block, and how its header matched the delta's. */
export interface MatchedRequirementBlock {
  raw: string;
  /** The header name as the main spec spells it. */
  name: string;
  /**
   * False when the two headers differ only in case or interior spacing. Archive
   * matches names exactly, so an inexact match is a real problem to report even
   * though the diff below it is still the one the author meant.
   */
  exact: boolean;
}

/**
 * Find the raw markdown block for a requirement by name in a spec file.
 *
 * Delegates to extractRequirementsSection() which already handles code fences,
 * section boundaries, and requirement header parsing. We just look up by key
 * (requirementMatchKey: the ID token when the header has one, the full text
 * otherwise): exactly first, then falling back to the shared case/whitespace
 * fold so a header that differs only in spelling still shows its diff, flagged
 * inexact. A header matched by ID is exact whatever its title says, because
 * archive matches it the same way.
 *
 * Returns null if no requirement header matches either way.
 */
export function extractRequirementBlock(
  specContent: string,
  requirementName: string
): MatchedRequirementBlock | null {
  const parts = extractRequirementsSection(specContent);
  const targetKey = requirementMatchKey(requirementName);
  const foldedTarget = foldRequirementName(requirementName);
  let folded: MatchedRequirementBlock | null = null;

  for (const block of parts.bodyBlocks) {
    const name = normalizeRequirementName(block.name);
    if (requirementMatchKey(name) === targetKey) {
      return { raw: block.raw, name, exact: true };
    }
    if (!folded && foldRequirementName(name) === foldedTarget) {
      folded = { raw: block.raw, name, exact: false };
    }
  }

  return folded;
}

/**
 * Compute a unified diff between a main-spec requirement block and the delta
 * block that replaces it. A null main block (new capability) diffs against the
 * empty string, so every line reads as an addition.
 *
 * Uses structuredPatch to retain unified-diff hunk ranges while omitting the
 * synthetic file headers, since the caller provides its own labeling.
 */
export function diffRequirementBlock(baseBlock: string | null, deltaBlock: string, label: string): string {
  const base = ensureTrailingNewline(baseBlock ?? '');
  const delta = ensureTrailingNewline(deltaBlock);
  const patch = structuredPatch(label, label, base, delta);

  return formatPatch(patch, OMIT_HEADERS).trimEnd();
}

function ensureTrailingNewline(s: string): string {
  return s.endsWith('\n') ? s : s + '\n';
}

/**
 * Build a map from folded RENAMED TO name to the original main-spec name.
 * Renames apply in source order, so a chain such as A -> B -> C maps C back to
 * A. That is the block a later MODIFIED C replaces. The fold is the ID key for
 * a header that starts with an ID token, so a lookup by ID finds the entry.
 */
export function buildRenameMap(renames: Array<{ from: string; to: string }>): Map<string, string> {
  const map = new Map<string, string>();
  for (const r of renames) {
    const from = foldRequirementName(r.from);
    const original = map.get(from) ?? normalizeRequirementName(r.from);
    map.delete(from);
    map.set(foldRequirementName(r.to), original);
  }
  return map;
}
