/*******************************************************************************************************
 * *************************************** PAGINATION COMPONENT (DAY 28) ******************************
 *
 * New Topics Covered in Day 28:
 * - Pagination structure using compound components
 * - Chakra UI v3 pagination primitives (`<Pagination.Root>`, `<Pagination.PrevTrigger>`, `<Pagination.Items>`)
 * - Render Props pattern inside pagination item loop
 * - Conditional style bindings based on selection states (`_selected` modifier)
 *
 * Cross-File & Architecture References:
 * - Imported by: `pages/Home.jsx`
 * - Connected Libraries: `react-icons/lu` for Chevron trigger indicators
 *******************************************************************************************************/

import React from 'react';
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
/*
We import UI items:
- ButtonGroup: Formats internal buttons to align together
- IconButton: Styled icon containers
- Pagination: Sub-component library to manage pagination indices
*/
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
/*
Chevron indicators for previous/next triggers
*/

const PaginationComp = () => {
    return (
        <>
            {/*
            Pagination.Root: Holds current state context.
            - count={20}: Total elements in the dataset.
            - pageSize={2}: Elements shown on each page (implies 10 page numbers).
            - defaultPage={1}: Starts page index at 1.
            */}
            <Pagination.Root count={20} pageSize={2} defaultPage={1}>
                <ButtonGroup variant="outline" size="sm">
                    {/* Backward Navigation */}
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    {/*
                    Pagination.Items render-prop loops through visible numbers.
                    - page: object representing page indices. page.value prints current number.
                    - base: style rules used by default (outline style).
                    - _selected: pseudo-style used when the active page index matches page.value (solid style).
                    */}
                    <Pagination.Items
                        render={(page) => (
                            <IconButton variant={{ base: "outline", _selected: "solid" }}>
                                {page.value}
                            </IconButton>
                        )}
                    />

                    {/* Forward Navigation */}
                    <Pagination.NextTrigger asChild>
                        <IconButton>
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </>
    )
}

export default PaginationComp
