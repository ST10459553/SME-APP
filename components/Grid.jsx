import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const Grid = (props) => {
  const { containerImg, courseLengthText, container, img, link } = styles;
  const { courseLength, imgLink } = props;
  const [course, setCourse] = useState(null);

  return (
    <View style={container}>
      <Text style={courseLengthText}>{courseLength}</Text>
      <Link href={courseLength==='Six Week Course'? '/SixWeekSectionListScreen':'/SixMonthSectionListScreen'} asChild>
      <TouchableOpacity style={containerImg} onPress={()=>{}}>
          <Image style={img} source={imgLink} />
      </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
  },

  containerImg: {
    width: 300,
    height: 170,
    backgroundColor: "grey",
    borderRadius: 10,
    margin: 30,
    
  },
  courseLengthText: {
    textAlign: "center",
    fontSize: 25,
  },
  img: {
    width: 300,
    height: 170,
    borderRadius: 10,
  },
});
