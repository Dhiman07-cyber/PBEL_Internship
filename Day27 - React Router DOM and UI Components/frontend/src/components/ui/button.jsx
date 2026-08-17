/*******************************************************************************************************
 *************************************** CUSTOM BUTTON COMPONENT (`button.jsx`) *************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Enhancing Chakra UI Base Components (`ChakraButton`) with custom loading spinners
 * - Declarative Loading States (`loading`, `loadingText`)
 * - Centered Spinner Overlay using `AbsoluteCenter` & `Span opacity={0}`
 * - Component Ref Forwarding (`React.forwardRef`) for accessible UI component libraries
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: Used standard HTML `<button>` elements without loading indicators or theme integration.
 * - Day 27: Integrated custom `<Button>` wrapper primitive supporting loading spinners, disabled flags,
 *   and design system props consumed by `Home.jsx`!
 *
 * Cross-File & Execution Flow:
 * 1. Imported as `Button` in `Home.jsx` via `@/components/ui/button`.
 * 2. Consumed by Increment/Decrement controls and Drawer trigger.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import Chakra UI primitives for base button, centering absolute containers, spans, and spinners
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from '@chakra-ui/react'

// 2. React Core
import * as React from 'react'

// =========================================================================================
// BUTTON COMPONENT WITH REF FORWARDING
// =========================================================================================
/*
   WHAT DOES THIS BUTTON COMPONENT ENHANCE?
   Standard buttons require boilerplate code to display a loading spinner while disabling click events.
   This wrapper abstracts loading state logic: when `loading={true}`, it hides label text and displays `<Spinner />`.
*/
export const Button = React.forwardRef(function Button(props, ref) {
  // Destructure custom loading props from incoming property bag
  const { loading, disabled, loadingText, children, ...rest } = props

  return (
    // 1. Disable button if either `loading` or `disabled` prop is true
    <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
      {/* 2. Case A: Loading is TRUE and NO custom loading text is provided */}
      {loading && !loadingText ? (
        <>
          {/* Centered Spinner overlay */}
          <AbsoluteCenter display='inline-flex'>
            <Spinner size='inherit' color='inherit' />
          </AbsoluteCenter>

          {/* Hide button label text while keeping component layout dimensions intact */}
          <Span opacity={0}>{children}</Span>
        </>
      ) : loading && loadingText ? (
        /* 3. Case B: Loading is TRUE and custom loading text IS provided */
        <>
          <Spinner size='inherit' color='inherit' />
          {loadingText}
        </>
      ) : (
        /* 4. Case C: Loading is FALSE: Render normal children content */
        children
      )}
    </ChakraButton>
  )
})

