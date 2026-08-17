import { Table, Stack } from "@chakra-ui/react"

const ProductsTable = ({ products }) => {
    return (
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
