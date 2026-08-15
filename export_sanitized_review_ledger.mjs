import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const inputPath = "/home/ubuntu/corpus_delta_candidate_ledger_v2_2026_08_15.json";
const outputDir = "/home/ubuntu/corpus-delta-review/data";
const input = JSON.parse(await readFile(inputPath, "utf8"));

function privateReference(value) {
  return `private-notion:${createHash("sha256").update(value).digest("hex")}`;
}

const sanitized = input.map((entry) => {
  if (entry.source_surface === "Notion" || entry.source_surface === "OneDrive") {
    const reference = privateReference(entry.source_locator);
    return {
      record_kind: "source_index",
      candidate_id: entry.candidate_id,
      title: `Private ${entry.source_surface} record — controlled access required`,
      delta_family: entry.delta_family,
      source_surface: entry.source_surface,
      provenance_reference: reference,
      source_observed_at: entry.source_observed_at,
      evidence_status: entry.evidence_status,
      classification: entry.classification,
      quarantine_result: entry.quarantine_result,
      review_state: entry.review_state,
      deduplication_key: reference,
    };
  }

  return {
    record_kind: "source_index",
    candidate_id: entry.candidate_id,
    title: entry.title,
    delta_family: entry.delta_family,
    source_surface: entry.source_surface,
    source_locator: entry.source_locator,
    source_observed_at: entry.source_observed_at,
    evidence_status: entry.evidence_status,
    classification: entry.classification,
    quarantine_result: entry.quarantine_result,
    review_state: entry.review_state,
    deduplication_key: entry.deduplication_key,
  };
});

const bySurface = Object.values(
  sanitized.reduce((accumulator, entry) => {
    const existing = accumulator[entry.source_surface] ?? {
      source_surface: entry.source_surface,
      records: 0,
      classifications: {},
      quarantine_results: {},
    };
    existing.records += 1;
    existing.classifications[entry.classification] = (existing.classifications[entry.classification] ?? 0) + 1;
    existing.quarantine_results[entry.quarantine_result] = (existing.quarantine_results[entry.quarantine_result] ?? 0) + 1;
    accumulator[entry.source_surface] = existing;
    return accumulator;
  }, {}),
);

await mkdir(outputDir, { recursive: true });
await writeFile(`${outputDir}/review-delta-ledger.json`, `${JSON.stringify(sanitized, null, 2)}\n`);
await writeFile(
  `${outputDir}/review-delta-ledger-summary.json`,
  `${JSON.stringify({ generated_at: new Date().toISOString(), ledger_kind: "source_index_floor", total_records: sanitized.length, source_surfaces: bySurface }, null, 2)}\n`,
);
