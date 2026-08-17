# Day 25: Comprehensive Vite + React Introduction, Package Managers & Study Guide

Welcome to **Day 25** of the FullStack Coursework! This guide covers everything you need to know about **Vite**, **React 18**, **JSX**, **Virtual DOM**, **Client-Side Routing**, **Package Managers (`npm`, `Yarn`, `pnpm`, `Bun`, `Deno`)**, and **Node.js LTS Releases**, complete with **30+ Technical Interview Practice Questions & Answers**.

---

## 📚 Table of Contents
1. [What is React?](#1-what-is-react)
2. [What is Vite & Why Choose Vite Over Create React App / Webpack?](#2-what-is-vite--why-choose-vite-over-create-react-app--webpack)
3. [Package Managers & Modern JS Runtimes (`npm`, `Yarn`, `pnpm`, `Bun`, `Deno`)](#3-package-managers--modern-js-runtimes-npm-yarn-pnpm-bun-deno)
4. [Node.js Release Cycles & What is LTS?](#4-nodejs-release-cycles--what-is-lts)
5. [Semantic Versioning (SemVer) Deep Dive](#5-semantic-versioning-semver-deep-dive)
6. [Virtual DOM & The Reconciliation Algorithm](#6-virtual-dom--the-reconciliation-algorithm)
7. [JSX (JavaScript XML) & Transpilation](#7-jsx-javascript-xml--transpilation)
8. [Single Page Application (SPA) vs Multi-Page Application (MPA)](#8-single-page-application-spa-vs-multi-page-application-mpa)
9. [Component Architecture & React Fiber](#9-component-architecture--react-fiber)
10. [Client-Side Routing with `react-router-dom`](#10-client-side-routing-with-react-router-dom)
11. [Vite + React Project Directory Structure](#11-vite--react-project-directory-structure)
12. [30+ Technical Interview Practice Questions & Answers](#12-30-technical-interview-practice-questions--answers)

---

## 1. What is React?

**React** is an open-source JavaScript library developed by Meta (Facebook) for building dynamic, interactive user interfaces, specifically for Single-Page Applications (SPAs).

### Key Features of React:
- **Declarative Programming:** You declare *what* the UI should look like for a given application state, and React handles DOM updates automatically.
- **Component-Based Architecture:** UIs are built out of small, isolated, and reusable building blocks called components.
- **Unidirectional Data Flow:** Data flows down from parent components to child components via `props`.
- **Virtual DOM:** In-memory representation of real DOM elements for high-performance updates.

---

## 2. What is Vite & Why Choose Vite Over Create React App / Webpack?

### What is Vite?
**Vite** (French for "fast", pronounced `/vit/`) is a modern frontend build tool created by Evan You (creator of Vue.js). It provides an extremely fast development server and optimized production build pipeline.

### Why Vite Over Webpack / Create React App (CRA)?

| Feature | Create React App (CRA / Webpack) | Vite |
| :--- | :--- | :--- |
| **Dev Server Bundling** | Bundles the **entire application** before serving. Slow startup on large apps. | Serves code via **Native ES Modules (ESM)**. Browsers load files on demand. |
| **Pre-bundling** | Slow node-based bundler (Webpack). | Uses **`esbuild`** (written in Go), 10x-100x faster than JavaScript bundlers. |
| **Hot Module Replacement (HMR)** | Re-bundles dependencies when code changes; becomes sluggish over time. | **Instant HMR** regardless of app size; only re-evaluates edited module. |
| **Production Build** | Webpack bundling. | **Rollup** with built-in code splitting & tree-shaking. |
| **Maintenance Status** | Deprecated / Archived by React core team. | Actively maintained industry standard. |

```
Traditional Webpack Flow:
[ Entry Point ] -> [ Bundle All Modules ] -> [ Ready Dev Server ] (Slow ⏳)

Vite Native ESM Flow:
[ Start Dev Server ] -> [ Browser Requests Module ] -> [ Transform On-Demand ] (Instant ⚡)
```

---

## 3. Package Managers & Modern JS Runtimes (`npm`, `Yarn`, `pnpm`, `Bun`, `Deno`)

When building modern web applications, you frequently encounter tools like `npm`, `Yarn`, `pnpm`, `Bun`, and `Deno`.

### ❓ Why are there so many tools? What problems do they solve?
The JavaScript ecosystem has evolved rapidly over the past 15 years. As web applications grew from small scripts into massive enterprise codebases, developers encountered major pain points: **slow installations**, **duplicated disk usage**, **security vulnerabilities**, **non-deterministic builds**, and **runtime performance bottlenecks**. Each tool was created to solve specific engineering flaws of its predecessors!

---

### 📦 1. `npm` (Node Package Manager)
- **Created in 2010** by Isaac Z. Schlueter as the default package manager bundled with Node.js.
- **How it works:** Reads `package.json`, downloads packages from the central `registry.npmjs.org`, and places them inside the local `node_modules/` directory.
- **Historical Evolution:**
  - **npm v1–v2:** Used deeply nested `node_modules` structure. A dependency `A` depending on `B` created `node_modules/A/node_modules/B`. This resulted in massive disk duplication and exceeded Windows MAX_PATH (260 char limit).
  - **npm v3+:** Switched to a **flat `node_modules`** structure, hoisting shared dependencies to the top level.
  - **npm v5+:** Introduced `package-lock.json` to guarantee reproducible builds across team environments.

---

### 🧶 2. `Yarn` (Yet Another Resource Negotiator)
- **Created in 2016** by Facebook, Google, and Exponent.
- **Why it was created:** In 2016, `npm` v3 was notoriously slow, lacked offline caching, lacked lockfiles (causing "works on my machine" bugs), and failed silently on network errors.
- **Key Innovations introduced by Yarn:**
  - **`yarn.lock` File:** Guaranteed deterministic, exact dependency trees across machines.
  - **Parallel Installation:** Downloaded multiple packages concurrently instead of sequentially, making installs 2x-5x faster than npm at the time.
  - **Offline Cache:** Cached downloaded `.tgz` packages locally so re-installs required zero network requests.
  - **Yarn Workspaces & Plug'n'Play (PnP):** Enabled efficient monorepo dependency management and eliminated `node_modules` overhead.

---

### ⚡ 3. `pnpm` (Performant npm)
- **Created in 2016** by Zoltan Kochan.
- **Why it was created:** Flat `node_modules` (used by npm and Yarn v1) created two major issues:
  1. **Enormous Disk Waste:** Every project stored duplicate copies of large packages (e.g. `lodash`, `react`, `typescript`) on disk.
  2. **Phantom Dependencies (Hoisting Leak):** Code could `require('express')` even if `express` wasn't declared in `package.json`, simply because another package hoisted it!
- **How `pnpm` Solved This (Hard Links & Symlinks):**
  - `pnpm` stores **ALL** packages in a single global content-addressable store on your computer (`~/.local/share/pnpm/store`).
  - Inside a project's `node_modules`, `pnpm` creates **hard links** to the global store and **symlinks** for nested dependencies.
  - **Result:** Saves 10s of Gigabytes of disk space, installs 2x-3x faster than npm/Yarn, and prevents phantom dependency bugs by enforcing strict isolation.

---

### 🥟 4. `Bun`
- **Created in 2023** by Jarred Sumner.
- **What it is:** An **all-in-one** JavaScript/TypeScript runtime, package manager, bundler, and test runner written in **Zig** and powered by Apple's high-performance **JavaScriptCore** engine (rather than Google's V8 used by Node.js).
- **Why it was created:** Node.js startup time, package installation speed, and bundler compilation speed were bottlenecked by single-threaded JavaScript execution.
- **Key Features:**
  - **Blazing Fast Speed:** Installs npm packages up to **25x-30x faster** than `npm` and **4x faster** than `pnpm` using binary-level system calls (`copy_file_range` / `clonefile`).
  - **Native TypeScript & JSX Support:** Executes `.ts` and `.jsx` files directly out-of-the-box without `tsc`, `babel`, or `ts-node`.
  - **Drop-in Node.js Compatibility:** Supports `node:fs`, `node:path`, CommonJS, and ES Modules natively.
  - **Built-in Tooling:** Replaces `npm`, `vite`, `jest`, and `esbuild` with a single binary (`bun run`, `bun install`, `bun test`, `bun build`).

---

### 🦕 5. `Deno`
- **Created in 2018** by **Ryan Dahl** (the original creator of Node.js!).
- **Why it was created:** Ryan Dahl gave a famous conference talk titled *"10 Things I Regret About Node.js"* (highlighting Node's security flaws, `node_modules` complexity, lack of standard browser Web APIs, and build system issues).
- **Key Innovations:**
  - **Secure by Default:** Deno runs code in a sandbox. Scripts cannot access the disk, network, environment variables, or sub-processes unless explicitly granted runtime flags (e.g., `deno run --allow-net --allow-read main.ts`).
  - **No `node_modules` or `package.json` required:** Modules are imported directly via HTTPS URLs or `jsr:` (JavaScript Registry):
    ```ts
    import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
    ```
  - **First-class TypeScript Support:** Compiles TypeScript natively out-of-the-box.
  - **Standard Web APIs:** Uses standard browser `fetch()`, `WebSocket`, `Web Crypto`, and `events`.
  - **Deno 2.0+:** Full backward compatibility with `npm:` package specifiers and Node.js built-ins.

---

### 📊 Package Manager & Runtime Feature Matrix

| Feature / Metric | `npm` | `Yarn` (v1/v4) | `pnpm` | `Bun` | `Deno` |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Type** | Package Manager | Package Manager | Package Manager | Runtime + PM + Bundler | Runtime + PM |
| **Engine / Language** | Node.js (JS) | Node.js (JS) | Node.js (JS) | JavaScriptCore (Zig) | V8 (Rust) |
| **Speed (Installation)** | Baseline (Slowest) | Fast | Very Fast | Extremely Fast (Fastest) | Fast |
| **Disk Space Efficiency**| Low (Duplicates per app) | Low (Duplicates per app) | **Maximum** (Global Hard Links) | High (Global Cache) | **Maximum** (Global URL Cache) |
| **Phantom Dep Protection**| ❌ No (Hoisted) | ❌ No (Plug'n'Play optional)| ✅ **Yes (Strict Symlinks)** | ❌ No | ✅ **Yes** |
| **Native TypeScript** | ❌ Requires setup | ❌ Requires setup | ❌ Requires setup | ✅ **Built-in** | ✅ **Built-in** |
| **Security Sandbox** | ❌ None | ❌ None | ❌ None | ❌ None | ✅ **Permissions Flags** |

---

### 🛠️ Common CLI Commands Comparison

| Task | `npm` | `Yarn` | `pnpm` | `Bun` | `Deno` |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Install All Dependencies** | `npm install` | `yarn` | `pnpm install` | `bun install` | `deno install` |
| **Add a Package** | `npm i react` | `yarn add react` | `pnpm add react` | `bun add react` | `deno add npm:react` |
| **Add Dev Dependency** | `npm i -D vite` | `yarn add -D vite` | `pnpm add -D vite` | `bun add -d vite` | `deno add npm:vite` |
| **Run Dev Script** | `npm run dev` | `yarn dev` | `pnpm dev` | `bun dev` | `deno task dev` |
| **Execute Binary (npx)** | `npx create-vite` | `yarn dlx create-vite` | `pnpm dlx create-vite` | `bunx create-vite` | `deno run npm:create-vite` |

---

## 4. Node.js Release Cycles & What is LTS?

When downloading Node.js from [nodejs.org](https://nodejs.org/), you see two main download choices: **LTS (Recommended for Most Users)** and **Current (Latest Features)**.

```
       Current Release (Odd Versions e.g. Node 21)
       [ 6 Months Active ] ──> [ EOL (End of Life) ]

       LTS Release (Even Versions e.g. Node 20)
       [ 6 Months Current ] ──> [ 12 Months Active LTS ] ──> [ 12 Months Maintenance ] ──> [ EOL ]
       └───────────────────────── Total 30 Months Support ─────────────────────────┘
```

---

### 🔍 What does LTS Stand For?
**LTS** stands for **Long-Term Support**. 

An LTS release is a version of Node.js that is guaranteed to receive critical security updates, bug fixes, performance improvements, and API stability for a total of **30 months (2.5 years)**.

---

### 🔄 Node.js Release Classification:

#### 1. Current Releases (Odd Numbers: v19, v21, v23)
- Feature cutting-edge experimental JavaScript APIs and early engine updates.
- Released every 6 months (April).
- **Lifecycle:** Only active for 6 months. They **NEVER** become LTS!
- **Target Audience:** Open-source library maintainers testing upcoming features. **NOT recommended for production environments.**

#### 2. Active LTS Releases (Even Numbers: v18, v20, v22)
- Released every October as "Current", then promoted to **Active LTS** in October of the following year.
- Focuses strictly on **stability, performance, security, and backward compatibility**. No breaking API changes are introduced.
- **Target Audience:** Enterprise applications, production servers, cloud hosting deployments (Render, AWS, Vercel, Docker).

#### 3. Maintenance LTS
- After 12–18 months in Active LTS, the version enters **Maintenance** status for its final 12 months.
- Only critical security patches and high-severity bug fixes are applied.

---

### 🛡️ Why do Production Deployments Require LTS?
1. **Stability Guarantee:** Production APIs will not break overnight due to experimental engine updates.
2. **Security Compliance:** Enterprise infrastructure receives verified security patches for 30 months.
3. **Cloud & PaaS Compatibility:** Cloud providers (AWS Lambda, Render, Google Cloud, Docker images) standardize their deployment containers around Node LTS major releases.

---

## 5. Semantic Versioning (SemVer) Deep Dive

All packages published to `npm` and release versions of Node.js follow **Semantic Versioning (SemVer)** formatted as:

$$\text{MAJOR} . \text{MINOR} . \text{PATCH} \quad (\text{e.g., } 20.11.1)$$

```
        Major Version (Breaking changes)
        │   Minor Version (New backward-compatible features)
        │   │   Patch Version (Backward-compatible bug fixes)
        ▼   ▼   ▼
        20 . 11 . 1
```

### 1. `MAJOR` Version Change (`20.0.0` ➔ `21.0.0`)
- Indicates **breaking API changes**. Code written for version 20 may break when upgrading to version 21 without manual refactoring.

### 2. `MINOR` Version Change (`20.11.0` ➔ `20.12.0`)
- Indicates **new features added in a backward-compatible manner**. Existing code continues to work without modifications.

### 3. `PATCH` Version Change (`20.11.0` ➔ `20.11.1`)
- Indicates **backward-compatible bug fixes** and performance security patches.

---

### 🎯 SemVer Prefixes in `package.json`

| Prefix Syntax | Example | Allowed Updates | Meaning |
| :--- | :--- | :--- | :--- |
| **Caret (`^`)** | `"react": "^18.2.0"` | `< 19.0.0` (Allows Minor & Patch updates) | Updates to latest **Minor & Patch** without breaking Major version. *(Default in npm)* |
| **Tilde (`~`)** | `"express": "~4.18.1"` | `< 4.19.0` (Allows Patch updates only) | Updates to latest **Patch** fixes only within the specified Minor version. |
| **Exact (`=`)** | `"vite": "5.1.0"` | `5.1.0` ONLY | Locks version strictly. No automatic updates. |

---

## 6. Virtual DOM & The Reconciliation Algorithm

### What is the Real DOM?
The **Document Object Model (DOM)** is the browser's tree representation of an HTML document. Directly manipulating the Real DOM (e.g., `document.createElement`, `innerHTML`) is slow because every change triggers **Reflow** (layout computation) and **Repaint** (drawing pixels).

### What is the Virtual DOM (VDOM)?
The Virtual DOM is a lightweight, plain JavaScript object representation of the Real DOM kept in memory.

```js
// Example of a Virtual DOM Node Object
{
  type: 'button',
  props: {
    className: 'btn-primary',
    children: 'Click Me',
    onClick: [Function]
  }
}
```

### The Diffing & Reconciliation Process:
1. **Render Trigger:** State changes inside a React component.
2. **New VDOM Tree Creation:** React creates a new Virtual DOM tree representing the updated state.
3. **Diffing Algorithm ($O(n)$ complexity):** React compares the **new VDOM tree** with the **previous VDOM tree**.
4. **Reconciliation & Batching:** React calculates the minimal set of changes needed and updates *only* those specific nodes in the Real DOM.

---

## 7. JSX (JavaScript XML) & Transpilation

### What is JSX?
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside JavaScript files (`.jsx`).

### How JSX Works Under the Hood:
Browsers **cannot read JSX directly**. Tools like Babel or SWC compile JSX into standard `React.createElement()` JavaScript calls.

```jsx
// 1. What you write in JSX:
const element = <h1 className="title">Hello World</h1>;

// 2. What it gets compiled into by Babel / SWC:
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello World'
);
```

### Essential Rules of JSX:
1. **Single Root Element:** Must return a single parent container or Fragment (`<>...</>`).
2. **camelCase Attributes:** HTML attributes use camelCase (e.g., `className` instead of `class`, `htmlFor` instead of `for`, `onClick` instead of `onclick`).
3. **Closing Tags:** All tags must be self-closed (e.g., `<img />`, `<br />`, `<input />`).
4. **JS Expressions:** Any valid JavaScript expression can be embedded inside `{}`.

---

## 8. Single Page Application (SPA) vs Multi-Page Application (MPA)

| Feature | Single Page Application (SPA) | Multi-Page Application (MPA) |
| :--- | :--- | :--- |
| **Page Reloads** | Single `index.html` loaded once. No full reloads on navigation. | Every route request downloads a new HTML page from the server. |
| **Routing** | Client-side routing (`react-router-dom`) updates DOM dynamically. | Server-side routing handles navigation requests. |
| **User Experience** | Fluid, app-like, desktop-smooth transitions. | Page flicker on every navigation request. |
| **Server Load** | Lower server load (serves static assets + API requests). | Higher server rendering load per request. |

---

## 9. Component Architecture & React Fiber

### Functional Components
Functional components are plain JavaScript functions that accept `props` as an argument and return JSX.

```jsx
const WelcomeBanner = ({ name }) => {
  return <h1>Welcome back, {name}!</h1>;
};
```

### React Fiber Architecture
Introduced in React 16, **React Fiber** is the complete rewrite of React's core reconciliation algorithm:
- Enables **incremental rendering**: Breaks rendering work into smaller chunks and spreads them out across multiple frames.
- Allows React to pause, reuse, or abort rendering work based on priority (e.g., user inputs take precedence over background network updates).

---

## 10. Client-Side Routing with `react-router-dom`

In a React SPA, client-side routing intercepts URL changes without causing full browser reloads.

### Core Components:
- **`<BrowserRouter>`**: Wraps the root application in `main.jsx` to enable browser history synchronization.
- **`<Routes>`**: Container that looks through all its child `<Route>` elements to find a matching URL.
- **`<Route path="..." element={<Component />} />`**: Maps a specific URL path to a view component.
- **`<Link to="...">` & `<NavLink to="...">`**: Navigation links that update the URL via `window.history.pushState` without triggering a server request.

---

## 11. Vite + React Project Directory Structure

```text
Day25 - Vite+React Introduction/
├── frontend/
│   ├── public/             # Static assets (favicons, icons)
│   ├── src/
│   │   ├── assets/         # Images, fonts, SVG media
│   │   ├── components/     # Reusable UI components (Navbar, Cards, Buttons)
│   │   ├── pages/          # View components mapped to routes (Home, Contact)
│   │   ├── routes/         # Centralized route definitions (AllRoutes.jsx)
│   │   ├── App.css         # Component & Layout Styles
│   │   ├── App.jsx         # Root Application Wrapper
│   │   ├── index.css       # Global Design Tokens & Resets
│   │   └── main.jsx        # Virtual DOM Mount & Entry Point
│   ├── index.html          # Single HTML host page with #root container
│   ├── package.json        # Dependencies & NPM scripts (dev, build, preview)
│   └── vite.config.js      # Vite dev server & plugin config
└── VITE_REACT_GUIDE.md     # Comprehensive Documentation & Study Notes
```

---

## 12. 30+ Technical Interview Practice Questions & Answers

### Q1: What is Vite and why is it faster than Webpack during development?
**Answer:** Vite uses native ES Modules (ESM) supported directly by modern browsers. Instead of bundling all JavaScript files into a single bundle before starting the dev server (like Webpack does), Vite starts the server instantly and lets the browser request modules on demand. Furthermore, Vite uses `esbuild` (written in Go) for dependency pre-bundling, which is 10-100x faster than JS-based bundlers.

### Q2: What is `pnpm` and how does it save gigabytes of disk space compared to `npm` and `Yarn`?
**Answer:** `pnpm` uses a global content-addressable store (`~/.local/share/pnpm/store`) for all packages on your computer. When you install dependencies in a project, `pnpm` creates **hard links** to the files in the global store and **symlinks** inside the local `node_modules`. If 10 projects use `react@18.2.0`, it is stored on disk **only once**, saving gigabytes of disk space.

### Q3: What is Bun and why is package installation in Bun so fast?
**Answer:** Bun is an all-in-one JavaScript runtime, package manager, and bundler written in Zig. It replaces Node.js and npm. Bun achieves ultra-fast package installation (up to 30x faster than npm) by using binary system calls (`copy_file_range` or `clonefile` on macOS/Linux), custom fast HTTP client logic, and executing natively without JVM/JS overhead.

### Q4: What is Deno and how does its security model differ from Node.js?
**Answer:** Deno is a secure JS/TS runtime created by Ryan Dahl (creator of Node.js). Unlike Node.js where any npm package can read your hard drive or send data over the internet, Deno is **secure by default in a sandbox**. Scripts cannot access the filesystem, environment variables, or network unless explicitly granted command-line flags like `--allow-net` or `--allow-read`.

### Q5: What does Node.js LTS mean and why should production apps use LTS versions?
**Answer:** LTS stands for **Long-Term Support**. Even-numbered Node.js releases (e.g., Node 18, 20, 22) enter LTS status, guaranteeing **30 months of stability, critical security updates, and bug fixes without breaking API changes**. Production apps use LTS to ensure zero unexpected downtime or breaking changes.

### Q6: What is the difference between Node.js "Current" releases and "LTS" releases?
**Answer:** "Current" releases (odd version numbers like v19, v21) contain cutting-edge experimental features and are supported for only 6 months. They never become LTS. "LTS" releases (even version numbers like v18, v20, v22) are thoroughly tested, stable, production-ready, and supported for 30 months.

### Q7: Explain Semantic Versioning (SemVer) format `MAJOR.MINOR.PATCH`.
**Answer:** 
- **MAJOR:** Incremented when breaking API changes are introduced.
- **MINOR:** Incremented when new features are added in a backward-compatible manner.
- **PATCH:** Incremented when backward-compatible bug fixes or security patches are released.

### Q8: What is the difference between `^` (caret) and `~` (tilde) in `package.json`?
**Answer:** 
- `^18.2.0` (Caret) allows updates to any higher **Minor or Patch** version without changing the Major version (`< 19.0.0`).
- `~18.2.0` (Tilde) allows updates to higher **Patch** versions only within the specified Minor version (`< 18.3.0`).

### Q9: What is "Phantom Dependency" in `npm` / `Yarn` and how does `pnpm` solve it?
**Answer:** A phantom dependency occurs when a project imports a package that is NOT listed in its `package.json`, because `npm` hoisted it to the root `node_modules` as a sub-dependency of another package. If the other package is removed, the build breaks. `pnpm` solves this by creating symlinked directory structures that only expose packages explicitly declared in `package.json`.

### Q10: What is the Virtual DOM and how does React update the UI?
**Answer:** The Virtual DOM is a lightweight in-memory JavaScript representation of the Real DOM. When a component's state changes, React creates a new Virtual DOM tree, performs a diffing algorithm against the previous Virtual DOM tree, identifies the exact differences (reconciliation), and updates only those modified elements in the Real DOM in a single batched operation.

### Q11: What is the difference between Real DOM and Virtual DOM?
**Answer:** Real DOM updates are slow because structural changes trigger browser reflows and repaints. Virtual DOM updates are fast because changes take place in JavaScript memory without directly touching browser rendering pipelines until reconciliation completes.

### Q12: Why can't browsers read JSX directly?
**Answer:** JSX is a syntactic extension to JavaScript, not valid ECMAScript standard syntax. Transpilers like Babel or SWC must compile JSX tags into standard `React.createElement()` function calls before execution in the browser.

### Q13: What is the difference between State and Props in React?
**Answer:** 
- **Props (Properties):** Immutable data passed down from parent to child components (unidirectional data flow).
- **State:** Mutable local data managed inside a component that triggers a component re-render when modified.

### Q14: What is a Single Page Application (SPA)?
**Answer:** An SPA is a web application that loads a single HTML page (`index.html`). Navigation between pages occurs dynamically on the client side using JavaScript (`react-router-dom`) without re-downloading HTML pages from the server.

### Q15: Why do we use `className` instead of `class` in JSX?
**Answer:** JSX is compiled into JavaScript. In JavaScript, `class` is a reserved keyword for ES6 classes. Therefore, React uses `className` to specify DOM element CSS classes.

### Q16: What are React Fragments (`<>...</>`) and why are they used?
**Answer:** React Fragments allow you to group multiple child elements without adding an extra node to the DOM tree, preventing unnecessary DOM depth and layout pollution.

### Q17: What is `<BrowserRouter>` in `react-router-dom`?
**Answer:** `<BrowserRouter>` is a router implementation that uses the HTML5 history API (`pushState`, `replaceState`, `popstate`) to keep your UI in sync with the URL in browser URL bars.

### Q18: Why should we use `<Link>` or `<NavLink>` instead of native `<a href="...">` tags in React Router?
**Answer:** Standard `<a href="...">` tags force the browser to perform a full page refresh, discarding React state and re-fetching assets. `<Link>` intercepts the click event, updates the URL via HTML5 History API, and dynamically swaps components without refreshing the page.

### Q19: What is the difference between `<Link>` and `<NavLink>`?
**Answer:** `<NavLink>` is a special wrapper around `<Link>` that knows whether or not its target URL path is active, making it easy to apply active CSS styling to active navigation tabs.

### Q20: What is the purpose of `package.json` in a Vite React project?
**Answer:** `package.json` contains project metadata, installed dependencies (`react`, `react-dom`, `react-router-dom`), and NPM execution scripts (`npm run dev`, `npm run build`, `npm run preview`).

### Q21: What does `npm run dev` do in a Vite project?
**Answer:** It starts the Vite local development server with Hot Module Replacement (HMR) on `http://localhost:5173`.

### Q22: What is Hot Module Replacement (HMR)?
**Answer:** HMR updates modules in a running application without requiring a full page refresh, preserving application state while developer edits code.

### Q23: What is declarative programming in React?
**Answer:** Declarative programming means describing *what* UI state should look like based on state, rather than imperatively writing step-by-step DOM manipulation instructions (`document.getElementById`).

### Q24: How does React handle events differently from standard HTML?
**Answer:** React events use synthetic events (`SyntheticEvent`), which are cross-browser wrappers around native browser events ensuring consistent behavior across all browsers, named using camelCase (e.g., `onClick`).

### Q25: What is the significance of the `key` prop in lists?
**Answer:** Keys help React identify which items in a list have changed, been added, or removed. They are crucial for the reconciliation algorithm to efficiently re-render lists without re-creating all list DOM nodes.

### Q26: What is component composition in React?
**Answer:** Component composition is the practice of combining smaller, focused components together to build complex UIs (e.g., rendering `<Navbar />` and `<AllRoutes />` inside `<App />`).

### Q27: What is React StrictMode?
**Answer:** `<StrictMode>` is a developer tool that highlights potential problems in an application (such as unsafe lifecycles or unexpected side effects) by intentionally double-invoking certain functions in development mode.

### Q28: What is a controlled component in React?
**Answer:** A controlled component is a form input element whose value is bound to and controlled by React component state (`value` and `onChange`).

### Q29: What is an uncontrolled component?
**Answer:** An uncontrolled component maintains its own internal DOM state accessed via a Ref (`useRef`) rather than React component state.

### Q30: What is `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml` and why is it committed to Git?
**Answer:** A lockfile stores the exact dependency tree, version numbers, and cryptographic hashes of every installed nested dependency. Committing lockfiles to Git ensures that every developer on a team and every production CI/CD build installs identical dependency versions, eliminating "works on my machine" bugs.

---
*Created as part of the FullStack IBM Internship Coursework - Day 25.*
