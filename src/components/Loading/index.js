import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, IconLoading } from './styles';

export default function() {
  return (
    <View>
      <IconLoading>
        <ActivityIndicator color="#fff" size="large" />
      </IconLoading>
    </View>
  );
}
