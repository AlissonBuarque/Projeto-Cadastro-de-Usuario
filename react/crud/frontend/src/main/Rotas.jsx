
import {
    Route,
    Routes
  } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

function Rotas() {
    return(


        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/event' element={<UserCrud />} />
            {/* <Navigate from='*' to='/' /> */}
        </Routes>

    )
}

export default Rotas

