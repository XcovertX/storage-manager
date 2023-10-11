import { Site } from "@/interfaces/site";
import { useEffect, useState } from "react";

type Props = {
    site: Site;
}

const SiteMap = ({ site }: Props ) => {
    const [activeFloor, setActiveFloor] = useState(1);
    const [floors, setFloors] = useState(Array<number>)
    

    function handleFloorSwitch(floor: number) {
        setActiveFloor(floor);
    }

    useEffect(() => {
        let f: number[] = [];
        for (let index = 0; index < site.floorCount; index++) {
            f.push(index+1)    
        }
        setFloors(f);
    }, [])

    return (
        <div className="flex flex-col justify-start bg-amber-500 h-full ">
            <div className="flex flex-row justify-start">
                <div>
                    <h1 className="text-4xl">{site.name}</h1>
                    <h1 className="text-xl ml-5">Floor {activeFloor}</h1>
                </div>
                {floors.map(s => {
                    return <button className="bg-red-700 p-2 m-2" onClick={() => handleFloorSwitch(s)} >Floor {s}</button>
                })}
                </div>
            <div className="h-full bg-red-700 border-4 border-black"></div>
        </div>
    )
}

export default SiteMap