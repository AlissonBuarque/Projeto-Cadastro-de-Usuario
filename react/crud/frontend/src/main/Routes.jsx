import React from "react";
import { Switch , Route, Redirect } from 'react-router'

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default porps =>
<Switch>
    <Route exact path='/' component={Home} />
    <Home path='/users' component={UserCrud} />
    <Redirect from="*" to='/' />
</Switch>

