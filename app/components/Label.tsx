import styled, { css } from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextColorProps,
  TypographyProps,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';
import { Text } from 'react-native-paper';

type LabelProps = BorderProps &
  ColorProps &
  TextColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  TypographyProps &
  SpaceProps & {
    children?: string;
    strong?: boolean;
    variant?:
      | 'displayLarge'
      | 'displayMedium'
      | 'displaySmall'
      | 'headlineLarge'
      | 'headlineMedium'
      | 'headlineSmall'
      | 'titleLarge'
      | 'titleMedium'
      | 'titleSmall'
      | 'labelLarge'
      | 'labelMedium'
      | 'labelSmall'
      | 'bodyLarge'
      | 'bodyMedium'
      | 'bodySmall';
  };

const Label: React.FC<LabelProps> = styled(Text)<LabelProps>`
  ${({ strong }) => css`
    ${strong && `font-weight: 700;`}
    ${color}
    ${flexbox}
    ${layout}
    ${position}
    ${space}
    ${typography}
  `}
`;

export default Label;
