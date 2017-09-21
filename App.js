import React from "react";
import { View } from "react-native";
import { gsPromise } from "./gs/gs-promise";
import { styles } from "./components/styles";

import CompanyTab from "./components/companies/tab";
import EventTab from "./components/events/tab";

// import wtf from "react-autobind";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // autoBind(this);
    this.state = {
      eventTab: {
        data: [],
        isLoading: true
      }
    };
  }

  componentDidMount() {
    gsPromise.get("http://sunnybiztest.sunnyjobs.com.au/api/event?mode=ONGOING_EVENTS")
      .then(({ data }) => {
        this.setState({
          eventTab: {
            data,
            isLoading: false
          }
        });
      })
      .catch(() => {
        alert("error");
        this.setState({
          eventTab: {
            isLoading: false
          }
        });
      });
  }

  render() {
    const {
      eventTab
    } = this.state;
    return (
      <View style={styles.container}>
        {/* <CompanyTab /> */}
        <EventTab
          data={eventTab.data}
          isLoading={eventTab.isLoading}
        />
      </View>
    );
  }
}