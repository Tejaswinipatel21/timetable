import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["dimple", "bulani"],
  },
  {
    title: "English",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["himanshi", "shah"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: [ "mamta" ,"sharma"],
  },
  {
    title: "Biology",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 401",
    extra_descriptions: ["mamta" ,"sharma"],
  },
  {
    title: "gujrati",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 50),
    location: "Language Center",
    extra_descriptions: ["bhumika","rawal"],
  },
  {
    title: "French",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Social Science",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "room no.201",
  },
  {
    title: "P.E",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Ground no.2",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={9}
            pivotEndTime={20}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en-US"
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});