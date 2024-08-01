import React from 'react';
import Container from './Container';
import Space from './Space';
import { Button } from 'react-native-paper';

const ButtonArray: React.FC<{
  children?: (typeof Button)[];
}> = ({ children }) => {
  return (
    <Container>
      {children?.map((child, index) => {
        return (
          <>
            {child}
            <Space
              key={index}
              height={1}
            />
          </>
        );
      })}
    </Container>
  );
};

export default ButtonArray;
