/*******************************************************************************************************
 *************************************** TOASTER NOTIFICATION SYSTEM (`toaster.jsx`) ********************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Chakra UI v3 Imperative Toast Notification System (`createToaster`)
 * - Global Portal Notification Mounting (`<Portal>`)
 * - Render Prop Pattern for Custom Toast Templates (`(toast) => <Toast.Root>...`)
 * - Toast Types (loading spinner vs success/error indicators)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: No toast notification feedback systems present.
 * - Day 27: Integrated Chakra UI v3 `<Toaster />` component primitive for displaying asynchronous feedback notifications!
 *******************************************************************************************************/

'use client'

// =========================================================================================
// IMPORTS
// =========================================================================================
import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from '@chakra-ui/react'

// =========================================================================================
// TOASTER INSTANCE CREATION
// =========================================================================================
/*
   `createToaster()`:
   Creates an imperative toaster store instance for triggering toasts anywhere in application code
   via `toaster.create({ title: 'Success', type: 'info' })`.
*/
export const toaster = createToaster({
  placement: 'bottom-end', // Position notification toasts in bottom-right corner
  pauseOnPageIdle: true, // Pause auto-close timers when user switches browser tabs
})

// =========================================================================================
// TOASTER CONTAINER COMPONENT
// =========================================================================================
export const Toaster = () => {
  return (
    // Teleport toast notifications to root level DOM node outside parent overflow constraints
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
        {/* Render prop function receiving individual toast data */}
        {(toast) => (
          <Toast.Root width={{ md: 'sm' }}>
            {/* Display spinner for loading toasts, or indicator icon for static toasts */}
            {toast.type === 'loading' ? (
              <Spinner size='sm' color='blue.solid' />
            ) : (
              <Toast.Indicator />
            )}

            {/* Toast Title & Description Text Stack */}
            <Stack gap='1' flex='1' maxWidth='100%'>
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>

            {/* Action Trigger Button */}
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}

            {/* Close Cross Trigger */}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}

