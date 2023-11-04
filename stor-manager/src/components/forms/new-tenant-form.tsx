"use client";
import useLogin from "@/hooks/LoginModal";
import useRegister from "@/hooks/RegisterModal";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../inputs/input";
import Form from "./form";
import Phone from "../inputs/phone";
import Address from "../inputs/address";
import Seperator from "../seperator";
import Email from "../inputs/email";
import UnitNumber from "../inputs/unit-number";
import { Unit } from "@/models/unit";
import DemandTypeSelector from "../inputs/demand-selector";
import GateAccess from "../inputs/gate-access";

type Props = {
  unit?: Unit
}

function NewTenant({ unit }: Props) {
  const [email, setEmail]             = useState("");
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [street, setStreet]           = useState("");
  const [city, setCity]               = useState("");
  const [state, setState]             = useState("");
  const [country, setCountry]         = useState("");
  const [zipcode, setZip]             = useState("");
  const [units, setUnits]             = useState<string[]>([])
  const [phone, setPhone]             = useState("");
  const [altPhone, setAltPhone]       = useState("");
  const [isLoading, setIsLoading]     = useState(false);
  const [demandType, setDemandType]   = useState('');
  const [gateAccess, setGateAccess]   = useState('');
  const [altGate, setAltGateAccess]   = useState('');
  const useRegisterModal:any          = useRegister();
  const useLoginModal:any             = useLogin();

  const onToggle = useCallback(() => {
    useRegisterModal.onClose();
    useLoginModal.onOpen();
  }, [useRegisterModal, useLoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/tenants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          altPhone,
          street,
          city,
          country,
          state,
          zipcode,
          demandType,
          gateAccess,
          altGate,
          units
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
    phone,
    altPhone,
    street,
    city,
    country,
    state,
    zipcode,
    demandType,
    gateAccess,
    altGate,
    units
    ]
  );

  const bodyContent = (
    <div className="flex flex-row gap-2 ">
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
          value={phone}
          onChange={setPhone}
        />
        <Phone
          placeholder="Alternate Phone"
          type="text"
          value={altPhone}
          onChange={setAltPhone}
        />
        <Seperator label="address" color="border-neutral-500/[.7]" />
        <Address 
          address={street}
          city={city}
          state={state}
          zipcode={zipcode}
          setAddress={setStreet}
          setCity={setCity}
          setZipcode={setZip}
          setState={setState}
          addressType="Shipping"
        />
      </div>
      <div className="flex flex-col h-full gap-2 w-1/2">
        <Seperator label="Units" color="border-neutral-500/[.7]" />
        <UnitNumber 
          availableUnits={['1000', '1001', '1002', '3002', '2202', '2222', '2221', '2220', '2199', '2198', '2197', '3001', '3000', '3222']}
          setSelectedUnits={setUnits}
          units={units}
        />
      </div>
      <div className="flex flex-col h-full gap-2 w-1/2">
        <Seperator label="Demand Type" color="border-neutral-500/[.7]" />
        <DemandTypeSelector 
          demand={demandType}
          setDemand={setDemandType}
        />
        <Seperator label="Gate Access" color="border-neutral-500/[.7]" />
        <GateAccess plholder="Gate Access"     accessNumber={gateAccess} setAccessNumber={setGateAccess} />
        <GateAccess plholder="Alt Gate Access" accessNumber={altGate}    setAccessNumber={setAltGateAccess} />
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
      cancel={true}
    />
  );
}

export default NewTenant;