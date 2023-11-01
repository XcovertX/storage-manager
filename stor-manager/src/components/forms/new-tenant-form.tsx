"use client";
import useLogin from "@/hooks/LoginModal";
import useRegister from "@/hooks/RegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../inputs/input";
import Form from "./form";
import Phone from "../inputs/phone";
import Address from "../inputs/address";
import Card from "../inputs/card";
import Seperator from "../seperator";
import Email from "../inputs/email";
import UnitNumber from "../inputs/unit-number";

function NewTenant() {
  const [email, setEmail]             = useState("");
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [address, setAddress]         = useState("");
  const [city, setCity]               = useState("");
  const [state, setState]             = useState("");
  const [country, setCountry]         = useState("");
  const [zipcode, setZip]             = useState("");
  const [units, setUnits]             = useState<number[]>([])
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
    <div className="flex flex-row gap-2">
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
        <Seperator label="address" color="border-neutral-500/[.7]" />
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
      </div>
      <div className="flex flex-col gap-2">
        <Seperator label="Units" color="border-neutral-500/[.7]" />
        <UnitNumber 
          availableUnits={[1000, 1001, 1002, 3002, 2202]}
          setSelectedUnits={setUnits}
          units={units}
        />
      </div>
    </div>
  );
  
  return (
    <Form
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