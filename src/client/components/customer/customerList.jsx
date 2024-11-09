import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerList } from "../../feature/customer/customerSlice";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "2",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "3",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "4",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "5",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "6",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "7",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "8",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "9",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
  },
  {
    key: "10",
    name: "Tony Reichert",
    fullName: "CEO",
    area: "Chittagong",
    currency: "USD",
    contactName: "49554375",
    email: "altab@dkfd.com",
    execess_short: "+3",
    bankName: "Bank Asia",
    bankAddress: "Jamal Khan, Love lane, Chittagong",
    bankAccNo: "343742974",
    swiftCode: "2345",
    address: "BahaddarHat, Chittagong, Bangladesh",
    tel_mob: "234054",
    logo: `**/n8`,
    staff: "Saif",
    remarks: "Emergency",
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
    key: "execess_short",
    label: "Excess/Short",
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

const CustomerList = () => {
  const { customerList, isLoading, isError, error } = useSelector(
    (state) => state.customer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerList());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>{error}</h1>}
      {!isLoading && !isError && customerList?.length === 0 && (
        <h1>No data found</h1>
      )}
      {!isLoading && !isError && customerList?.length > 0 && (
        <h1>{customerList.kl}</h1>
      )}

      <Table
        classNames={{
          base: "max-h-[520px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1300px] xl:max-w-[1500px] overflow-scroll",
          table: "min-h-[720px] ",
        }}
        selectionMode="single"
        aria-label="Example table with dynamic content"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        {/* <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody> */}
        <TableBody>
          {customerList.map((cl) => (
            <TableRow key={cl.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(cl, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerList;
