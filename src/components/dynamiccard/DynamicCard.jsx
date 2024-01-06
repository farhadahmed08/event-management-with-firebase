import { useLoaderData, useParams } from "react-router-dom";




const DynamicCard = () => {
    const cardData = useLoaderData();

    const {id} =useParams();
    const intId =parseInt(id);
    console.log(cardData,intId)
    const card =cardData.find(card=>card.id ===intId);
    const {location,description,picture,date,eventName} = card;
    console.log(card) 




    
    return (
       <div>
        <p>{id}</p>
       <div className="card  card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{
    description}</h2>
    <h2 className="card-title">{
    eventName}</h2>
    <p>{location}</p>
    <p>{date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
       

       </div>
    );
};

export default DynamicCard;