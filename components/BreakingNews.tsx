import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import React, { useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import SliderItem from "@/components/SliderItem";
import {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Pagination from "./Pagination";

type Props = { newsList: Array<NewsDataType> };

const BreakingNews = ({ newsList }: Props) => {
  const [data, setData] = useState(newsList);

  const [PaginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <Animated.FlatList
          ref={ref}
          data={data}
          keyExtractor={(item, index) => `list_item_${index}`}
          renderItem={({ item, index }) => (
            <SliderItem slideItem={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
        />
      </View>
      <Pagination
        items={newsList}
        PaginationIndex={PaginationIndex}
        scrollX={scrollX}
      />
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  slideWrapper: { justifyContent: "center" },
});
