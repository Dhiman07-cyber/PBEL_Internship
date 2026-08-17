/*******************************************************************************************************
 *************************************** HOME PAGE & HOOKS WALKTHROUGH (`Home.jsx`) *********************
 *
 * Core Topics & Concepts Covered in Day 26:
 * 1. `useState` Hook:
 *    - Declare state variables inside functional components: `const [state, setState] = useState(initialValue)`
 *    - Triggers component re-render whenever state updater function is invoked.
 *    - State Batching Behavior: Calling `setCount(count + 1)` 5 times in a single event handler evaluates
 *      `count` using the snapshot value of the current render, resulting in a single +1 increment.
 *      To queue multiple updates in a single tick, pass updater functions: `setCount(prev => prev + 1)`.
 *
 * 2. `useEffect` Hook:
 *    - Performs side effects in functional components (Data fetching, DOM updates, Subscriptions).
 *    - Dependency Array `[]`: Running effect ONLY ON MOUNT (equivalent to `componentDidMount`).
 *
 * 3. Asynchronous REST API Data Fetching:
 *    - Fetching Products & Users from external APIs (`https://fakestoreapi.com/products` & `/users`)
 *    - Handling asynchronous promises (`fetch()`, `.then()`, `.catch()`, or `async/await`)
 *    - Updating component state and rendering list data dynamically using `.map()`.
 *
 * 4. List Rendering & Unique Keys:
 *    - Using `key={item.id}` to provide stable identity to DOM elements across re-renders.
 *******************************************************************************************************/

import { useEffect, useState } from "react";

const Home = () => {
    // =========================================================================================
    // 1. STATE INITIALIZATION USING `useState` HOOK
    // =========================================================================================
    // State is a plain JS value managed inside the component. Changes to state trigger re-renders!
    const [count, setCount] = useState(3);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [activeTab, setActiveTab] = useState("users"); // "users" or "products"
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // =========================================================================================
    // 2. REST API FETCH FUNCTIONS
    // =========================================================================================
    // Fetch Products from FakeStore API
    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error("Products Fetch Error:", err);
            setError(err.message);
        }
    };

    // Fetch Users from FakeStore API
    const fetchUsers = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/users');
            if (!res.ok) throw new Error("Failed to fetch users");
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error("Users Fetch Error:", err);
            setError(err.message);
        }
    };

    // =========================================================================================
    // 3. `useEffect` HOOK FOR SIDE-EFFECT ON MOUNT
    // =========================================================================================
    /*
      The empty dependency array `[]` ensures `useEffect` runs ONLY ONCE when the component mounts.
      This prevents infinite re-render loops caused by state updates inside effect callbacks.
    */
    useEffect(() => {
        setLoading(true);
        Promise.all([fetchProducts(), fetchUsers()])
            .finally(() => setLoading(false));
    }, []);

    // =========================================================================================
    // 4. EVENT HANDLERS & STATE BATCHING DEMO
    // =========================================================================================
    /*
      State Batching Concept:
      - Direct multiple calls `setCount(count + 1)` evaluate using the SAME stale `count` value in the current closure tick.
      - Result: `count` increases by only 1.
    */
    const handleIncrementDirect = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1); // Only +1 total!
    };

    // Functional State Update (Correct way to queue multiple updates):
    const handleIncrementFunctional = () => {
        setCount((prevCount) => prevCount + 5); // +5 total!
    };

    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const handleReset = () => {
        setCount(0);
    };

    // =========================================================================================
    // 5. JSX RENDER RETURN
    // =========================================================================================
    return (
        <div className="page-container">
            {/* Header Description Banner */}
            <div className="hero-section">
                <h1>⚡ Day 26: React Hooks & API Fetching Walkthrough</h1>
                <p>
                    Interactive demonstration of <code>useState</code> state management, state batching behavior, 
                    <code>useEffect</code> lifecycle hooks, and dynamic REST API data rendering.
                </p>
            </div>

            {/* Counter Section (useState Demo) */}
            <div className="section-card counter-card">
                <h2>🔢 State Counter & Batching Demo</h2>
                <p className="section-subtitle">
                    Observe how state updates trigger Virtual DOM re-renders.
                </p>

                <div className="counter-display">
                    <span className="counter-badge">Current Count: {count}</span>
                </div>

                <div className="button-group">
                    <button className="btn btn-success" onClick={handleDecrement}>
                        ➖ Decrement (-1)
                    </button>
                    <button className="btn btn-warning" onClick={handleReset}>
                        🔄 Reset (0)
                    </button>
                    <button className="btn btn-primary" onClick={handleIncrementDirect}>
                        ➕ Direct Increment (+1 Stale Demo)
                    </button>
                    <button className="btn btn-accent" onClick={handleIncrementFunctional}>
                        🚀 Functional Increment (+5 Queue)
                    </button>
                </div>

                <div className="info-box">
                    <p>💡 <strong>State Batching Explanation:</strong></p>
                    <ul>
                        <li><strong>Direct Call (Stale Snapshot):</strong> Calling <code>setCount(count + 1)</code> 5 times in one click uses the initial state snapshot, adding 1 only once.</li>
                        <li><strong>Functional Call (Updater Queue):</strong> Calling <code>setCount(prev =&gt; prev + 5)</code> receives the latest pending state from React's state update queue.</li>
                    </ul>
                </div>
            </div>

            {/* API Fetch Data Tabs */}
            <div className="section-card">
                <div className="tab-header">
                    <h2>🌐 External API Data Fetching</h2>
                    <div className="tab-buttons">
                        <button 
                            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveTab('users')}
                        >
                            👥 Users ({users.length})
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
                            onClick={() => setActiveTab('products')}
                        >
                            🛍️ Products ({products.length})
                        </button>
                    </div>
                </div>

                {/* Loading & Error States */}
                {loading && (
                    <div className="loading-spinner">
                        <p>⏳ Fetching data from FakeStore API...</p>
                    </div>
                )}

                {error && (
                    <div className="error-box">
                        <p>⚠️ Error: {error}</p>
                    </div>
                )}

                {/* Tab 1: Rendered Users List */}
                {!loading && !error && activeTab === 'users' && (
                    <div className="grid-container">
                        {users.map((user) => (
                            <div key={user.id} className="data-card user-card">
                                <div className="user-avatar">
                                    {user.name.firstname[0].toUpperCase()}
                                </div>
                                <div className="user-details">
                                    <h3>{user.name.firstname} {user.name.lastname}</h3>
                                    <p className="text-muted">📧 {user.email}</p>
                                    <p className="text-muted">📞 {user.phone}</p>
                                    <span className="badge">City: {user.address.city}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tab 2: Rendered Products Grid */}
                {!loading && !error && activeTab === 'products' && (
                    <div className="grid-container products-grid">
                        {products.map((item) => (
                            <div key={item.id} className="data-card product-card">
                                <div className="product-image-wrapper">
                                    <img src={item.image} alt={item.title} className="product-img" />
                                </div>
                                <div className="product-details">
                                    <span className="category-tag">{item.category}</span>
                                    <h4>{item.title}</h4>
                                    <p className="price-tag">${item.price}</p>
                                    <p className="product-desc">{item.description.slice(0, 80)}...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;

/*
  =========================================================================================
  KEY DEFINITIONS FOR REACT DEVELOPERS:
  =========================================================================================
  - State: A plain JavaScript object managed inside a component to store dynamic data.
    When state updates via its setter function, React re-renders the component.
  - Side Effect: Any operation that affects something outside the scope of the function being executed
    (e.g., API calls, subscriptions, manual DOM mutations, timers).
  - useEffect: React Hook used to manage side effects, syncing components with external systems.
*/