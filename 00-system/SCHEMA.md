# 📐 TEKS Knowledge Graph Architecture: SCHEMA.md
**Version:** 1.0.0  
**Phase:** Phase II · The Graph  
**Compliance:** TEA 2024–2025 Revised Science TEKS (3D Standards), FERPA/COPPA Zero-PII  

---

## 1. Node Taxonomy (Primary Entities)

Every node in the graph MUST have a single `type` selected from this enum. All other properties are attributes.

| Node Type | Canonical Prefix | Description | Example ID |
| :--- | :--- | :--- | :--- |
| `STANDARD` | `TX-TEKS-` | Official state student expectation (TEA code). | `TX-TEKS-SCI-05-12B` |
| `OUTDOOR_LAB` | `LAB-` | Structured 45-minute outdoor field investigation. | `LAB-01-MICROCLIMATE` |
| `PHENOMENON` | `PHENO-` | Observable subtropical ecological or physical event. | `PHENO-TRANSPIRATION` |
| `STATION` | `STA-` | Physical or rotational field station within a lab. | `STA-TRANSECT-IR` |
| `DISTRICT` | `DIS-` | School district or municipal LEA entity. | `DIS-DONNA-ISD` |
| `CAMPUS` | `CAM-` | Specific school campus site with living canopy. | `CAM-JW-CACERES` |

---

## 2. Node Schema Definition

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "TEKSNode",
  "type": "object",
  "required": ["id", "type", "label", "grade_band", "subject", "status", "created_at"],
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^(TX-TEKS|LAB|PHENO|STA|DIS|CAM)-[A-Z0-9_-]+$"
    },
    "type": {
      "type": "string",
      "enum": ["STANDARD", "OUTDOOR_LAB", "PHENOMENON", "STATION", "DISTRICT", "CAMPUS"]
    },
    "label": {
      "type": "string",
      "minLength": 3,
      "maxLength": 120
    },
    "grade_band": {
      "type": "string",
      "enum": ["K-2", "3-5", "6-8", "9-12", "COMMUNITY", "GRADUATE", "ALL"]
    },
    "subject": {
      "type": "string",
      "enum": ["SCIENCE", "MATH", "SOCIAL_STUDIES", "ELAR", "FINE_ARTS", "HEALTH_PE", "AGROECOLOGY", "CROSS_DISCIPLINARY"]
    },
    "tea_code": {
      "type": "string",
      "pattern": "^[A-Za-z]+\\s[0-9]+\\.[0-9]+[A-Za-z]?$"
    },
    "status": {
      "type": "string",
      "enum": ["gap", "in_progress", "verified", "mastered", "archived"]
    },
    "evidence": {
      "type": "string",
      "description": "Source citation or textbook/TEA curriculum reference"
    },
    "metrics": {
      "type": "object",
      "properties": {
        "lab_duration_minutes": { "type": "integer", "maximum": 45 },
        "standards_satisfied_count": { "type": "integer", "minimum": 1 },
        "surface_temp_delta_f": { "type": "number" },
        "canopy_coverage_sqft": { "type": "number" }
      }
    },
    "created_at": {
      "type": "string",
      "format": "date-time"
    },
    "updated_at": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false
}
```

---

## 3. Edge Taxonomy (Relationships)

Edges connect nodes with strict source/target type rules. Every edge MUST include an `evidence` line (Step 8).

| Edge Type | Valid Source -> Target | Semantics |
| :--- | :--- | :--- |
| `SATISFIES` | `OUTDOOR_LAB` -> `STANDARD` | The lab directly teaches and evaluates the standard. |
| `OBSERVES` | `STATION` -> `PHENOMENON` | Station activities measure the live outdoor phenomenon. |
| `PART_OF` | `STATION` -> `OUTDOOR_LAB` | Station belongs to the 45-minute lab rotation. |
| `LOCATED_AT` | `OUTDOOR_LAB` -> `CAMPUS` | Lab takes place in the campus living microforest. |
| `ENROLLED_IN`| `CAMPUS` -> `DISTRICT` | Campus is governed under district curriculum pacing. |
| `CO_TEACHES` | `STANDARD` -> `STANDARD` | Two cross-disciplinary standards hit in one measurement. |

---

## 4. Edge Schema Definition

```json
{
  "type": "object",
  "required": ["source", "target", "type", "evidence", "confidence"],
  "properties": {
    "source": { "type": "string" },
    "target": { "type": "string" },
    "type": {
      "type": "string",
      "enum": ["SATISFIES", "OBSERVES", "PART_OF", "LOCATED_AT", "ENROLLED_IN", "CO_TEACHES"]
    },
    "evidence": {
      "type": "string",
      "description": "Citation line e.g. 'Lab Station 2 calculates A=pi*r^2 satisfying Math 5.4H'"
    },
    "confidence": {
      "type": "number",
      "minimum": 0.0,
      "maximum": 1.0
    }
  }
}
```
