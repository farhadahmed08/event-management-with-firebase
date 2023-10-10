import { useParams } from "react-router-dom";


const DynamicCard = () => {

    const {id,location,picture} = useParams();

    
    return (
     <div>
        <p>{id}</p>
        <p className="text-black">{location}</p>
        <img src={picture} alt="" />

     </div>
    );
};

export default DynamicCard;