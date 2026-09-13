#!/usr/bin/env python3
"""
External Verification Gate for TEKS Knowledge Graph (Buzzoni Step 4)
Rejects invalid node/edge returns BEFORE they can be committed to the master graph.
Zero-token mechanical linting.
"""

import sys
import json
import re
import csv
from pathlib import Path

SYSTEM_DIR = Path(__file__).resolve().parent
ALIASES_FILE = SYSTEM_DIR / "aliases.csv"
CONSTRAINTS_FILE = SYSTEM_DIR / "CONSTRAINTS.md"

VALID_TYPES = {"STANDARD", "OUTDOOR_LAB", "PHENOMENON", "STATION", "DISTRICT", "CAMPUS"}
VALID_GRADE_BANDS = {"K-2", "3-5", "6-8", "9-12", "COMMUNITY", "GRADUATE", "ALL"}
VALID_SUBJECTS = {"SCIENCE", "MATH", "SOCIAL_STUDIES", "ELAR", "FINE_ARTS", "HEALTH_PE", "AGROECOLOGY", "CROSS_DISCIPLINARY"}

def load_aliases():
    alias_map = {}
    if ALIASES_FILE.exists():
        with open(ALIASES_FILE, mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                alias_map[row["raw_alias"].strip().lower()] = row["canonical_id"].strip()
    return alias_map

def validate_node(node: dict, alias_map: dict) -> tuple[bool, str]:
    # Check Required Fields
    for field in ["id", "type", "label", "grade_band", "subject", "status"]:
        if field not in node:
            return False, f"Missing required node field: '{field}'"

    # Validate ID pattern
    if not re.match(r"^(TX-TEKS|LAB|PHENO|STA|DIS|CAM)-[A-Z0-9_-]+$", node["id"]):
        return False, f"Invalid Node ID format: '{node['id']}'"

    # Validate Type Enum
    if node["type"] not in VALID_TYPES:
        return False, f"Invalid Node Type: '{node['type']}'"

    # Validate Grade Band
    if node["grade_band"] not in VALID_GRADE_BANDS:
        return False, f"Invalid Grade Band: '{node['grade_band']}'"

    # Validate Subject
    if node["subject"] not in VALID_SUBJECTS:
        return False, f"Invalid Subject: '{node['subject']}'"

    # Constraint C01: Max Duration 45 minutes
    if node["type"] == "OUTDOOR_LAB":
        metrics = node.get("metrics", {})
        duration = metrics.get("lab_duration_minutes", 45)
        if duration > 45:
            return False, f"Constraint C01 Violation: Lab duration {duration}min exceeds 45min limit."
        
        # Constraint C02: Minimum standards count
        standards_count = metrics.get("standards_satisfied_count", 0)
        if standards_count < 3:
            return False, f"Constraint C02 Violation: Lab satisfies only {standards_count} standards (minimum 3 required)."

    return True, "PASSED"

def validate_edge(edge: dict) -> tuple[bool, str]:
    for field in ["source", "target", "type", "evidence"]:
        if field not in edge:
            return False, f"Missing required edge field: '{field}'"

    valid_edge_types = {"SATISFIES", "OBSERVES", "PART_OF", "LOCATED_AT", "ENROLLED_IN", "CO_TEACHES"}
    if edge["type"] not in valid_edge_types:
        return False, f"Invalid Edge Type: '{edge['type']}'"

    # Buzzoni Step 8: Every edge MUST have non-empty evidence
    if len(edge["evidence"].strip()) < 10:
        return False, "Step 8 Violation: Edge evidence is too short or missing source citation."

    return True, "PASSED"

def run_gate(payload_file: str):
    path = Path(payload_file)
    if not path.exists():
        print(f"❌ [GATE ERROR] File not found: {payload_file}")
        sys.exit(1)

    with open(path, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"❌ [GATE REJECTED] Malformed JSON: {e}")
            sys.exit(1)

    alias_map = load_aliases()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    print(f"🔍 [GATE CHECK] Evaluating {len(nodes)} nodes and {len(edges)} edges from {path.name}...")

    # Validate all nodes
    for i, node in enumerate(nodes):
        ok, msg = validate_node(node, alias_map)
        if not ok:
            print(f"❌ [GATE REJECTED] Node #{i} ({node.get('id', 'unknown')}): {msg}")
            sys.exit(1)

    # Validate all edges
    for i, edge in enumerate(edges):
        ok, msg = validate_edge(edge)
        if not ok:
            print(f"❌ [GATE REJECTED] Edge #{i} ({edge.get('source')} -> {edge.get('target')}): {msg}")
            sys.exit(1)

    print("✅ [GATE APPROVED] All schema and constraint checks passed. Zero token spend on verification.")
    sys.exit(0)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 validator_gate.py <payload.json>")
        sys.exit(1)
    run_gate(sys.argv[1])
