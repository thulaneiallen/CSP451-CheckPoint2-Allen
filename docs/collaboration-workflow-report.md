# Collaboration Workflow Report

## 1) Issues Created

I created three GitHub issues to plan the checkpoint work before opening pull requests. Issue #1 was for user authentication validation, which included improving the login form, adding loading/error feedback, and wiring an `/api/auth/login` route. Issue #2 was for the database connection module, which included adding an in-memory store, environment-based configuration, and helper functions such as `connect()`, `insert()`, `query()`, and `clear()`. Issue #3 was for API endpoint expansion, which included splitting the API router into modules and adding a POST `/api/items` endpoint with validation.

## 2) PR Summary

PR #4, `[Feature] User authentication validation`, closed Issue #1. It updated `public/login.js`, added `src/routes/auth.js`, wired the auth route in `src/app.js`, and added smoke test coverage.

PR #5 , `[Feature] API endpoint expansion`, closed Issue #3. It split the API route into smaller modules, added the items route, added POST validation, and updated the smoke test. This PR also included the merge conflict resolution from the README and smoke test conflicts.

PR #6 , `[Feature] Database connection module`, closed Issue #2. It implemented an in-memory database module, added configuration from environment variables, documented the database settings, and updated smoke tests for the database helpers.

Screenshots were included for each PR, including titles, checklist items, review comments, and merge evidence.

## 3) Review Simulation Evidence

I used comment-based self-review because GitHub does not allow the PR author to formally approve their own pull request. Each PR received review comments checking the main changes before merging. The user authentication PR included a critical self-review comment noting that the login form should guard against very long email input. I addressed this with a follow-up commit, `fix(auth): limit email length before login submit`, then added a follow-up review comment confirming the issue was resolved.

Before merging, I ran `npm test`, `npm run lint`, and `npm run format:check` to confirm the project still passed its checks.

## 4) Merge Strategy

I used Squash and merge for each pull request. This kept the `main` branch history clean by turning each feature branch into one meaningful commit on `main`. The benefit I observed was that the final history was easier to read because each merged feature appeared as a single completed unit instead of several smaller development commits.
