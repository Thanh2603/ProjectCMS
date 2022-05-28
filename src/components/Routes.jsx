import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Ticket from '../pages/Ticket'
import Products from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/ticket' component={Ticket}/>
            <Route path='/products' component={Products}/>
        </Switch>
    )
}

export default Routes
