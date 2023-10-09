import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Root;