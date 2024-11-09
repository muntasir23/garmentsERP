import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "2",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "3",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "4",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "5",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "6",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "7",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    {
        key: "8",
        artno: 'Ab2391-1',
        item: 'Zipper',
        finished: 'End Stopper',
        std: '*  *',
        unit: 'PCS',
        c: 'USD',
        aPrice: '0.023',
        supplier: 'SBS',
        contactName: 'TINA',
        email: 'tina@sbs.com',
        hsCode: '245550-2',
        pc: '1-',
        qt: '1-',
        staff: 'Saiful',
        remarks: 'Nothing',
    },
    
];

const columns = [
    {
        key: "artno",
        label: "Art No.",
    },
    {
        key: "item",
        label: "Item",
    },
    {
        key: "finished",
        label: "Finished",
    },
    {
        key: "std",
        label: "STD",
    },
    {
        key: "unit",
        label: "Unit",
    },
    {
        key: "c",
        label: "C",
    },
    {
        key: "aPrice",
        label: "A.Price",
    },
    {
        key: "supplier",
        label: "Supplier",
    },
    {
        key: "contactName",
        label: "Contact Name",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "hsCode",
        label: "HS Code",
    },
    {
        key: "pc",
        label: "PC",
    },
    {
        key: "qt",
        label: "QT",
    },
    {
        key: "staff",
        label: "Staff",
    },
    {
        key: "remarks",
        label: "Remarks",
    },
];

const ItemList = () => {
    return (
        <div className='overflow-x-auto'>

            <Table
                selectionMode='single'
                aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default ItemList