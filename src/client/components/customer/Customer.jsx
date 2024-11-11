import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { ImSad } from "react-icons/im";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { fetchCustomerList } from "../../feature/customer/customerSlice";

const CustomerListNew = () => {
  const { customerList, isError, isLoading, error } = useSelector(
    (state) => state.customer
  );

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCustomerList());
  }, [dispatch]);



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

  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));
  return (
    <div className="w-full overflow-hidden">
      <h1 className="mb-5 font-bold text-orange-400 text-large">
        Customer List
      </h1>
      {isError && (
        <h1 className="text-orange-400 flex items-center justify-center gap-3">
          {error}! <ImSad />
        </h1>
      )}
      {isLoading && <Loading />}
      {!isLoading && !isError && customerList?.length === 0 && (
        <h1 className="text-orange-500">No data found...</h1>
      )}

      {!isLoading && !isError && customerList?.length > 0 && (
        <Table
          aria-label="Controlled table example with dynamic content"
          selectionMode="multiple"
          // disabledKeys={["3", "4"]}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader className="overflow-auto" columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody>
            {!isLoading &&
              !isError &&
              customerList?.length > 0 &&
              customerList.map((sl) => (
                <TableRow key={sl.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(sl, columnKey)}</TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default CustomerListNew;
