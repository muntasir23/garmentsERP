import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerList } from "../../feature/customer/customerSlice";


const CustomerList = () => {
  const { customerList, isLoading, isError, error } = useSelector(
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
    <div className="flex justify-center">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>{error}</h1>}
      {!isLoading && !isError && customerList?.length === 0 && (
        <h1>No data found</h1>
      )}
      {!isLoading && !isError && customerList?.length > 0 && (
        <h1>{customerList.kl}</h1>
      )}
       {/* <Table
          aria-label="Controlled table example with dynamic content"
          selectionMode="multiple"
          // disabledKeys={["3", "4"]}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader
           className="overflow-auto" columns={columns}>
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
        </Table> */}
       
        
    </div>
  );
};

export default CustomerList;
