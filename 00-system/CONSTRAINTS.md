# 🛡️ Permanent Engine Constraints: CONSTRAINTS.md
**Version:** 1.0.0  
**Phase:** Phase IV · Step 13  
**Rule:** Loaded at the top of every agent run. A mistake recorded here is NEVER repeated by any agent in any future run.

---

### 1. Pedagogical & Timing Constraints
- `C01`: Max Lab Duration is strictly **45 minutes** (10 min prep/walk, 25 min field stations, 10 min debrief). Never generate a lab exceeding 45 minutes for standard K-12 periods.
- `C02`: Every lab MUST fulfill the **"Living Campus Multiplier"**: minimum **3 discrete academic disciplines** and minimum **5 state standards** per single 45-minute outdoor investigation.
- `C03`: Grade Band Pacing Limits:
  - `K-2`: Maximum 2 field stations, focus on qualitative observation, sensory tactile logging, and count representations.
  - `3-5`: Maximum 3 field stations, simple arithmetic ($A = \pi r^2$, pacing averages), IR temperature logging.
  - `6-8`: Protractor clinometer trigonometry ($H = D \cdot \tan\theta + h_{\text{eye}}$), albedo percentage ($\alpha = S_{\text{out}} / S_{\text{in}}$), sensible vs latent heat.
  - `9-12`: Beer-Lambert law ($I = I_0 e^{-k \cdot \text{LAI}}$), symbiotic nitrogen fixation nodule assays, microclimate thermodynamics.

### 2. Standards & State Compliance Constraints
- `C04`: Science standards MUST explicitly state both the **Scientific and Engineering Practice (SEP)** (e.g., *5.1A/5.1B/5.1G*) and the **Recurring Theme and Concept (RTC)** (e.g., *5.5B Patterns / 5.5E Energy and Matter*).
- `C05`: Dual Units Required: All field measurements MUST be documented in both **Metric (m, cm, °C, mL)** and **Imperial (ft, in, °F, oz)**.
- `C06`: Zero-PII FERPA/COPPA Compliance: Never request, record, or store student names, ID numbers, or individual test scores. All progress logging is anonymous and client-side (`localStorage`).

### 3. Print & Formatting Constraints
- `C07`: Student Clipboard Worksheets MUST format in pure black-and-white, high-contrast `@media print` 8.5x11" layout with boxed data tables and designated pencil fill-in lines. Zero full-bleed color backgrounds.
- `C08`: Bilingual Integration: All primary botanical, anatomical, and ecological terms MUST include their authentic South Texas Spanish/English pairings (*e.g., Honey Mesquite / Mezquite Dulce, Dappled Shade / Komorebi / Sombra Moteada, Clay Pan / Barro*).
