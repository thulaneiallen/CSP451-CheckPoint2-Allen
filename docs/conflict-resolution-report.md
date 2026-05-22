# Conflict Resolution Report

## 1) Conflict Scenario

The intentional conflict was created in `README.md` between the `feature/user-authentication` and `feature/api-endpoints` branches. On the authentication branch, I changed the `## Quick Start` heading to `## Quick Start (Auth Branch Notes)`. On the API branch, I changed the same heading to `## Quick Start (API Branch Notes)`. After the authentication branch was merged into `main`, the API branch conflicted when I merged the latest `main` into it.

A second conflict also appeared in `src/tests/smoke.test.js` because the authentication, API, and database work all changed the smoke test file to check different parts of the application.

## 2) What I Saw

Git marked the conflict with standard conflict markers: `<<<<<<<`, `=======`, and `>>>>>>>`. In `README.md`, the markers showed the API branch version on one side and the authentication branch version from `origin/main` on the other side. This made it clear that both branches had edited the same Quick Start heading differently. I captured a screenshot of the conflict markers before resolving the file.

## 3) Resolution Strategy

For `README.md`, I kept both meanings by changing the heading to `## Quick Start (Auth + API Branch Notes)`. This preserved the purpose of both branches instead of choosing only one version.

For `src/tests/smoke.test.js`, I replaced the conflicted content with a combined smoke test that checked the database connection, authentication router, API router, and item validation helper. After resolving the conflicts, I staged the resolved files and committed the resolution with a clear merge commit message.

I verified the final result by running `npm test`, `npm run lint`, and `npm run format:check`. All checks passed after the conflict resolution.

## 4) Prevention Methods

In a real team, I would prevent similar conflicts by keeping pull requests smaller, communicating before editing shared files like `README.md` or smoke tests, and merging or rebasing from `main` more often. I would also avoid placing unrelated test changes in the same shared file when possible by splitting tests into separate files for each feature area.
