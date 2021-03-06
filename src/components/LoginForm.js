/**
 * Created by leichen on 2017/1/16.
 */
import React, { Component } from 'react';
import { Text ,View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Input, Spinner, Button } from './common';
import { emailChanged, passwordChanged, loginUser }  from '../actions';


class LoginForm extends Component {
    componentWillUpdate(){

    }
    emailChange(text) {
        this.props.emailChanged(text)
    }

    passwordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }
    renderSpinner(){
        if(this.props.loading){
           return <Spinner />
        }
        return (
            <Button whenPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {

        return(
                <View>


                    <Card>


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

                        <Text style={styles.errorStyle}>{this.props.error}</Text>

                        <CardSection>
                            {this.renderSpinner()}
                        </CardSection>
                    </Card>
                </View>
        )
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, error,loading } = auth
    return { email, password, error,loading };
}

export default  connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
