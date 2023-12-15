import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={{...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2}}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textInput: {flex: 1, fontSize: 18},
});
