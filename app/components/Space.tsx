import React from 'react';
import { View } from 'react-native';

const Space: React.FC<{ width?: number; height?: number }> = ({
  width,
  height,
}) => {
  return <View style={{ width: width, height: height }} />;
};

export default Space;
