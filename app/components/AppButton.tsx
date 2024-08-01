import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

const AppButton: React.FC<ButtonProps> = props => {
  return (
    <Button
      {...props}
      mode={props.mode ?? 'contained'}
    />
  );
};

export default AppButton;
