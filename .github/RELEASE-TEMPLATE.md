<!--
Release drafting notes:
- Lead with changes QFlashcard users feel in their apps: component behavior, app-extension behavior, public API, styling, compatibility, install, and migration notes.
- Include docs, CodePen, build tooling, dependency, or release-process changes only when they affect package consumers.
- Fixes should include the short commit id.
- Keep the summary short and concrete.
-->

# QFlashcard v3.x.x

Release date: YYYY-MM-DD

## Summary

Short user-facing summary of what changed for QFlashcard component/app-extension users.

## What's Changed

**Features:**

- `commitid` Describe new component, app-extension, public API, styling, or integration behavior.

**Fixes:**

- `commitid` Describe the bug, who it affected, and what now works correctly.

**Maintenance:**

- `commitid` Include only consumer-relevant maintenance, such as package prep, compatibility updates, or dependency updates that users may notice.

## Breaking Changes

- None.

## Compatibility

- Node.js: `>=22.13`
- Quasar: `^2.21.1`
- Quasar App Vite target: `@quasar/app-vite@3.0.0`
- npm dist-tag: `latest`

## Installation

```bash
pnpm add @quasar/quasar-ui-qflashcard
# or
bun add @quasar/quasar-ui-qflashcard
# or
yarn add @quasar/quasar-ui-qflashcard
# or
npm install @quasar/quasar-ui-qflashcard
# or
quasar ext add @quasar/qflashcard
```

Use the default `latest` dist-tag for stable releases. Add a prerelease tag, such as `@beta`, only when publishing under that dist-tag.

## Documentation

- Docs: https://qflashcard.netlify.app/
- Installation: https://qflashcard.netlify.app/getting-started/installation
- Upgrade Guide: https://qflashcard.netlify.app/other/upgrade-guide

## Full Changelog

https://github.com/quasarframework/quasar-ui-qflashcard/compare/PREVIOUS_TAG...CURRENT_TAG

## Donations

If QFlashcard is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64
