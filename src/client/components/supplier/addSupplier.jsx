import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSupplier } from "../../feature/supplier/supplierSlice";

const AddSupplier = () => {
  const [name, setName] = useState("");
  const [fullName, setFullname] = useState("");
  const [area, setArea] = useState("");
  const [currency, setCurrency] = useState("");
  const [tradeTerms, setTradeTerms] = useState("");
  const [acceptable, setAcceptable] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [pay, setPay] = useState("");
  const [time, setTime] = useState("");
  const [adv, setAdv] = useState("");
  const [advTerm, setAdvTerm] = useState("");
  const [piMi, setPiMi] = useState("");
  const [afterTerm, setAfterTerm] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [bankaccountNO, setBankaccountNO] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [staff, setStaff] = useState("");
  const [logo, setLogo] = useState("");
  const [remarks, setRemarks] = useState("");

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.supplier);

  const resetForm = () => {
    setName("");
    setFullname("");
    setArea("");
    setCurrency("");
    setTradeTerms("");
    setAcceptable("");
    setContactName("");
    setEmail("");
    setPay("");
    setTime("");
    setAdv("");
    setAdvTerm("");
    setPiMi("");
    setAfterTerm("");
    setBankName("");
    setBankAddress("");
    setBankaccountNO("");
    setSwiftCode("");
    setAddress("");
    setTel("");
    setStaff("");
    setLogo("");
    setRemarks("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      fullName,
      area,
      currency,
      tradeTerms,
      acceptable,
      contactName,
      email,
      pay,
      time,
      adv,
      advTerm,
      piMi,
      afterTerm,
      bankName,
      bankAddress,
      bankaccountNO,
      swiftCode,
      address,
      tel,
      staff,
      logo,
      remarks,
    });
    dispatch(
      createSupplier({
        name,
        fullName,
        area,
        currency,
        tradeTerms,
        acceptable,
        contactName,
        email,
        pay,
        time,
        adv,
        advTerm,
        piMi,
        afterTerm,
        bankName,
        bankAddress,
        bankaccountNO,
        swiftCode,
        address,
        tel,
        staff,
        logo,
        remarks,
      })
    );
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border light: bg-zinc-50 dark:bg-black light:border-zinc-300 dark:border-zinc-800 rounded"
    >
      <h1 className="mt-3 font-bold text-medium">Add Supplier</h1>
      <div className="mt-7 md:px-10 px-4 ">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="name"
            label="Name"
            radius="sm"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="fullName"
            label="Full Name (Bank Account)"
            radius="sm"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            type="area"
            label="Area"
            radius="sm"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="currency"
            label="Currency"
            radius="sm"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <Input
            type="tradeTerms"
            label="Trade Terms"
            radius="sm"
            value={tradeTerms}
            onChange={(e) => setTradeTerms(e.target.value)}
          />
          <Input
            type="acceptableOS"
            label="Acceptable O/S ratio"
            radius="sm"
            value={acceptable}
            onChange={(e) => setAcceptable(e.target.value)}
          />
        </div>
        <p className="mt-5 font-semibold">Attention</p>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="Contact Name"
            label="Contact Name"
            radius="sm"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <Input
            type="email"
            label="E-mail"
            radius="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <p className="mt-5 font-semibold">Payment Terms</p>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="Pay"
            label="Pay"
            radius="sm"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
          />
          <Input
            type="text"
            label="Time"
            radius="sm"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Input
            type="text"
            label="Adv(%)"
            radius="sm"
            value={adv}
            onChange={(e) => setAdv(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="text"
            label="Adv.Term"
            radius="sm"
            value={advTerm}
            onChange={(e) => setAdvTerm(e.target.value)}
          />
          <Input
            type="text"
            label="PI/MI/ETD"
            radius="sm"
            value={piMi}
            onChange={(e) => setPiMi(e.target.value)}
          />
          <Input
            type="text"
            label="After Term"
            radius="sm"
            value={afterTerm}
            onChange={(e) => setAfterTerm(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="text"
            label="Bank Name"
            radius="sm"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
          <Input
            type="text"
            label="Bank Address"
            radius="sm"
            value={bankAddress}
            onChange={(e) => setBankAddress(e.target.value)}
          />
          <Input
            type="text"
            label="Bank Account"
            radius="sm"
            value={bankaccountNO}
            onChange={(e) => setBankaccountNO(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="text"
            label="Swift Code"
            radius="sm"
            value={swiftCode}
            onChange={(e) => setSwiftCode(e.target.value)}
          />
          <Input
            type="text"
            label="Address"
            radius="sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            label="Tel/Mob"
            radius="sm"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5">
          <Input
            type="text"
            label="Stuff "
            radius="sm"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          />
          <Input
            type="text"
            label="Logo "
            radius="sm"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
          <Input
            type="text"
            label="Remarks"
            radius="sm"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
      </div>
      <button className="mt-5 border px-5 py-1 mb-3 rounded bg-lime-300 text-zinc-950">
        {isLoading ? "Loading..." : "Submit"}
      </button>
      {/* <Button color="success" endContent={<CameraIcon />}>
        Take a photo
      </Button> */}
    </form>
  );
};

export default AddSupplier;
