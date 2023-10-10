import { useParams } from "react-router-dom";


const DynamicCard = () => {

    const {id,location} = useParams();

    
    return (
     <div>
        <p>{id}{location}</p>

     </div>
    );
};

export default DynamicCard;