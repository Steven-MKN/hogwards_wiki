import { View, ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import {
  BackgroundImageProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  backgroundImage,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';

export type ContainerProps = ViewProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  BackgroundImageProps &
  SpaceProps & {
    center?: boolean;
  };

const StyledContainer: React.FC<ContainerProps> = styled(View) <ContainerProps>`
  ${({ center }) => css`
    display: flex;
    flex-direction: column;
    ${center && { 'align-items': 'center', 'justify-content': 'center' }}
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${position}
    ${space}
    ${shadow}
    ${backgroundImage}
  `}
`;

const Container: React.FC<ContainerProps> = props => (
  // @ts-ignore
  <StyledContainer {...props} />
);

export default Container;
