import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "2",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "3",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "4",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "5",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "6",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "7",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "8",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "9",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
  {
    key: "10",
    name: "Tony Reichert",
    fullName: "CEO",
    area: 'Chittagong',
    currency: 'USD',
    contactName: '49554375',
    email: 'altab@dkfd.com',
    bankName: 'Bank Asia',
    bankAddress: 'Jamal Khan, Love lane, Chittagong',
    bankAccNo: '343742974',
    swiftCode: '2345',
    epm: '34',
    cpm: '347',
    address: 'BahaddarHat, Chittagong, Bangladesh',
    tel_mob: '234054',
    logo: `**/n8`,
    staff: 'Saif',
    remarks: 'Emergency'
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "fullName",
    label: "Full Name",
  },
  {
    key: "area",
    label: "Area",
  },
  {
    key: "currency",
    label: "Currency",
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
    key: "bankName",
    label: "Bank Name",
  },
  {
    key: "bankAddress",
    label: "Bank Address",
  },
  {
    key: "bankAccNo",
    label: "Bank Account No",
  },
  {
    key: "swiftCode",
    label: "Swift Code",
  },
  {
    key: "epm",
    label: "EPM",
  },
  {
    key: "cpm",
    label: "CPM",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "tel_mob",
    label: "Tel/. Mob",
  },
  {
    key: "logo",
    label: "Logo",
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

const FactoryList = () => {
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

export default FactoryList