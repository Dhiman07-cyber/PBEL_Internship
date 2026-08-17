/*******************************************************************************************************
 *************************************** HOME PAGE VIEW COMPONENT (`Home.jsx`) **************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Page View Refactoring: Moving page state and fetch side-effects from `App.jsx` into modular Page components
 * - Chakra UI v3 Component Integration: Customized `<Button>` and animated infinite `<Marquee>`
 * - Icon Mapping with `react-icons/io5`: Rendering dynamic icon components from structured object arrays
 * - Multi-Endpoint Asynchronous Fetching (`fakestoreapi.com/products` & `fakestoreapi.com/users`) inside `useEffect`
 * - Deep Dive into React State Batching & Stale Closures: Why calling `setCount(count + 1)` 5 times only increments by 1!
 * - Array Mapping with Unique Key Props (`user.map(user => <div key={user.id}>)`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Simple static home placeholder page.
 * - Day 26: State (`count`) and single fetch API (`/products`) were located monolithically inside `App.jsx`.
 * - Day 27: Moved state & side effects into `Home.jsx`. Integrated Chakra UI Marquee icon ticker, added secondary API
 *   endpoint fetching (`/users`), styled UI with Chakra Button primitives, and documented React state batching mechanics.
 *
 * Cross-File & Execution Flow:
 * 1. `AllRoutes.jsx` mounts `<Home />` when URL path is `/` or `/home`.
 * 2. On initial render, `useEffect` triggers `fetchData()` and `fetchUsers()` asynchronously.
 * 3. State update (`setUsers`) triggers re-render, displaying fetched user profile cards.
 * 4. User clicks Increment button -> `handleIncrement()` demonstrates React batching behavior.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. React Core Hooks: `useEffect` for lifecycle side-effects, `useState` for component state management
import { useEffect } from "react";
import { useState } from "react";

// 2. Import Chakra UI custom Button component using path alias `@/`
import { Button } from "@/components/ui/button";

// 3. Import Chakra UI v3 Marquee primitive for infinite scrolling brand tickers
import { Marquee } from "@chakra-ui/react";

// 4. Import brand logos from `react-icons/io5` library
import {
    IoLogoFigma,
    IoLogoGitlab,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoVimeo,
} from "react-icons/io5";

// =========================================================================================
// DATA CONFIGURATION
// =========================================================================================
/*
   STATIC MARQUEE ITEM CONFIGURATION:
   An array of objects binding each icon component, label name, and custom hex brand color.
   This data structure allows clean mapping over array elements in JSX without duplicating UI code!
*/
const marqueeItems = [
    { icon: IoLogoFigma, label: "Figma", color: "#F24E1E" },
    { icon: IoLogoTwitter, label: "Twitter", color: "#1da1f2" },
    { icon: IoLogoLinkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: IoLogoGitlab, label: "GitLab", color: "#fc6d26" },
    { icon: IoLogoVimeo, label: "Vimeo", color: "#1ab7ea" },
    { icon: IoLogoJavascript, label: "JavaScript", color: "#f7df1e" },
];

// =========================================================================================
// HOME COMPONENT
// =========================================================================================
const Home = () => {
    // -------------------------------------------------------------------------------------
    // STATE DECLARATIONS
    // -------------------------------------------------------------------------------------
    // 1. `count`: Counter integer state initialized to 3
    const [count, setCount] = useState(3);

    // 2. `data`: Array state for fetched products from FakeStore API (initialized empty `[]`)
    const [data, setData] = useState([]);

    // 3. `users`: Array state for fetched user accounts from FakeStore API (initialized empty `[]`)
    const [users, setUsers] = useState([]);

    // -------------------------------------------------------------------------------------
    // API FETCH FUNCTIONS
    // -------------------------------------------------------------------------------------
    // Fetches product catalog from external REST API endpoint
    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json()) // Parse response stream into JSON object
            .then(data => setData(data)) // Store product array in state -> triggers re-render
            .catch(err => console.log(err)) // Catch network errors
    }

    // Fetches user account profiles from external REST API endpoint
    const fetchUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json()) // Parse response stream into JSON object
            .then(data => setUsers(data)) // Store user array in state -> triggers re-render
            .catch(err => console.log(err)) // Catch network errors
    }

    // -------------------------------------------------------------------------------------
    // SIDE EFFECTS (useEffect)
    // -------------------------------------------------------------------------------------
    /*
       WHAT IS useEffect?
       `useEffect` handles side-effects (data fetching, subscriptions, DOM mutations).
       The second argument `[]` (empty dependency array) guarantees that the effect function
       runs EXACTLY ONCE when the component mounts onto the DOM tree.
    */
    useEffect(() => {
        fetchData();
        fetchUsers();
    }, []); // Empty dependency array: runs only on initial component mount

    // Diagnostic console logging to inspect state payloads during lifecycle updates
    console.log(data);
    console.log(users);

    // -------------------------------------------------------------------------------------
    // EVENT HANDLERS & REACT STATE BATCHING LESSON
    // -------------------------------------------------------------------------------------
    /*
       IMPORTANT LESSON: REACT STATE BATCHING & STALE CLOSURES
       Notice that `setCount(count + 1)` is written 5 times consecutively below!
       QUESTION: Does clicking Increment increase count by 5 or by 1?
       ANSWER: It increases count by ONLY 1!
       WHY?
       1. In React, state updates inside event handlers are batched for performance.
       2. During execution of `handleIncrement`, `count` is a closed-over constant value (e.g. 3).
       3. Each of the 5 calls executes `setCount(3 + 1)`, scheduling an update to 4!
       4. To increment by 5 correctly, functional updates must be used: `setCount(prev => prev + 1)`.
    */
    const handleIncrement = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    // Decrement counter by 1
    const handleDecrement = () => {
        setCount(count - 1);
    };

    // -------------------------------------------------------------------------------------
    // JSX RENDER TREE
    // -------------------------------------------------------------------------------------
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
            
            {/* Display current counter state value */}
            <p>Count: {count}</p>

            {/* Chakra UI Button primitives triggering state update handlers */}
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>

            {/* 
               CHAKRA UI MARQUEE COMPONENT DEMO:
               Infinite horizontal scrolling marquee ticker displaying technology partner icons.
               - `autoFill`: Automatically duplicates child items to fill entire container width seamlessly.
               - `spacing="2rem"`: Adds horizontal gap between individual marquee items.
            */}
            <Marquee.Root autoFill spacing="2rem" style={{ marginTop: '2rem' }}>
                <Marquee.Viewport>
                    <Marquee.Content>
                        {marqueeItems.map((item, i) => (
                            <Marquee.Item key={i} px="2rem">
                                {item.icon && (
                                    /* Dynamic component instantiation rendering icon with label and brand color */
                                    <item.icon
                                        size="3rem"
                                        aria-label={item.label}
                                        color={item.color}
                                    />
                                )}
                            </Marquee.Item>
                        ))}
                    </Marquee.Content>
                </Marquee.Viewport>
            </Marquee.Root>

            {/* 
               FETCHED USERS DISPLAY:
               Iterates through `users` state array using `.map()` and renders a card for each user profile.
               Requires unique `key={user.id}` for React's virtual DOM reconciliation algorithm.
            */}
            <div>
                <h3 style={{ fontWeight: 'bold' }}>Fetched Users: </h3>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h4>{user.name.firstname} {user.name.lastname}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

// Export Home component for routing in AllRoutes.jsx
export default Home

/*
   CONCEPT DEFINITION: STATE IN REACT
   State is a plain JavaScript object that holds dynamic data for a component.
   When state updates (via `setState` / `setCount`), React triggers a re-render of the component
   and updates the Virtual DOM to reflect changes efficiently in the browser interface.
*/