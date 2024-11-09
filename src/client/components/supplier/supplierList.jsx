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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplierList } from "../../feature/supplier/supplierSlice";

const SupplierList = () => {
  const { supplierList, isError, isLoading, error } = useSelector(
    (state) => state.supplier
  );

  const dispatch = useDispatch();

  console.log(supplierList, error);

  useEffect(() => {
    dispatch(fetchSupplierList());
  }, [dispatch]);

  const columns = [
    {
      key: "name",
      label: "NAME",
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
      key: "tradeTerms",
      label: "Trade Terms",
    },
    {
      key: "acceptable",
      label: "Acceptable O/S ratio",
    },
    {
      key: "contactName",
      label: "Contact Name",
    },
    {
      key: "email;",
      label: "E-mail",
    },
    {
      key: "pay",
      label: "Pay",
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "adv",
      label: "Adv(%)",
    },
    {
      key: "advTerm ",
      label: "Adv.Term",
    },
    {
      key: "piMi",
      label: "PI/MI/ETD",
    },
    {
      key: "bankName ",
      label: "Bank Name",
    },
    {
      key: "bankAddress",
      label: "Bank Address",
    },
    {
      key: "bankAccountNO",
      label: "Bank Account NO.",
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
      key: "tel",
      label: "Tel/MOb",
    },
    {
      key: "staff",
      label: "Staff",
    },
    {
      key: "logo",
      label: "Logo",
    },
    {
      key: "remarks",
      label: "Remarks",
    },
  ];

  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));
  return (
    <div className="w-full overflow-hidden">
      {isError && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && !isError && supplierList?.length === 0 && (
        <h1 className="text-red-500">No data found...</h1>
      )}
      <h1 className="mb-5 font-bold text-large">Supplier List</h1>

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
            supplierList?.length > 0 &&
            supplierList.map((sl) => (
              <TableRow key={sl.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(sl, columnKey)}</TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SupplierList;
