/**
 * Created by leichen on 2017/1/19.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <Cardsection>
                    <Input
                        label="Name"
                        placeholder="Chris"
                    />
                </Cardsection>

                <Cardsection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </Cardsection>

                <Cardsection>

                </Cardsection>

                <Cardsection>
                    <Button>
                        Save
                    </Button>
                </Cardsection>
            </Card>
        )
    }
}

export default EmployeeCreate;