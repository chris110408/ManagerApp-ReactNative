/**
 * Created by leichen on 2017/1/19.
 */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="auth">
                <Scene
                    onRight={() =>  Actions.main()}
                    rightTitle="Add"
                    key="login"
                    component={LoginForm}
                    title="Please Login" />
            </Scene>

            <Scene key="main" >
                <Scene
                    onRight={() =>  Actions.createEmployee()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"

                />
            </Scene>

            <Scene key="createEmployee" component={EmployeeCreate} title="Create Employee" />

            <Scene key="editEmployee" component={EmployeeEdit} title="Edit Employee" />


        </Router>
    )
}

export default RouterComponent