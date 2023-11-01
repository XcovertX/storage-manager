import DropdownItem from "@/interfaces/dropdown-item";
import Dropdown from "./dropdown";

type Props = {
    handleSwitch: Function;
    currentOpen:  number;
    id:           number;
}

const dropdownItems: DropdownItem[] = [
    {
        title: 'Unit Types',
        link: '/properties/'
    },
    {
        title: 'Units',
        link: '/units/'
    }
]

const UnitsDropdown = ({ handleSwitch, currentOpen, id }: Props) => {
    return (
        <Dropdown 
            title="Units" 
            id={id}
            dropdownItems={dropdownItems}
            handleSwitch={handleSwitch}
            currentOpen={currentOpen}
        />
    )
}

export default UnitsDropdown