# Copilot Instructions

## Git Conventions

### Branch naming
- Format: `<type>/<prefix>-<number>/<short-description>`
- Prefixes: `F` = feature, `B` = bug, `C` = chore
- Examples:
  - `feature/F-33/eslint-prettier-configuration`
  - `bug/B-12/sidebar-mobile-layout`
  - `chore/C-5/dependency-updates`

### Commit messages
- Format: `<prefix>-<number>: description`
- Use the same prefix/number as the branch
- Keep the first line under 72 characters
- Add bullet points for details when needed
- Examples:
  - `F-33: add eslint and prettier configuration`
  - `B-12: fix sidebar layout on mobile`

### Pull request descriptions
- Follow the template at `.github/PULL_REQUEST_TEMPLATE.md`
- Provide the PR description in markdown format, ready to copy and paste

## Project

- **Framework:** Next.js 15 with React 19 and TypeScript
- **Package manager:** pnpm
- **i18n:** i18next with locale files at `src/i18n/locales/en.json` and `es.json`
- **Styling:** Bootstrap 5 + CSS modules
- **Content:** Most content lives in locale JSON files; some data is hardcoded in components
