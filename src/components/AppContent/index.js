import React from 'react';
import { Animated, View, Image } from 'react-native';

import { data } from '~/mock';

import { theme } from '~/constants';

const { COLORS, SIZES, FONTS } = theme;

export default () => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => (
        <View 
        key={index}
        style={{ width: SIZES.width}}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%"
              }}
              />
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  )
}