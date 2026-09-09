# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Working example: query params with `navigate()` + `history: 'replace'`

`src/pages/usePushState.astro` reproduces https://github.com/withastro/astro/issues/17882 and shows three ways to change the URL's query params:

| Button | Code | Result |
| --- | --- | --- |
| **Default push state** | `history.pushState(null, '', '?testvalue=true')` | ❌ Breaks back navigation: after navigating to `/returnPage/` and pressing Back, the URL changes but the page content does not (see #17882). |
| **Fix push state** | `pushUrlState(url)` — passes `{ index, scrollX, scrollY }` state | ✅ Keeps the history entry router-managed, so Back works. |
| **navigate() with history: 'replace'** | `navigate('?testvalue=true', { history: 'replace' })` | ✅ Supported way: query param is swapped via a client-side view transition — **no full page reload** — and history stays consistent. |

Direct `history.pushState` is not part of Astro's supported API; the supported programmatic navigation is [`navigate()`](https://docs.astro.build/en/reference/modules/astro-transitions/#navigate), which is built on the History API and handles URL/query-param changes without reloading the page. If you must call `history.pushState`/`replaceState` yourself, pass a state object (e.g. `history.state`) instead of `null` so the entry stays router-managed.
