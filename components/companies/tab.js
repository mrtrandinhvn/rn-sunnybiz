import React from "react";
import { Text, View } from "react-native";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Company tab</Text>
                <Text>Under development</Text>
            </View>
        );
    }
}