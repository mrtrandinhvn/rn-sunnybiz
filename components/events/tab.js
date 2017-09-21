import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../styles";

const localStyles = StyleSheet.create({
    event: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderItem({ item }) {
        return (<Text style={localStyles.event}>{item.Title}</Text>);
    }

    render() {
        const {
            data,
            isLoading
        } = this.props;
        return (
            <View style={styles.container} >
                {
                    isLoading ?
                        <Text>Loading...</Text>
                        :
                        <FlatList
                            data={data}
                            renderItem={this._renderItem}
                            keyExtractor={(item) => item.EventID}
                            ListHeaderComponent={<Text>Wow List Starts</Text>}
                            ListFooterComponent={<Text>Wow List Ends</Text>}
                        />
                }

            </View>
        );
    }
}

Tab.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};