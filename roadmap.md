# Roadmap

## What this is
A study task list for people learning a language. Each task is tagged with a skill, so the learner can see which skill they have been avoiding.

## What Done means
A stranger opens https://da-kine-repo.vercel.app/, signs up with an email and password, and adds a few study tasks, each tagged with one of six skills: Reading, Writing, Listening, Speaking, Vocabulary, Grammar. They check some tasks off and log out. When they log back in, their tasks are still there, and a summary shows how many tasks they've finished for each skill and marks the lowest one "Avoiding."

## Slices
1. Sign up and log in | done-criteria: 1) On the live site, click "Sign up", enter a new fake email and a password, and see a page that says "Signed in as" followed by that email. 2) Click "Log out" and see the login form, not the signed-in page. 3) Log in with the right email and a wrong password, and see an error message while staying logged out. 4) Log in with the right password, close the tab, reopen the site, and still see "Signed in as" that email. | status: ACTIVE
2. Tasks with a skill tag | done-criteria: 1) While signed in, type a task, choose "Speaking" from the skill menu, click "Add", and see the task in the list with a "Speaking" label. 2) Add two tasks, log out, log back in, and see both tasks. 3) Check one task off, refresh the page, and see it still marked done. 4) Sign in as a second fake account and see none of the first account's tasks. | status: pending
3. Skill balance summary | done-criteria: 1) With a new account, finish two Reading tasks and nothing else; the summary lists all six skills, Reading shows 2 and the other five show 0. 2) In that same state, see "Avoiding" next to one of the skills that shows 0, never next to Reading. 3) Finish one task in every skill except Grammar, refresh, and see "Avoiding" next to Grammar only. | status: pending

## Backlog
- Editing tasks
- Deleting tasks
- Due dates
- Custom skills beyond the six
- Tracking more than one language
- Streaks
- Charts
- Password reset by email
- Sign-in with Google
- Reminders
- Polishing the layout for phones
- Sharing lists
