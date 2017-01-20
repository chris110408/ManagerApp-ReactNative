/**
 * Created by leichen on 2017/1/19.
 */

import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from  '../actions';
import {Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    updatePropAndValue( prop, value){
        console.log(prop)
        this.props.employeeUpdate({ prop: prop, value: value })
    }
    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Chris"
                        value={this.props.name}
                        onChangeText={ this.updatePropAndValue.bind(this,'name')}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={ this.updatePropAndValue.bind(this,'phone')}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{marginTop: -50}}
                        selectedValue={this.props.shift}
                        onValueChange={ this.updatePropAndValue.bind(this,'shift')}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
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
    console.log(state.employeeForm)
    return { name, phone,shift }
}

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeCreate);