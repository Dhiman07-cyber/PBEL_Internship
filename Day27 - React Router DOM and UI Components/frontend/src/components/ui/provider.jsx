/*******************************************************************************************************
 *************************************** CHAKRA UI PROVIDER (`provider.jsx`) ***************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Chakra UI v3 System Configuration (`defaultSystem` preset containing design tokens, reset CSS, breakpoints)
 * - Integrating `ChakraProvider` with `ColorModeProvider` (next-themes wrapper)
 * - Higher-Order Theme Context Provider Composition
 * - Path Alias Target (`@/components/ui/provider`) consumed in `main.jsx`
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: No design framework providers used; styling was plain CSS variables.
 * - Day 27: Added `provider.jsx` snippet wrapping the entire React DOM tree in Chakra UI v3's `ChakraProvider`
 *   and `ColorModeProvider`, allowing every nested component to access design tokens, responsive breakpoints, and dark mode!
 *
 * Cross-File & Execution Flow:
 * 1. Imported as `Provider` in `main.jsx` via `@/components/ui/provider`.
 * 2. Receives children (`<BrowserRouter><App /></BrowserRouter>`).
 * 3. Applies `defaultSystem` theme rules and mounts `ColorModeProvider` for light/dark theme toggling.
 *******************************************************************************************************/

'use client'

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import Chakra UI Provider core and system configuration preset
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

// 2. Import ColorModeProvider wrapper from color-mode.jsx (powered by next-themes)
import { ColorModeProvider } from './color-mode'

// =========================================================================================
// COMPONENT PROVIDER WRAPPER
// =========================================================================================
/*
   WHAT IS THE ROLE OF CHAKRA PROVIDER?
   `ChakraProvider` injects CSS reset rules, global design tokens (colors, spacing, typography, z-indices),
   and component styles into the DOM runtime via Emotion CSS-in-JS engine.
*/
export function Provider(props) {
  return (
    // 1. Wrap application in Chakra UI v3 system theme configuration
    <ChakraProvider value={defaultSystem}>
      {/* 2. Nest ColorModeProvider to handle dark/light theme switching */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

