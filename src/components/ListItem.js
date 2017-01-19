/**
 * Created by leichen on 2017/1/16.
 */
import React, { Component } from 'react';
import { Text ,View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { item, expanded } = this.props;

        if (expanded){
            return (
                <CardSection>
                    <Text>{this.props.item.description}</Text>
                </CardSection>

            )
        }
    }

    render() {
        const { id, title } = this.props.item;
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectionLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            { title }
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


const mapStateToProps = (state,ownProps) => {
    const expanded = state.SelectionReducerId === ownProps.item.id
    return { expanded };
}

export default  connect(mapStateToProps, actions)(ListItem);