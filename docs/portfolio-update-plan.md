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

### 3A. Replace Agile card with AI card + reorder
- [x] Remove "Agile Development & Collaboration" service from `en.json` + `es.json`
- [x] Add "AI-Assisted Development & Agentic Workflows" as first service in `en.json` + `es.json`
- [x] Reorder: AI → Frontend → Performance → Testing → Components → API

### 3B. Update serviceIcons
- [x] Remove `agile` icon mapping from `Services/index.tsx`
- [x] Add `ai` icon mapping (`bi bi-robot`) in `Services/index.tsx`

---

## Section 4: Portfolio

~~Skipped — project descriptions don't need AI references; the AI focus is already clear from Welcome, About, and Services.~~

---

## Section 5: Contact

~~Skipped — current tagline works well; adding AI here would be redundant.~~

---

## Section 6: Metadata

**Files:** `src/app/layout.tsx`

- [x] Update `description` meta tag with AI-driven identity
- [x] Update `keywords` meta tag with AI-related terms

---

## Progress

| Section   | Status      |
| --------- | ----------- |
| Welcome   | Done        |
| About     | Done        |
| Services  | Done        |
| Portfolio | Skipped     |
| Contact   | Skipped     |
| Metadata  | Done        |
