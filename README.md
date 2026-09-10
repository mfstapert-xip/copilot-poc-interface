# Copilot PoC Interface

A barebones React application for testing the Copilot non-dev interface approach using GitHub Codespaces.

> **For Agents:** See [AGENTS.md](AGENTS.md) for behavior guidelines and interaction patterns.

## Quick Start

### Using Codespaces

1. Click **Code** → **Codespaces** → **Create codespace on main**
2. VS Code opens in your browser
3. Open **Copilot Chat** (Ctrl+Shift+I or Cmd+Shift+I)
4. Start prompting changes!

### Local Development

```bash
npm install
npm start
```

The app runs on `http://localhost:3000`

## How It Works

1. **You (non-dev)** open a Codespace
2. **You prompt Copilot Chat** with requests like:
   - "Add a button that says 'Click me'"
   - "Create a todo list component"
   - "Add dark mode toggle"
3. **Copilot agent** responds with code changes pushed to a new branch
4. **Your Codespace syncs** and the app updates live
5. **You review changes** on the preview URL
6. **You approve** → PR created for dev review

## Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Scripts** - Build tooling
- **Codespaces** - Cloud development environment
- **Copilot Chat** - AI-powered prompting
