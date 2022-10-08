import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {NavItems} from '../components';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, {alignContent: 'center'}]}>
      <View style={[tw`p-5`, styles.logoContainer]}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png',
          }}
        />
      </View>
      <NavItems />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'flex-end',
  },
});
