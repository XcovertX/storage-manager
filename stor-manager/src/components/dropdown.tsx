type Props = {
    title: string;
  }
  
  const Dropdown = ({ title }: Props) => {
    return (
      <div className="p-2 bg-green-600 m-2 rounded-md">
        {title}
      </div>
    )
  }
  
  export default Dropdown