import DropdownItem from "@/interfaces/dropdown-item";
import Dropdown from "./dropdown";

type Props = {
    handleSwitch: Function;
    currentOpen:  number;
    id:           number;
}

const dropdownItems: DropdownItem[] = [
    {
        title: 'Properties',
        link: '/properties/'
    },
    {
        title: 'Properties Lists',
        link: '/properties/'
    },
    {
        title: 'Owners',
        link: '/properties/'
    },
]

const PropertiesDropdown = ({ handleSwitch, currentOpen, id }: Props) => {
    return (
        <Dropdown 
            title="Properties" 
            id={id}
            dropdownItems={dropdownItems}
            handleSwitch={handleSwitch}
            currentOpen={currentOpen}
        />
    )
}

export default PropertiesDropdown