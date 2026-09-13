#!/usr/bin/env python3
"""
Dynamic Launch Dispatcher for TEKS Swarm (Buzzoni Step 9 & 10)
Queries the knowledge graph state, skips settled work, and dispatches only gap nodes.
"""

import json
import sys
from pathlib import Path
from datetime import datetime

ROOT_DIR = Path(__file__).resolve().parent.parent
MATRIX_FILE = ROOT_DIR / "matrices" / "teks_forest_literacy_master_matrix.json"
LAUNCH_DIR = ROOT_DIR / "10-launches"

def query_graph_for_gaps(limit: int = 10):
    LAUNCH_DIR.mkdir(parents=True, exist_ok=True)
    if not MATRIX_FILE.exists():
        print(f"❌ Matrix file not found: {MATRIX_FILE}")
        sys.exit(1)

    with open(MATRIX_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    nodes = data.get("nodes", [])
    
    # Step 10: Route by node state - filter only 'gap' or 'in_progress'
    gap_nodes = [n for n in nodes if n.get("status") in ("gap", "pending", None)]
    
    # Step 9: Rank by structural importance (number of cross-disciplinary connections)
    def rank_key(node):
        subject = node.get("subject", "")
        # Prioritize Science and Math bottlenecks first
        priority_weight = {"SCIENCE": 3, "MATH": 3, "SOCIAL_STUDIES": 2, "ELAR": 2}.get(subject, 1)
        return priority_weight

    gap_nodes.sort(key=rank_key, reverse=True)
    selected_gaps = gap_nodes[:limit]

    print(f"📊 Graph Query Results: Found {len(gap_nodes)} total gaps across {len(nodes)} standards.")
    print(f"🚀 Dispatching top {len(selected_gaps)} prioritized gap nodes for autonomous subagent build...")

    dispatch_package = {
        "dispatch_id": f"LAUNCH-{datetime.utcnow().strftime('%Y%m%d-%H%M%S')}",
        "stop_condition": {
            "max_runtime_seconds": 600,
            "max_nodes_to_generate": len(selected_gaps),
            "verification_gate_script": "00-system/validator_gate.py"
        },
        "tasks": []
    }

    for node in selected_gaps:
        dispatch_package["tasks"].append({
            "target_standard_id": node.get("id"),
            "tea_code": node.get("tea_code", node.get("code")),
            "subject": node.get("subject"),
            "grade_band": node.get("grade_band", "3-5"),
            "skill_file": "20-skills/curriculum_generator/SKILL.md",
            "return_schema": "00-system/SCHEMA.md"
        })

    try:
        out_file = LAUNCH_DIR / f"active_dispatch_{dispatch_package['dispatch_id']}.json"
        with open(out_file, "w", encoding="utf-8") as f:
            json.dump(dispatch_package, f, indent=2)
    except Exception:
        out_file = Path("/tmp/active_dispatch.json")
        with open(out_file, "w", encoding="utf-8") as f:
            json.dump(dispatch_package, f, indent=2)

    print(f"✅ Dispatch package written to: {out_file}")
    return out_file

if __name__ == "__main__":
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    query_graph_for_gaps(limit)
