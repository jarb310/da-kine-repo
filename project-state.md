# Project state
Last updated: 2026-09-23

## Works
- Next.js site (App Router, TypeScript, plain CSS) deploys on Vercel at https://da-kine-repo.vercel.app/
- A Supabase project exists and is linked to the repo. The site does not use it yet.

## Broken or flaky
- Nothing known.

## Environment notes
- Hosting: Vercel, deploys from the main branch of jarb310/da-kine-repo.
- Database and auth: Supabase. Not yet called by any code.
- Not verified: whether the Supabase URL and public key are set in Vercel's environment variables and in .env.local.
- Work happens in Claude Code in the browser at claude.ai/code.

## Next session
- Start Slice 1: sign up and log in.
- Open question for Shadic: turn off "Confirm email" in Supabase so fake emails can sign up? Recommended: yes, since the app only uses fake data.
- Check that Supabase environment variables exist in Vercel before writing auth code.
