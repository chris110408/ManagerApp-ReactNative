/**
 * Created by leichen on 2017/1/16.
 */
import React, { Component } from 'react';
import { Text ,View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Header, Input, Spinner, Button } from './common';
import { emailChanged,passwordChanged }  from '../actions';


class LoginForm extends Component {
    componentWillUpdate(){

    }
    emailChange(text) {
        this.props.emailChanged(text)
    }

    passwordChange(text) {
        this.props.passwordChanged(text)
    }
    render() {

        return(
                <View>
                    <Card>
                        <Header headerText='login'/>

                        <CardSection>
                            <Input
                                onChangeText={this.emailChange.bind(this)}
                                placeholder="xxx@xxx.com"
                                value={this.props.email}
                            />
                        </CardSection>

                        <CardSection>
                            <Input
                                secureTextEntry
                                onChangeText={this.passwordChange.bind(this)}
                                placeholder="password"
                                value={this.props.password}
                            />
                        </CardSection>

                        <CardSection>
                            <Button>
                                Login
                            </Button>
                        </CardSection>
                    </Card>
                </View>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


const mapStateToProps = ({ auth }) => {

    return { email:auth.email, password:auth.password };
}

export default  connect(mapStateToProps, { emailChanged,passwordChanged })(LoginForm);
