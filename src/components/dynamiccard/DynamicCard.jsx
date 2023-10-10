import { useParams } from "react-router-dom";



const DynamicCard = () => {


const params =useParams()
    
    return (
       <div>
        <p>{params.category}</p>
       </div>
    );
};

export default DynamicCard;