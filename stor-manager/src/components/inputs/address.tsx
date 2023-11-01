
import Input from "./input";

type Props = {
    address:     string;
    city:        string;
    state:       string;
    country?:     string;
    zipcode:     string;
    addressType: string;
    setAddress:  Function;
    setCity:     Function;
    setCountry?:  Function;
    setState:    Function;
    setZipcode:  Function;
}

const Address = ({ address, 
                   city,
                   state, 
                   country,
                   zipcode,
                   addressType, 
                   setAddress, 
                   setCity, 
                   setCountry,
                   setZipcode, 
                   setState }: Props) => {
  
  return(
    <div className="h-full flex flex-col gap-2">
      <Input
        type="text"
        disabled={false}
        placeholder={addressType + ' Street Address'}
        onChange={(e:any) =>setAddress(e.target.value)}
        value={address} />
      <div className="flex flex-row gap-2">
        <Input
          type="text"
          disabled={false}
          placeholder={addressType + ' City'}
          onChange={(e:any) =>setCity(e.target.value)}
          value={city} />
        <Input
          type="text"
          disabled={false}
          placeholder={addressType + ' State'}
          onChange={(e:any) =>setState(e.target.value)}
          value={state} />
        <Input
          type="text"
          disabled={false}
          placeholder={"Zipcode"}
          onChange={(e:any) =>setZipcode(e.target.value)}
          value={zipcode} />
        </div>
    </div>
  )
}

export default Address