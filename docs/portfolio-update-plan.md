# Portfolio Update Plan — AI-Driven Alignment

> Goal: Update portfolio content to align with the new AI-driven Senior Software Engineer resume.

## Overview

Update all sections and locale files (en.json + es.json) to reflect the shift toward AI-assisted development and agentic workflows.

**Reference:** See [`docs/resume.md`](resume.md) for the full AI-driven resume that this plan aligns to.

---

## Section 1: Welcome

**Files:** `src/screens/Welcome/index.tsx`, `en.json`, `es.json`

- [x] Update `welcome.role` → "AI-Driven Senior Software Engineer" (EN) / "Ingeniero de Software Senior impulsado por IA" (ES)
- ~~Add WhatsApp social link~~ (Skipped — not wanted on Welcome page)
- [ ] (Optional) Update marquee text to include AI-driven identity

---

## Section 2: About

**Files:** `src/screens/About/index.tsx` (hardcoded skills), `en.json`, `es.json`

### 2A. Background text
- [x] Rewrite `about.background` in `en.json` — lead with AI-driven identity, agentic workflows, task decomposition
- [x] Rewrite `about.background` in `es.json` — same content in Spanish

### 2B. Skills array
- [x] Move "AI Tools" from position 10 to position 3–4 in `About/index.tsx`
- [x] Rename to "AI-Assisted Development (Copilot, Cursor, ChatGPT)"
- [x] Add Cursor to the entry (missing from current list)

### 2C. Experiences
- [x] Update Wizeline `position` → "Senior Software Engineer (Frontend / AI-Driven)" in `en.json` + `es.json`
- [x] Rewrite Wizeline `description` to highlight AI-assisted and agentic workflows in `en.json` + `es.json`

### 2D. Resume PDF link
- [ ] Verify/update resume PDF filename in `About/index.tsx` — current PDF exists, replace with updated version when ready

---

## Section 3: Services

**Files:** `src/screens/Services/index.tsx` (hardcoded serviceIcons), `en.json`, `es.json`

- [ ] Add new service: "AI-Assisted Development & Agentic Workflows"
- [ ] Add matching icon in `serviceIcons` map
- [ ] Consider replacing or reworking "Agile" card to make room, or keep all 7

---

## Section 4: Portfolio

**Files:** `en.json`, `es.json`

- [ ] Update Nerdwallet/Wizeline project description to mention AI-assisted workflows
- [ ] (Optional) Update Evidation description similarly

---

## Section 5: Contact

**Files:** `en.json`, `es.json`

- [ ] Update tagline to reflect AI-driven partnership

---

## Section 6: Metadata

**Files:** `src/app/layout.tsx`

- [ ] Update `description` and `keywords` meta tags to include AI-driven development, agentic workflows

---

## Progress

| Section   | Status      |
| --------- | ----------- |
| Welcome   | Done        |
| About     | Done        |
| Services  | Not started |
| Portfolio | Not started |
| Contact   | Not started |
| Metadata  | Not started |
