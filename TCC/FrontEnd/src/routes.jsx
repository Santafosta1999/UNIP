import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produto';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Produto/:Id_Produto" exact component={Produto}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;