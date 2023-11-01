import DropdownItem from "@/interfaces/dropdown-item";
import Dropdown from "./dropdown";

type Props = {
    handleSwitch: Function;
    currentOpen:  number;
    id:           number;
}

const dropdownItems: DropdownItem[] = [
    {
        title: 'Monthly Report',
        link: '/reports/monthly/'
    },
    {
        title: 'Delinquency Report',
        link: '/reports/delinquency/'
    },
    {
        title: 'Occupancy Report',
        link: '/reports/occupancy/'
    },
    {
        title: 'Move-In Report',
        link: '/reports/move-ins/'
    },
    {
        title: 'Move-Out Report',
        link: '/reports/move-outs/'
    }
]


const ReportsDropdown = ({ handleSwitch, currentOpen, id }: Props) => {
    return (
        <Dropdown 
            title="Reports" 
            id={id}
            dropdownItems={dropdownItems}
            handleSwitch={handleSwitch}
            currentOpen={currentOpen}
        />
    )
}

export default ReportsDropdown