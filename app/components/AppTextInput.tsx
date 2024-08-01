import React, { useCallback } from 'react';
import { TextInput, TextInputProps, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';
import {
  BackgroundImageProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  backgroundImage,
  border,
  color,
  layout,
  shadow,
  space,
} from 'styled-system';
import { AppThemeType } from '../utils/theme';

type StyleProps = BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  BackgroundImageProps &
  SpaceProps;

type StyledTextInputProps = TextInputProps & StyleProps;

type AppTextInputProps = StyledTextInputProps & {
  // disable setting the icons
  left?: never;
  right?: never;

  // icon names
  /**
   * MaterialCommunityIcons name
   */
  leftIcon?: string;

  /**
   * MaterialCommunityIcons name
   */
  rightIcon?: string;
  onPeekPress?: () => void;
};

// @ts-ignore
const StyledTextInput: React.FC<StyledTextInputProps> = styled(
  TextInput,
) <StyleProps>`
  ${() => css`
    ${border}
    ${color}
    ${layout}
    ${shadow}
    ${backgroundImage}
    ${space}
    border-radius: 45px;
  `}
`;

const AppTextInput: React.FC<AppTextInputProps> = props => {
  const theme = useTheme<AppThemeType>();

  const LeftIcon = useCallback(() => {
    return (
      <MaterialCommunityIcons
        name={props.leftIcon!}
        color={theme.colors.inverseSurface}
        size={24}
      />
    );
  }, [props.leftIcon]);

  const PeekIcon = useCallback(() => {
    return (
      <MaterialCommunityIcons
        name={props.secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
        color={theme.colors.inverseSurface}
        size={24}
      />
    );
  }, [props.secureTextEntry]);

  const RightIcon = useCallback(() => {
    return (
      <MaterialCommunityIcons
        name={props.rightIcon!}
        color={theme.colors.inverseSurface}
        size={24}
      />
    );
  }, [props.rightIcon]);

  return (
    <StyledTextInput
      mode='outlined'
      {...props}
      width={props.width}
      borderRadius={45}
      style={props.style}
      left={props.leftIcon && <TextInput.Icon icon={LeftIcon} />}
      right={
        props.onPeekPress ? (
          <TextInput.Icon
            onPress={props.onPeekPress}
            forceTextInputFocus={false}
            icon={PeekIcon}
          />
        ) : props.rightIcon ? (
          <TextInput.Icon icon={RightIcon} />
        ) : undefined
      }
    />
  );
};

export default AppTextInput;
