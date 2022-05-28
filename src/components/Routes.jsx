import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Ticket from '../pages/Ticket'
import Checking from '../pages/Checking'
import Servicepack from '../pages/Servicepack'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/ticket' component={Ticket}/>
            <Route path='/checking' component={Checking}/>
            <Route path='/service' component={Servicepack}/>

        </Switch>
    )
}

export default Routes
