/*******************************************************************************************************
 *************************************** TOOLTIP UTILITIES (`tooltip.jsx`) *****************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Chakra UI v3 Accessible Hover Tooltip Wrapper (`ChakraTooltip`)
 * - Portalled Tooltip Positioning (`<Portal container={portalRef}>`) to prevent parent clipping
 * - Conditional Tooltip Arrow Rendering (`showArrow`)
 * - Disabled Tooltip Bypass Guard (`if (disabled) return children`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: No tooltip components or hover popup hints.
 * - Day 27: Added reusable `<Tooltip>` wrapper primitive.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import * as React from 'react'

// =========================================================================================
// TOOLTIP COMPONENT WITH REF FORWARDING
// =========================================================================================
export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  // Destructure tooltip props
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    ...rest
  } = props

  // 1. Guard clause: If tooltip is disabled, return children directly without wrapping in trigger
  if (disabled) return children

  return (
    // 2. Main Tooltip Root Container
    <ChakraTooltip.Root {...rest}>
      {/* 3. Attach hover event listeners to children without rendering extra HTML tags (`asChild`) */}
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>

      {/* 4. Render tooltip balloon in Portal to avoid overflow clipping */}
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content ref={ref} {...contentProps}>
            {/* Render arrow callout tip if showArrow is true */}
            {showArrow && (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip />
              </ChakraTooltip.Arrow>
            )}
            {/* Display tooltip text payload */}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  )
})

