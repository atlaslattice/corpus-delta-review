# Atlas Lattice Corpus Source Review Index

**Status:** Public review index; staged material only; not canon; not a deployment authorization.  
**Purpose:** Provide a reproducible, source-addressable review surface for the Atlas Lattice / Aluminum OS corpus without copying non-public source contents into a public repository. The current release is a **2,163-record source-index floor**—271 GitHub records, 1,812 redacted Notion records, and 80 redacted OneDrive observations—and a separately staged **26-record atomic-delta candidate layer**. Neither layer is the final atomic-delta extraction.

## Review Boundary

The included ledger is an **evidence-bounded candidate source index**. It identifies each source-addressable container or record, its origin surface, its evidence state, and its current quarantine/review state. The ledger does not represent a finding that a record is an atomic implementation delta, operational, adopted, externally reviewed, or authorized for deployment.

| Source surface | Public review treatment |
|---|---|
| GitHub | Original public repository URL is retained. |
| Notion | Private page title and URL are replaced by a deterministic provenance reference. Reviewers can request controlled source access using that reference. |
| OneDrive | Redacted browser-observed source records are included. A live item-level manifest remains incomplete pending verified IDs, paths, timestamps, eTags, hashes, and access controls. |
| Alexandria | Implementation records will be added after source-level extraction and policy review. |
| Public sites | Public URLs may be retained with capture date and provenance status. |
| Recovery archives | Included only with their source and release status explicitly marked. |

## Authority Model

Only the [Alexandria Canon Register](https://github.com/atlaslattice/alexandria-canon-register) can designate a record as canonical. This repository is deliberately separate from the Canon Register so that review material cannot silently acquire canonical status.

> The ledger preserves source identity and review state. It does **not** confer authority, make an institutional claim, or substitute for recipient-side verification.

## Quarantine and Review

Records matching the active BULLSHIT quarantine criteria are preserved in the ledger but marked `quarantine/excluded`; they are not treated as normal review inputs or canonical evidence. Keyword matching is a routing rule, not evidence of actor intent, compromise, or authorship.

## Files

| File | Contents |
|---|---|
| `data/review-delta-ledger.json` | Sanitized public review index of staged source records. |
| `data/review-delta-ledger-summary.json` | Source-surface and status counts. |
| `data/atomic-delta-candidates.json` | Evidence-bounded atomic delta candidates extracted from directly read private sources and directly observed public recovery sources; every record includes an explicit quarantine outcome. |
| `CONTEXT-MAP.md` | Public orientation, authority layers, and explicit coverage boundaries. |
| `POLICY.md` | Publication, source-access, and review boundary. |

## Source Access Requests

For a redacted record, cite its `candidate_id` and `provenance_reference` in a request to the repository owner. Do not infer private source contents from an identifier or ask the repository to automate access.
