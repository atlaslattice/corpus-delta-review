# Atlas Lattice Corpus Delta Review Index

**Status:** Public review index; staged material only; not canon; not a deployment authorization.  
**Purpose:** Provide a reproducible, source-addressable review surface for the Atlas Lattice / Aluminum OS corpus without copying non-public source contents into a public repository.

## Review Boundary

The included ledger is an **evidence-bounded candidate index**. It identifies each source-addressable delta, its origin surface, its evidence state, and its current quarantine/review state. The ledger does not represent a finding that a record is operational, adopted, externally reviewed, or authorized for deployment.

| Source surface | Public review treatment |
|---|---|
| GitHub | Original public repository URL is retained. |
| Notion | Private page title and URL are replaced by a deterministic provenance reference. Reviewers can request controlled source access using that reference. |
| OneDrive | Not included until item-level inventory and access controls are verified. |
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
| `data/review-delta-ledger.json` | Sanitized public review index of staged deltas. |
| `data/review-delta-ledger-summary.json` | Source-surface and status counts. |
| `POLICY.md` | Publication, source-access, and review boundary. |

## Source Access Requests

For a redacted record, cite its `candidate_id` and `provenance_reference` in a request to the repository owner. Do not infer private source contents from an identifier or ask the repository to automate access.
