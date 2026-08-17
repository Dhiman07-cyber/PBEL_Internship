/*******************************************************************************************************
 * *************************************** HOME PAGE VIEW (DAY 29 UPDATE) *******************************
 *
 * New Topics Covered in Day 29:
 * - Decoupling layout rendering from presentation structures via mapping lists to modular components
 * - Integration of reusable user cards (`MapData`) styled in responsive layout templates
 * - Dynamic parameter mappings on collections returned from remote sources
 *
 * Cross-File & Architecture References:
 * - Mounted dynamically via: `routes/AllRoutes.jsx`
 * - Imported Components: `ButtonWithProp`, `ProductsTable`, `PaginationComp`, `MapData`
 *******************************************************************************************************/

import { useEffect } from "react";
import { useState } from "react";
import { Marquee, Button, HStack } from "@chakra-ui/react";
import ButtonWithProp from "@/components/ButtonWithProp";
import PaginationComp from "@/components/PaginationComp";
import ProductsTable from "@/components/ProductsTable";
import MapData from "@/components/MapData";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

import {
    IoLogoFigma,
    IoLogoGitlab,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoVimeo,
} from "react-icons/io5";

// Set up infinite brand slider elements
const marqueeItems = [
    { icon: IoLogoFigma, label: "Figma", color: "#F24E1E" },
    { icon: IoLogoTwitter, label: "Twitter", color: "#1da1f2" },
    { icon: IoLogoLinkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: IoLogoGitlab, label: "GitLab", color: "#fc6d26" },
    { icon: IoLogoVimeo, label: "Vimeo", color: "#1ab7ea" },
    { icon: IoLogoJavascript, label: "JavaScript", color: "#f7df1e" },
];

const Home = () => {
    // 1. STATE INITIALIZATION
    // count state initialized to 3 for checking increment/decrement
    const [count, setCount] = useState(3); 
    // data state holds product arrays retrieved from Fake Store API
    const [data, setData] = useState([]);
    // users state holds user accounts list retrieved from Fake Store API
    const [users, setUsers] = useState([]);

    // 2. DATA ACQUISITION TRIGGERS (ASYNCHRONOUS API QUERIES)
    // Fetch products list
    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }
    // Fetch users list
    const fetchUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    // 3. REACT HOOKS: MOUNT TRIGGER (`useEffect`)
    /*
    Empty dependency array `[]` ensures API operations trigger exactly once 
    upon component initialization (equivalent to componentDidMount in class instances).
    */
    useEffect(() => {
        fetchData();
        fetchUsers();
    }, []);

    // Print received dataset to check integration status
    console.log(data);
    console.log(users);

    // 4. EVENT HANDLERS
    // Increment count by 1
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Decrement count by 1
    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
            <p>Count: {count}</p>
            {/* Custom generic button forwarding state event handler */}
            <ButtonWithProp label="Increment" onClick={handleIncrement} />
            <ButtonWithProp label="Decrement" onClick={handleDecrement} />

            {/* Custom Chakra horizontal layout with icon buttons */}
            <HStack mt="4">
                <Button colorPalette="gray" variant="solid" spinnerPlacement="end">
                    <RiMailLine /> Email
                </Button>
                <Button colorPalette="teal" variant="outline">
                    Call us <RiArrowRightLine />
                </Button>
            </HStack>

            {/* 5. INFINITE MARQUEE BRAND TICKS */}
            <Marquee.Root autoFill spacing="2rem" style={{ marginTop: '2rem' }}>
                <Marquee.Viewport>
                    <Marquee.Content>
                        {marqueeItems.map((item, i) => (
                            <Marquee.Item key={i} px="2rem">
                                {item.icon && (
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

            {/* 6. PRODUCTS PRESENTATION TABLE COMPONENT */}
            <ProductsTable products={data} />

            {/* 7. USERS LIST RENDERING CONTAINER (UPDATED IN DAY 29 WITH MODULAR CARD MAP) */}
            <div>
                <h3 style={{ fontWeight: 'bold', margin: '2rem 0 1rem', textAlign: 'left' }}>Fetched Users: </h3>
                {/* 
                We render the cards inside the CSS Grid wrapper 'users-grid'.
                Each user object is delegated to the reusable '<MapData>' card.
                */}
                <div className="users-grid">
                    {users.map((user) => (
                        <MapData key={user.id} item={user} />
                    ))}
                </div>
            </div>

            {/* 8. PAGINATION SHELL */}
            <PaginationComp />

        </div>
    )
}

export default Home

// State is plain javascript object that holds data for a component. It can be updated and re-rendered when the state changes. In React, state is managed using the useState hook in functional components or this.state in class components.