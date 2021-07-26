import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { increment, request_action, fetchUserById } from '../Redux/Reducers/slice';
import _ from 'lodash';

const index = () => {
    const state = useSelector(state => state.slice)
    const dispatch = useDispatch()
    const [value, setValue] = useState('');

    var testing = (data) => {
        setValue(data)
        console.log("Data:-", data)
    }

    const handler = useCallback(_.debounce(testing, 500), []);

    return (
        <View>
            <Text>Value:- {value}</Text>
            <Text>State:- {state.value}</Text>
            <Button title="ClickMe" onPress={() => dispatch(fetchUserById())} />
            <TextInput style={{ borderWidth: 1 }} onChangeText={(data) => { handler(data) }} />
            <Button title="ClickMeDebounce" onPress={() => { debounce_fun(); testing() }} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
