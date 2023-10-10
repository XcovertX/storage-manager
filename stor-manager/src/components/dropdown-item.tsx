type Props = {
    title: string;
  }
  
  const DropdownItem = ({ title }: Props) => {
    return (
      <div className="p-2 bg-white m-2">
        {title}
      </div>
    )
  }
  
  export default DropdownItem