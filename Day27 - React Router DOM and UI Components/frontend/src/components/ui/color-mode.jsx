/*******************************************************************************************************
 *************************************** COLOR MODE UTILITIES (`color-mode.jsx`) ***********************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Integration of `next-themes` with Chakra UI v3 for SSR-safe Light / Dark Mode switching
 * - React Custom Hooks (`useColorMode`, `useColorModeValue`) for reading/toggling active theme
 * - Dynamic Theme Icon Rendering (`<LuMoon />` for dark mode, `<LuSun />` for light mode)
 * - `ClientOnly` Hydration Safety Wrapper with Skeleton Loading Fallback to prevent SSR/hydration mismatch
 * - Scoped Theme Markers (`LightMode`, `DarkMode`) for overriding theme behavior in subtrees
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: Did not have automated dark/light mode switching or next-themes abstraction.
 * - Day 27: Integrated `color-mode.jsx` providing site-wide theme switching capabilities consumed by `Header.jsx`
 *   via `<ColorModeButton />`!
 *
 * Cross-File & Execution Flow:
 * 1. `ColorModeProvider` mounted inside `Provider.jsx`.
 * 2. `Header.jsx` renders `<ColorModeButton />`.
 * 3. User clicks button -> calls `toggleColorMode()` -> `setTheme('dark' | 'light')` updates document root class.
 *******************************************************************************************************/

'use client'

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import Chakra UI primitives for rendering icon buttons, skeletons, and client-only boundaries
import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'

// 2. Import ThemeProvider and useTheme hook from next-themes
import { ThemeProvider, useTheme } from 'next-themes'

// 3. React Core
import * as React from 'react'

// 4. Import Sun and Moon icons from react-icons/lu
import { LuMoon, LuSun } from 'react-icons/lu'

// =========================================================================================
// COLOR MODE PROVIDER
// =========================================================================================
/*
   WHAT IS COLOR MODE PROVIDER?
   Wraps next-themes `ThemeProvider`. It toggles `.dark` and `.light` class attributes on `<html>` / `<body>`,
   allowing CSS custom properties and Chakra UI tokens to adapt dynamically.
*/
export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange {...props} />
  )
}

// =========================================================================================
// CUSTOM HOOKS
// =========================================================================================
/*
   `useColorMode()` CUSTOM HOOK:
   Returns `{ colorMode, setColorMode, toggleColorMode }`.
   Determines active theme state (`dark` or `light`) and provides a helper function to toggle between them.
*/
export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return {
    colorMode: colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

/*
   `useColorModeValue(lightValue, darkValue)` UTILITY HOOK:
   Returns `lightValue` when current theme is light, and `darkValue` when current theme is dark.
*/
export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

// =========================================================================================
// THEME ICON & TOGGLE BUTTON COMPONENTS
// =========================================================================================
/*
   Renders Moon icon in dark theme, and Sun icon in light theme.
*/
export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

/*
   `ColorModeButton`:
   Icon button component rendered in `Header.jsx`.
   Wrapped in `<ClientOnly>` with `<Skeleton>` fallback to prevent React hydration mismatch during client boot.
*/
export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize='9' />}>
        <IconButton
          onClick={toggleColorMode}
          variant='ghost'
          aria-label='Toggle color mode'
          size='sm'
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  },
)

// =========================================================================================
// SCOPED THEME OVERRIDE WRAPPERS
// =========================================================================================
// Forces Light mode theme scoping on children elements
export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <Span
      color='fg'
      display='contents'
      className='chakra-theme light'
      colorPalette='gray'
      colorScheme='light'
      ref={ref}
      {...props}
    />
  )
})

// Forces Dark mode theme scoping on children elements
export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <Span
      color='fg'
      display='contents'
      className='chakra-theme dark'
      colorPalette='gray'
      colorScheme='dark'
      ref={ref}
      {...props}
    />
  )
})

