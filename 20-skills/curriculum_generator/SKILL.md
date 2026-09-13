---
name: teks-curriculum-generator
description: Deterministic outdoor lab and TEKS curriculum station generator with built-in self-checks.
---

# 🌲 TEKS Outdoor Lab Curriculum Generator Skill (Buzzoni Step 3)

## Objective
Generate a complete, rigorous 45-minute outdoor lab station addressing a target gap standard from the Texas Forest Literacy Knowledge Graph.

## Required Inputs
- `target_standard_id`: (e.g. `TX-TEKS-SCI-05-12B`)
- `tea_code`: (e.g. `Science 5.12(B)`)
- `grade_band`: (`K-2`, `3-5`, `6-8`, `9-12`)
- `subject`: Primary academic discipline

## Execution Steps
1. **Load Constraints:** Read `00-system/CONSTRAINTS.md`. Strictly enforce 45-min maximum, dual units, zero PII, and bilingual vocabulary.
2. **Design the Field Phenomenon:** Connect the standard to living Tamaulipan Thornscrub canopy phenomena (Mesquite, Ebony, Anacahuita, transpiration, albedo, Komorebi light flux).
3. **Draft the Station Rotation:** Create 3 rotational station roles (e.g., *Thermal Surveyor*, *Shadow Geometer*, *Data Logger*).
4. **Format Structured JSON Output:** Adhere strictly to `00-system/SCHEMA.md`. Never return unformatted prose.

## Self-Check Protocol (MUST RUN BEFORE RETURNING)
Before sending the output JSON, verify every checkmark:
- [ ] Is `metrics.lab_duration_minutes <= 45`?
- [ ] Are both Metric and Imperial units included in all measurement instructions?
- [ ] Are TEKS codes written in canonical format (e.g. `TX-TEKS-SCI-05-12B`) verified against `aliases.csv`?
- [ ] Is there an explicit evidence string citing the TEA expectation text?
- [ ] Does the JSON payload validate cleanly against `00-system/SCHEMA.md`?

If any check fails, fix the payload internally before returning.
