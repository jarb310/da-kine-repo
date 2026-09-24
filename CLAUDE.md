# CLAUDE.md

## Stack
- Next.js with the App Router, TypeScript, plain CSS (no Tailwind, no CSS frameworks)
- Supabase for sign-in and data
- Deployed on Vercel from the main branch

## Commands
- `npm install` installs dependencies
- `npm run dev` runs the site locally
- `npm run build` checks that the site builds; run it before saying work is done

## Never
- Add a dependency without asking first.
- Edit .env, .env.local, or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Put passwords, API keys, or connection strings in code, commits, or chat.
- Use real personal data. Fake names and fake content only.
- Commit or merge without showing Shadic the changes first, unless the prompt says to.

## Conventions
- Shadic has no coding background. Explain every change in plain language, and define technical terms the first time they come up.
- Keep changes small and limited to the active slice.
- Pages and routes live in the app folder.
- When finished, list the files changed and what each change does, then stop.
- Secrets go in .env.local locally and in Vercel's environment variables. Tell Shadic which variable name is needed; never write the value.

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
