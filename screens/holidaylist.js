import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "HOLIDAYS",
    data: ["Makar Sankaranti----14/1/2022", "Republic Day---- 26/01/2022", "holi----29/3/2022", "ram Nvami-----21/4/2022"]
  }
]
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const HoliDay = () => (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
      
    },
    item: {
    
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 24,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 20
    }
  });
  
  export default HoliDay;