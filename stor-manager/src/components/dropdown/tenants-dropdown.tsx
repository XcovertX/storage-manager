import DropdownItem from "@/interfaces/dropdown-items";
import Dropdown from "./dropdown";

type Props = {
    handleSwitch: Function;
    currentOpen:  number;
    id:           number;
}

const dropdownItems: DropdownItem[] = [
    {
        title: 'Tenants',
        link: '/tenants/'
    },
    {
        title: 'Prospects',
        link: '/prospects/'
    },
    {
        title: 'Customers',
        link: '/customers/'
    },
    {
        title: 'Contacts',
        link: '/contacts/'
    },
    {
        title: 'Text Messaging',
        link: '/sms/'
    },
    {
        title: 'Customer Portal',
        link: '/cusomerPortal/'
    }
]


const TenantsDropdown = ({ handleSwitch, currentOpen, id }: Props) => {
    return (
        <Dropdown 
            title="Tenants" 
            id={id}
            dropdownItems={dropdownItems}
            handleSwitch={handleSwitch}
            currentOpen={currentOpen}
        />
    )
}

export default TenantsDropdown