import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DoctorList from '../page/doctorList/Index.jsx'
import Analyse from '../page/analyse/Index.jsx'

export default class Router extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/' component={DoctorList} />
            <Route path='/list' component={DoctorList} />
            <Route path='/analyse' component={Analyse} />
        </Switch>

    }
}