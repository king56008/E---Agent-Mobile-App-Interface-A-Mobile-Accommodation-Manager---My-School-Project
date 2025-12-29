import React from 'react';
import { TextInput } from 'react-native';
import { SearchBar as RNESearchBar } from 'react-native-elements';

const SearchBar = ({ onChangeText, onClear, placeholder,value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      onClear={onClear}
      value={value}
      lightTheme
      round
      containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 , borderColor:"black",}}
      inputContainerStyle={{ backgroundColor: '#e1e1e1' }}
    />
  );
};

export default SearchBar;
