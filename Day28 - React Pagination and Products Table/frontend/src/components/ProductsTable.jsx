/*******************************************************************************************************
 * *************************************** PRODUCTS TABLE (DAY 28) ************************************
 *
 * New Topics Covered in Day 28:
 * - Rendering lists/arrays of objects as dynamic tabular formats
 * - Chakra UI v3 Table Primitive Layout Components (`<Table.Root>`, `<Table.Header>`, `<Table.Body>`)
 * - Dynamic cell content alignment (`textAlign="end"` for numerical values)
 * - Map iteration and key binding (`key={item.id}`)
 *
 * Cross-File & Architecture References:
 * - Imported by: `pages/Home.jsx`
 * - Props: Receives `products` array from API query trigger in Home page
 *******************************************************************************************************/

import { Table, Stack } from "@chakra-ui/react"
/*
We import Table and Stack primitives from @chakra-ui/react:
- Table: Standardized compound library primitives for building clean grids
- Stack: Flex layout structure applying consistent margins/gaps
*/

const ProductsTable = ({ products }) => {
    return (
        /*
        We use Stack to space the Table 6 margin-units from top elements.
        Table.Root is initialized in small compact size (sm) with bordered outline variant.
        */
        <Stack gap="7" mt="6">
            <h3 style={{ fontWeight: 'bold' }}>Fetched Products:</h3>
            <Table.Root size="sm" variant="outline">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Product</Table.ColumnHeader>
                        <Table.ColumnHeader>Category</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {/* 
                    We map over the products array:
                    - key: must be a unique identifier (item.id) to optimize React virtual DOM diffing (reconciliation)
                    - Table.Cell: columns displaying text elements and formatted prices ($)
                    */}
                    {products.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>{item.category}</Table.Cell>
                            <Table.Cell textAlign="end">${item.price}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Stack>
    )
}

export default ProductsTable
