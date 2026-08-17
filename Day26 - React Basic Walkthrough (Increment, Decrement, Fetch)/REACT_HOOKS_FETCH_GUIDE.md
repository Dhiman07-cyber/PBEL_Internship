# Day 26: React Hooks, State Batching & REST API Data Fetching Guide

Welcome to **Day 26** of the FullStack Coursework! This guide provides a detailed walkthrough of **React Hooks** (`useState`, `useEffect`), **State Batching**, and **Asynchronous REST API Integration**, along with **20+ Technical Interview Practice Questions & Answers**.

---

## 📚 Table of Contents
1. [Understanding React State & `useState`](#1-understanding-react-state--usestate)
2. [State Batching Mechanics in React 18](#2-state-batching-mechanics-in-react-18)
3. [Understanding Side Effects & `useEffect`](#3-understanding-side-effects--useeffect)
4. [Asynchronous REST API Fetching Patterns](#4-asynchronous-rest-api-fetching-patterns)
5. [List Rendering & Keys](#5-list-rendering--keys)
6. [20+ Technical Interview Practice Questions & Answers](#6-20-technical-interview-practice-questions--answers)

---

## 1. Understanding React State & `useState`

### What is State?
In React, **State** is a plain JavaScript object or primitive value managed inside a component. Unlike regular local variables (which reset on every function execution), state variables persist across component re-renders.

### The `useState` Hook Syntax:
```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
```
- `count`: The current state snapshot.
- `setCount`: The setter function used to schedule state updates.
- `0`: The initial state value passed during the component's initial mount.

### Why Can't We Mutate State Directly?
```js
// ❌ WRONG: Mutating state directly does NOT trigger a re-render!
count = count + 1;

// ✅ CORRECT: Invoking setter function notifies React to re-render
setCount(count + 1);
```
React relies on immutability to perform shallow reference checks (`Object.is`) during its reconciliation diffing algorithm.

---

## 2. State Batching Mechanics in React 18

### What is State Batching?
**Batching** is React's optimization mechanism where multiple state updates performed within the same execution context are grouped into a **single re-render** to prevent unnecessary DOM updates.

### Direct Updates vs. Functional Updates

#### Case A: Direct Multiple Updates (Stale Closure Snapshot)
```jsx
const handleIncrement = () => {
  setCount(count + 1); // count is snapshot value (e.g. 3) -> schedules 4
  setCount(count + 1); // count is STILL snapshot 3 -> schedules 4
  setCount(count + 1); // count is STILL snapshot 3 -> schedules 4
};
// Result after re-render: count becomes 4 (+1 total increment)
```

#### Case B: Functional Updates (Updater Queue)
```jsx
const handleIncrement = () => {
  setCount(prev => prev + 1); // receives pending state queue value (3 -> 4)
  setCount(prev => prev + 1); // receives pending state queue value (4 -> 5)
  setCount(prev => prev + 1); // receives pending state queue value (5 -> 6)
};
// Result after re-render: count becomes 6 (+3 total increment)
```

### Automatic Batching in React 18:
In React 18, batching is performed automatically everywhere: inside event handlers, `setTimeout` timers, `fetch` promise callbacks, and native event listeners.

---

## 3. Understanding Side Effects & `useEffect`

### What is a Side Effect?
A **Side Effect** is any operation that affects something outside the scope of the rendered component (e.g., API requests, subscriptions, DOM mutations, timers, logging).

### The `useEffect` Hook Syntax:
```jsx
useEffect(() => {
  // 1. Setup Side Effect Code
  
  return () => {
    // 2. Cleanup Function (Runs before component unmounts or before re-executing effect)
  };
}, [/* Dependency Array */]);
```

### Dependency Array Behaviors:

| Dependency Array | Execution Timing | Use Case |
| :--- | :--- | :--- |
| **No Array (`useEffect(fn)`)** | Runs after **every single render**. | Logging, debugging. |
| **Empty Array (`useEffect(fn, [])`)** | Runs **ONLY ONCE** after initial mount (`componentDidMount`). | API data fetching, event listeners. |
| **Populated Array (`useEffect(fn, [a, b])`)** | Runs on mount AND whenever `a` or `b` state/prop changes. | Recalculating values based on state change. |

---

## 4. Asynchronous REST API Fetching Patterns

### Standard Fetch Pattern in `useEffect`:
```jsx
import { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error("HTTP error!");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
```

---

## 5. List Rendering & Keys

When rendering lists of data using JavaScript `.map()`, React requires a unique `key` prop on the top-level element of each returned component item.

```jsx
{users.map((user) => (
  <div key={user.id}>
    <h3>{user.name}</h3>
  </div>
))}
```

### Why are Keys Necessary?
Keys give items a persistent identity across re-renders. When a list changes (items reordered, added, or deleted), React uses keys to diff the list efficiently without re-creating all DOM nodes from scratch.

---

## 6. 20+ Technical Interview Practice Questions & Answers

### Q1: What is the `useState` hook and how does it work?
**Answer:** `useState` is a built-in React Hook that allows functional components to maintain internal state. It returns an array with two elements: the current state value and a state updater function. Calling the state updater function schedules a component re-render with the new state value.

### Q2: What is the Rules of Hooks in React?
**Answer:**
1. **Call Hooks only at the top level:** Don't call Hooks inside loops, conditions, or nested functions.
2. **Call Hooks only from React functional components:** Or from custom Hooks, never from plain JavaScript functions.

### Q3: What happens if you call `setState` with the same value as the current state?
**Answer:** React performs a shallow reference check (`Object.is`). If the new state value is identical to the current state, React bails out of rendering without re-rendering the component or firing child effects.

### Q4: Why should we use functional state updates (`setCount(prev => prev + 1)`)?
**Answer:** Functional updates receive the latest pending state value from React's state update queue. They are necessary when the new state depends on the previous state, preventing bugs caused by stale state closures in event handlers or async callbacks.

### Q5: What is Automatic Batching in React 18?
**Answer:** Automatic batching groups multiple state updates triggered inside event handlers, promises, setTimeouts, or native events into a single re-render, improving performance by minimizing DOM reflows.

### Q6: What is `useEffect` and when does it run?
**Answer:** `useEffect` is a React Hook for handling side effects. By default, it runs after the DOM rendering is committed to the screen. Its execution frequency depends on the dependency array provided.

### Q7: What is the purpose of the cleanup function in `useEffect`?
**Answer:** The cleanup function (returned by the effect callback) executes before the component unmounts or before re-running the effect on subsequent renders. It is used to cancel network requests, remove event listeners, clear timers, or unsubscribe from sockets.

### Q8: What happens if you omit the dependency array in `useEffect`?
**Answer:** Omitting the dependency array causes `useEffect` to execute after **every single render** of the component, which can lead to performance degradation or infinite loops if state is updated inside the effect.

### Q9: Why shouldn't you pass an `async` function directly to `useEffect`?
**Answer:** `useEffect` expects its callback to return either `undefined` or a cleanup function. An `async` function implicitly returns a `Promise`, which violates this contract. Instead, define an async function inside the effect and call it.

```jsx
// ❌ Incorrect
useEffect(async () => { ... }, []);

// ✅ Correct
useEffect(() => {
  const getData = async () => { ... };
  getData();
}, []);
```

### Q10: How do you handle loading and error states when fetching API data in React?
**Answer:** Create dedicated state variables (`loading`, `error`, `data`). Set `loading(true)` before starting the fetch request, catch errors in a `try...catch` block to set `error(err.message)`, and update `data(result)` upon success while setting `loading(false)` in a `finally` block.

### Q11: What is the difference between `useEffect` and `useLayoutEffect`?
**Answer:** `useEffect` runs asynchronously **after** the browser paints the screen. `useLayoutEffect` runs synchronously **after DOM mutations but before** the browser paints, making it useful for measuring DOM layout dimensions to prevent visual flickering.

### Q12: Why do we need `key` props when rendering lists using `.map()`?
**Answer:** Keys help React identify which items have changed, been added, or removed. They allow the reconciliation algorithm to reorder or patch existing DOM nodes instead of unmounting and re-creating the entire list.

### Q13: Why is using list array index as a `key` considered anti-pattern?
**Answer:** If items are reordered, inserted, or deleted, array indexes change for all subsequent elements. This breaks React's reconciliation identity mapping, causing state bugs in child components and poor re-render performance.

### Q14: How does React handle asynchronous API calls inside `useEffect` when a component unmounts?
**Answer:** If an API fetch resolves after the component unmounts, attempting to update state on an unmounted component can cause memory leaks. This can be resolved using `AbortController` in the cleanup function to cancel the fetch.

### Q15: What is stale state closure in React?
**Answer:** Stale closure occurs when a function (such as an event listener or `useEffect` callback) captures an old state variable snapshot from a previous render scope and continues to reference that outdated value.

### Q16: How do you fetch data from multiple APIs concurrently in React?
**Answer:** Use `Promise.all([fetch1(), fetch2()])` inside an async function within `useEffect` to trigger concurrent network requests.

### Q17: What is the difference between controlled inputs and uncontrolled inputs?
**Answer:** Controlled inputs have their value driven by React component state (`value` and `onChange`). Uncontrolled inputs maintain their own DOM value, which is accessed via React Refs (`useRef`).

### Q18: What is `useCallback` and how does it relate to `useEffect`?
**Answer:** `useCallback` memoizes a callback function instance between renders. It is often used to prevent functions passed as dependencies to `useEffect` from changing on every render.

### Q19: What is `useMemo`?
**Answer:** `useMemo` memoizes the calculated result of an expensive computation, re-running the calculation only when one of its dependencies changes.

### Q20: What is the difference between `props` and `state`?
**Answer:** `props` are read-only input parameters passed down from a parent component. `state` is local mutable data managed internally by the component.

---
*Created as part of the FullStack IBM Internship Coursework - Day 26.*
