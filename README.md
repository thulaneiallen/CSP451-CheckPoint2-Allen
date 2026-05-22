# CSP-451 Web Starter — Week 2 CheckPoint 2

This repository is a starter project for practicing advanced Git workflows, including branching, pull requests, self-review, merge conflicts, and squash merges.


## Quick Start (Auth + API Branch Notes)

```bash
npm install
npm run dev


## Database Configuration

The database module uses an in-memory store for this checkpoint. It reads optional configuration values from environment variables:

- `DB_URL` — defaults to `memory://local`
- `DB_POOL` — defaults to `4`

The module exposes `connect()`, `insert()`, `query()`, and `clear()` helpers for simple testing and feature development.
