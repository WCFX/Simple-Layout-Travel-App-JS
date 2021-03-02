import React from 'react';
import { Animated, View, Image, Text } from 'react-native';

import { data } from '~/mock';

import { theme } from '~/constants';

const { COLORS, SIZES, FONTS } = theme;

export default () => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      // snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => (
        <View key={index} style={{ width: SIZES.width }}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: '10%',
              left: 40,
              right: 40,
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                fontWeight: 'bold',
                color: COLORS.gray,
                textAlign: 'center',
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                textAlign: 'center',
                marginTop: SIZES.base,
                color: COLORS.gray,
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};
