import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../../feature/customer/customerSlice";

const AddCustomer = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  const [customer, setCustomer] = useState({
    name: "",
    fullName: "",
    area: "",
    currency: "",
    contactName: "",
    email: "",
    execess_short: "",
    bankName: "",
    bankAddress: "",
    bankAccNo: "",
    swiftCode: "",
    address: "",
    tel_mob: "",
    logo: "",
    staff: "",
    remarks: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const copyCustomerInfo = { ...customer };
    copyCustomerInfo[name] = value;
    setCustomer(copyCustomerInfo);
  };

  const handleSaveCustomer = (e) => {
    e.preventDefault();
    const {
      name,
      fullName,
      area,
      currency,
      contactName,
      email,
      execess_short,
      bankName,
      bankAddress,
      bankAccNo,
      swiftCode,
      address,
      tel_mob,
      logo,
      staff,
      remarks,
    } = customer;
    // if (
    //   !name ||
    //   !fullName ||
    //   !area ||
    //   !currency ||
    //   !contactName ||
    //   !email ||
    //   !execess_short ||
    //   !bankName ||
    //   !bankAddress ||
    //   !bankAccNo ||
    //   !swiftCode ||
    //   !address ||
    //   !tel_mob ||
    //   !logo ||
    //   !staff ||
    //   !remarks
    // )
    //   return handleError("field cant be empty");
    console.log({
      customer,
    });
    dispatch(createCustomer(customer));
  };

  const customerfields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      variant: "flat",
      type: "text",
    },
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter your full name",
      variant: "flat",
      type: "text",
    },
    {
      name: "are",
      label: "Area",
      placeholder: "Enter Area",
      variant: "flat",
      type: "text",
    },
    {
      name: "currency",
      label: "Currency",
      placeholder: "Enter Currency",
      variant: "flat",
      type: "text",
    },
    {
      name: "contactName",
      label: "Contact Name",
      placeholder: "Enter Contact Name",
      variant: "flat",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      variant: "flat",
      type: "text",
    },
    {
      name: "execess_short",
      label: "Execess/Short",
      placeholder: "Enter execess/short",
      variant: "flat",
      type: "text",
    },
    {
      name: "bankName",
      label: "Bank Name",
      placeholder: "Enter Bank Name",
      variant: "flat",
      type: "text",
    },
    {
      name: "bankAddress",
      label: "Bank Address",
      placeholder: "Enter Bank Address",
      variant: "flat",
      type: "text",
    },
    {
      name: "bankAccNo",
      label: "Bank Account No",
      placeholder: "Enter Bank Account No",
      variant: "flat",
      type: "text",
    },
    {
      name: "swiftCode",
      label: "Swift Code",
      placeholder: "Enter Swift Code",
      variant: "flat",
      type: "text",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Enter Address",
      variant: "flat",
      type: "text",
    },
    {
      name: "tel_mob",
      label: "Tel./ Mob",
      placeholder: "Enter Tel./ Mob",
      variant: "flat",
      type: "text",
    },
    {
      name: "logo",
      label: "Logo",
      placeholder: "Upload logo",
      variant: "flat",
      type: "text",
    },
    {
      name: "staff",
      label: "Staff",
      placeholder: "Enter staff",
      variant: "flat",
      type: "text",
    },
    {
      name: "remarks",
      label: "Remarks",
      placeholder: "Enter remarks",
      variant: "flat",
      type: "text",
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSaveCustomer}
        className="flex justify-center w-full"
      >
        <div className="flex flex-col border-3 border-info-dark pt-5">
          <div className="flex flex-wrap gap-4 justify-center">
            {customerfields.map((field) => (
              <div className="">
                <Input
                  onChange={handleOnChange}
                  type={field.type}
                  name={field.name}
                  variant={field.variant}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="flex-1 mt-5">
            <Button
              color="primary"
              className="bg-lime-300 text-zinc-950"
              type="submit"
            >
              Save Customer
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCustomer;
