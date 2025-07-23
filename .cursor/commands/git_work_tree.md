# Command initiation

/git-work-tree

# Parallel tasks execution

ARGUMENTS: $ARGUMENTS

## Step 1: Setup git worktree

Let's firstly setup a git work trees in 'trees' folder 
Run `git worktree add -b branch-name ./trees/branch-name
Replace branch-with a good name that reflect the meaning

After that, for each branch, we should go into the folder (with absolute path) and do `npm install` to setup

## Step 2: Start Parallel sub agents

This enables to use a new subagent that use the Task tool to execute in each git worktree parallel.

This enables to concurrently build the feature in parallel so we can test and validate each subagent's changes in isolation then pick the best changes.

The first agent will run in trees/<branch-name>/


The code in each trees will be identical to the code in the current branch. It will be setup and ready for you to build the feature end to end.

Each agent will independently implement the engineering plan based on task in their respective workspace.

When a subagent completes it's work, have the subagent to report their final changes made in a comprehensive `RESULTS.md` file at the root of their respective workspace.

Make sure agents don't run `start.sh` or any other script that would start the server or client - focus on the code changes only.
