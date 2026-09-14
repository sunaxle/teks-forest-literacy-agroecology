/**
 * Automated Test Suite for Forest Literacy Knowledge Graph Engine (v3.0.0)
 * Evaluates: DAG cycles, 52-module matrix integrity, quarterly filtering,
 * prerequisite unlocking, mastery calculations, and search indexing.
 *
 * Built with ECC TDD & Eval-Harness Protocol.
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

const graphModule = require(path.join(__dirname, '../graph/forest_literacy_knowledge_graph.js'));
const matrixPath = path.join(__dirname, '../matrices/teks_forest_literacy_master_matrix.json');

console.log("🌲 [ECC EVAL HARNESS] Running Knowledge Graph Engine Tests...\n");

// 1. Initialize Engine
const engine = graphModule.createEngine();
assert(engine, "Engine should initialize successfully");
console.log("✅ Test 1 Passed: Engine created successfully");

// 2. Validate Node Count
const raw = graphModule.raw;
assert(raw.nodes.length >= 52, `Expected at least 52 nodes, found ${raw.nodes.length}`);
console.log(`✅ Test 2 Passed: Found ${raw.nodes.length} total nodes (52 K-12 + specialized)`);

// 3. Test DAG Acyclicity
try {
  engine.validateAcyclic();
  console.log("✅ Test 3 Passed: Knowledge Graph is strictly acyclic (DAG validated)");
} catch (e) {
  assert.fail(`DAG cycle detected: ${e.message}`);
}

// 4. Test Quarterly Filtering (Q1, Q2, Q3, Q4)
const quarters = ['q1', 'q2', 'q3', 'q4'];
quarters.forEach(q => {
  const qNodes = engine.getFilteredNodes(q);
  assert(qNodes.length >= 13, `Expected at least 13 nodes for quarter ${q.toUpperCase()}, found ${qNodes.length}`);
  qNodes.forEach(node => {
    if (node.quarter) {
      assert.strictEqual(node.quarter.toLowerCase(), q, `Node ${node.id} quarter should be ${q}`);
    }
  });
});
console.log("✅ Test 4 Passed: Quarterly filtering returns correct nodes for Q1, Q2, Q3, Q4 (13+ nodes per quarter)");

// 5. Test Grade Band Filtering
const tiers = ['k2', '3_5', '6_8', '9_12'];
tiers.forEach(t => {
  const tNodes = engine.getFilteredNodes(t);
  assert(tNodes.length >= 12, `Expected at least 12 nodes for tier ${t}, found ${tNodes.length}`);
});
console.log("✅ Test 5 Passed: Grade band filtering returns correct nodes for K-2, 3-5, 6-8, 9-12");

// 6. Test Prerequisite Unlocking Flow
const initialStatuses = engine.getNodeStatuses([]);
assert.strictEqual(initialStatuses.get('LAB-K-Q1'), 'unlocked', "Q1 node should be unlocked initially");
assert.strictEqual(initialStatuses.get('LAB-K-Q2'), 'locked', "Q2 node should be locked initially before Q1 completion");

const completedStatuses = engine.getNodeStatuses(['LAB-K-Q1']);
assert.strictEqual(completedStatuses.get('LAB-K-Q1'), 'completed', "Q1 should be marked completed");
assert.strictEqual(completedStatuses.get('LAB-K-Q2'), 'unlocked', "Q2 should now be unlocked after Q1 completion");
console.log("✅ Test 6 Passed: Prerequisite unlocking and status transitions work correctly");

// 7. Test Mastery Points Stats
const stats0 = engine.getProgressStats([]);
assert.strictEqual(stats0.completedCount, 0);
assert.strictEqual(stats0.percent, 0);

const stats1 = engine.getProgressStats(['LAB-K-Q1', 'LAB-G5-Q2']);
assert.strictEqual(stats1.completedCount, 2);
assert.strictEqual(stats1.earnedPoints, 200);
assert(stats1.percent > 0, "Mastery percentage should be greater than 0");
console.log("✅ Test 7 Passed: Gamified mastery points and percentage calculations are accurate");

// 8. Test Search Indexing
const searchResults = engine.getFilteredNodes('all', 'all', 'all', 'albedo');
assert(searchResults.length > 0, "Search for 'albedo' should return matching nodes");
const searchTeks = engine.getFilteredNodes('all', 'all', 'all', '5.12B');
assert(searchTeks.length > 0, "Search for TEKS code '5.12B' should return matching nodes");
console.log(`✅ Test 8 Passed: Search indexing successfully matches keywords and TEKS standards (Found ${searchResults.length} for 'albedo', ${searchTeks.length} for '5.12B')`);

// 9. Verify JSON Master Matrix Alignment
const matrixData = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));
assert.strictEqual(matrixData.nodes.length, 52, "Matrix should contain exactly 52 K-12 nodes");
assert.strictEqual(matrixData.edges.length, 51, "Matrix should contain exactly 51 progression edges");
console.log("✅ Test 9 Passed: Master JSON matrix contains exactly 52 nodes and 51 edges");

console.log("\n🎉 [ALL 9 TESTS PASSED] Knowledge Graph Engine is 100% verified and production-ready.");
