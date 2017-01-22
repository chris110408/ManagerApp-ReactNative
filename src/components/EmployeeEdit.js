/**
 * Created by leichen on 2017/1/21.
 */
/**
 * Created by leichen on 2017/1/19.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave,employeeDelete } from  '../actions';
import {Card, CardSection, Input, Button,Confirm } from './common';
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component {
    constructor(props){
        super(props);
        this.state = { showModal: false };
    }

    componentWillMount(){
        _.each(this.props.employee,(value,prop) => {
            this.props.employeeUpdate({prop,value})
        })
    }

    onButtonPress() {
        const { name, phone, shift} = this.props
        this.props.employeeSave({ name, phone, shift: shift || 'Monday', uid: this.props.employee.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcomming shift is on ${shift}`);
    }

    onDeltePress() {
        let bool = this.state.showModal
        this.setState({showModal:!bool} )
    }

    onAccept() {
        const { uid } = this.props.employee
        this.props.employeeDelete( {uid} )
    }

    onDecline() {
        this.setState({showModal:false} )
    }

    render() {

        return (
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button whenPress={this.onButtonPress.bind(this)}>
                        Save Change
                    </Button>
                </CardSection>

                <CardSection>
                    <Button whenPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button whenPress={this.onDeltePress.bind(this)}>
                       Delete Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        )
    }
}

const styles={
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone,shift } = state.employeeForm;
    return { name, phone,shift }
}

export default connect(mapStateToProps,{ employeeUpdate,employeeSave,employeeDelete })(EmployeeCreate);