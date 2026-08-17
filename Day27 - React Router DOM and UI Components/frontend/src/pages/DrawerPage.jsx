/*******************************************************************************************************
 *************************************** CHAKRA UI DRAWER DEMO PAGE (`DrawerPage.jsx`) ******************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Chakra UI v3 Compound Component Pattern (`Drawer.Root`, `Drawer.Trigger`, `Drawer.Backdrop`, `Drawer.Positioner`, `Drawer.Content`)
 * - React Portals (`<Portal container={portalRef}>`): Mounting UI overlays into designated DOM nodes
 * - React DOM Refs (`useRef`) and Component Ref Forwarding (`forwardRef`)
 * - Composition with `asChild` prop: Merging accessibility & click triggers into custom `<Button>` elements
 * - Layer Styles & Layout Primitives (`Stack`, `Text`, `CloseButton`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: No advanced UI overlay or modal components were used.
 * - Day 27: Introduced complex Chakra UI v3 Drawer overlay patterns, utilizing `useRef` and `forwardRef` to anchor
 *   a sliding modal drawer inside a custom scoped container via React Portals!
 *
 * Cross-File & Execution Flow:
 * 1. Mounted dynamically by `AllRoutes.jsx` when user navigates to `/drawer`.
 * 2. `portalRef` captures reference to `DrawerContainer` DOM node.
 * 3. User clicks "Open Drawer" -> `Drawer.Trigger` activates `Drawer.Root` open state.
 * 4. `<Portal container={portalRef}>` renders `Drawer.Backdrop` and `Drawer.Positioner` directly inside the container.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import Chakra UI v3 primitives for layout, typography, and interactive drawer overlays
import {
    Button,
    CloseButton,
    Drawer,
    Portal,
    Stack,
    Text,
} from "@chakra-ui/react"

// 2. Import React reference utilities (`forwardRef` for ref passing, `useRef` for DOM targeting)
import { forwardRef, useRef } from "react"

// =========================================================================================
// CUSTOM CONTAINER COMPONENT WITH REF FORWARDING (`DrawerContainer`)
// =========================================================================================
/*
   WHAT IS forwardRef IN REACT?
   By default, React ref props cannot be attached to custom functional components.
   `forwardRef` wraps a functional component, allowing parent components (`DrawerPage`) to pass a DOM `ref`
   straight down to an internal underlying HTML node (`<Stack ref={ref}>`).
*/
const DrawerContainer = forwardRef(
    function DrawerContainer(props, ref) {
        return (
            <Stack
                pos="relative"
                overflow="hidden"
                align="flex-start"
                p="8"
                minH="400px"
                layerStyle="fill.subtle"
                outline="2px solid gray"
                ref={ref} // Attach the forwarded ref to this DOM node
                {...props} // Spread incoming props (children, styles)
            />
        )
    },
)

// =========================================================================================
// DRAWER PAGE COMPONENT (`DrawerPage`)
// =========================================================================================
const DrawerPage = () => {
    // -------------------------------------------------------------------------------------
    // REF INITIALIZATION
    // -------------------------------------------------------------------------------------
    /*
       `portalRef`: Holds a mutable reference to the `DrawerContainer` DOM node.
       This reference is passed to `<Portal container={portalRef}>` so Chakra UI knows where to render the drawer DOM subtree!
    */
    const portalRef = useRef(null)

    return (
        /* 
           1. `<Drawer.Root>`: State manager for the drawer overlay (open/close state).
              `closeOnInteractOutside={false}` prevents closing when clicking outside.
        */
        <Drawer.Root closeOnInteractOutside={false}>
            {/* 2. Custom container element receiving `portalRef` */}
            <DrawerContainer ref={portalRef}>
                <Text>Render drawer here</Text>

                {/* 
                   3. `<Drawer.Trigger asChild>`:
                      The `asChild` prop tells Chakra NOT to render an extra `<button>` tag.
                      Instead, it passes click handlers and ARIA attributes down to the child `<Button>`!
                */}
                <Drawer.Trigger asChild>
                    <Button variant="outline" size="sm" bg="bg">
                        Open Drawer
                    </Button>
                </Drawer.Trigger>
            </DrawerContainer>

            {/* 
               4. `<Portal container={portalRef}>`:
                  WHAT IS A REACT PORTAL?
                  Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
                  Here, the drawer backdrop & body are teleported directly into the container referenced by `portalRef`.
            */}
            <Portal container={portalRef}>
                {/* Dark translucent backdrop overlay behind drawer */}
                <Drawer.Backdrop pos="absolute" boxSize="full" />

                {/* Positioner wrapper handling placement & sliding animations */}
                <Drawer.Positioner pos="absolute" boxSize="full">
                    {/* Drawer Content Panel */}
                    <Drawer.Content>
                        {/* Drawer Header with Title and Close Trigger */}
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Header>

                        {/* Drawer Body Content */}
                        <Drawer.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Drawer.Body>

                        {/* Drawer Action Footer */}
                        <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

// Export DrawerPage for consumption by AllRoutes.jsx
export default DrawerPage