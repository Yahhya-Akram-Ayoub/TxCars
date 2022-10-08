import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '1',
    title: 'Get a rider',
    image:
      'https://www.pngitem.com/pimgs/m/146-1465021_car-emoji-png-car-icon-flat-png-transparent.png',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order food',
    image:
      'https://previews.123rf.com/images/blankstock/blankstock2012/blankstock201202274/160768736-food-delivery-truck-line-icon-contactless-meal-order-sign-grocery-delivery-symbol-quality-design-ele.jpg',
    screen: 'EatsScreen',
  },
];

const NavItems = () => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={[tw`w-full`, {justifyContent: 'center'}]}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[tw`p-2  bg-gray-200 m-2 w-40 h-40`, {alignItems: 'center'}]}>
          <View style={styles.iconContainer}>
            <Image style={styles.icons} source={{uri: item.image}} />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavItems;

const styles = StyleSheet.create({
  icons: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
