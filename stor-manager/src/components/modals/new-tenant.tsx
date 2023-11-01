"use client";
import useLogin from "@/hooks/LoginModal";
import useRegister from "@/hooks/RegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../inputs/input";
import Modal from "./modal";
import Phone from "../inputs/phone";
import Address from "../inputs/address";
import Card from "../inputs/card";
import Seperator from "../seperator";
import Email from "../inputs/email";

function NewTenant() {
  const [email, setEmail]             = useState("");
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [address, setAddress]         = useState("");
  const [city, setCity]               = useState("");
  const [state, setState]             = useState("");
  const [country, setCountry]         = useState("");
  const [zipcode, setZip]             = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading]     = useState(false);
  const useRegisterModal:any          = useRegister();
  const useLoginModal:any             = useLogin();

  const onToggle = useCallback(() => {
    useRegisterModal.onClose();
    useLoginModal.onOpen();
  }, [useRegisterModal, useLoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("pages/api/tenants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phoneNumber,
          address,
          city,
          country,
          state,
          zipcode
        }),
      });
      if (!response.ok) {
        throw new Error("Invalid response");
      }
      setIsLoading(false);
      toast.success("account has been created successfully");
      useRegisterModal.onClose();
    } catch (error) {
      console.error("Account error: ", error);
    }
  }, [
    useRegisterModal, 
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    city,
    country,
    state,
    zipcode
    ]
  );

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Seperator label="personal information" color="border-neutral-500/[.7]" />
      <div className='flex flex-row gap-2'>
        <Input
          disabled={isLoading}
          placeholder="Fisrt Name"
          type="text"
          value={firstName}
          onChange={(e:any) => setFirstName(e.target.value)}
        />      
        <Input
          disabled={isLoading}
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(e:any) => setLastName(e.target.value)}
        />
      </div>
      <Email
        email={email}
        setEmail={setEmail}
      />
      <Phone
        placeholder="Primary Phone"
        type="text"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <Phone
        placeholder="Alternate Phone"
        type="text"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <Seperator label="shipping address" color="border-neutral-500/[.7]" />
      <Address 
        address={address}
        city={city}
        state={state}
        zipcode={zipcode}
        setAddress={setAddress}
        setCity={setCity}
        setZipcode={setZip}
        setState={setState}
        addressType="Shipping"
       />
      <Seperator label="card information" color="border-neutral-500/[.7]" />
    </div>
  );
  
  return (
    <Modal
      disabled={isLoading}
      title="New Tenant"
      actionLabel="NewTenant"
      isOpen={useRegisterModal.isOpen}
      onClose={useRegisterModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
}

export default NewTenant;