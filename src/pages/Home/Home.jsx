import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import ServiceCard from "./serviceCard";


const Home = () => {


    const services = useLoaderData();
    console.log(services)




    return (
        <div className="space-y-14">
            <Banner/>
            <h1 className="text-6xl text-center font-bold text-blue-600 ">Services We Provide</h1>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
                {
                    services?.map(service=><ServiceCard key={service.id} card ={service}></ServiceCard>)
                }
            </div>
     
        </div>
    );
};

export default Home;