import React from 'react';
import {TextInput} from 'react-native';

interface Props {
  style?: any;
  placeholder: string;
  placeholderTextColor?: string;
  onFocus: any;
  onBlur: any;
  returnKeyType: any;
  secureTextEntry:any;
  onSubmitEditing:any;
  onChangeText:any;
  ref:any
}

const CustomInput = (props: Props) => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onFocus={() => props.onFocus}
      onBlur={() => props.onBlur}
      returnKeyType={props.returnKeyType}
      secureTextEntry={props.secureTextEntry}
      onSubmitEditing={props.onSubmitEditing}
      onChangeText={props.onChangeText}
      ref={props.ref}
    />
  );
};

export default CustomInput;
