import React, { useEffect, useState } from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Container from '../components/Container';
import Label from '../components/Label';

export enum ToastLength {
  SHORT = 2000,
  LONG = 3500,
}

type ToastType = 'success' | 'info' | 'warn' | 'error';

type ToastContextProps = {
  makeToast: (type: ToastType, message: string, length: ToastLength) => void;
};

const ToastContext = React.createContext<ToastContextProps>({
  makeToast: () => {
    console.error('Please ensure you register the ToastProvider');
    throw new Error('Please ensure you register the ToastProvider');
  },
});

const AppToast: React.FC<{
  variant: 'success' | 'warn' | 'info' | 'error';
  text?: string;
}> = ({ text, variant }) => {
  return (
    <Container
      width={'100%'}
      px={16}
      py={24}
      backgroundColor={
        variant === 'error'
          ? 'red'
          : variant === 'warn'
            ? 'orange'
            : variant === 'success'
              ? 'green'
              : 'black'
      }
    >
      <Label
        color={variant === 'success' || variant === 'info' ? 'white' : 'black'}
        textAlign={'center'}
      >
        {text}
      </Label>
    </Container>
  );
};

export const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [toastState, setToastState] = useState<{
    message: string;
    length: ToastLength;
    show: boolean;
    type: ToastType;
  }>({
    message: '',
    length: ToastLength.SHORT,
    show: false,
    type: 'info',
  });

  const makeToast = (type: ToastType, message: string, length: ToastLength) => {
    setToastState({
      message,
      length,
      show: true,
      type: 'info',
    });
  };

  useEffect(() => {
    if (toastState.show) {
      Toast.show({
        text1: toastState.message,
        visibilityTime: toastState.length,
        type: toastState.type,
      });
    }
  }, [toastState.show]);

  const handleOnToastHide = () => {
    setToastState({
      message: '',
      length: ToastLength.SHORT,
      show: false,
      type: 'info',
    });
  };

  return (
    <Container flex={1}>
      <ToastContext.Provider
        value={{ makeToast }}
        children={children}
      />
      <Toast
        visibilityTime={toastState.length}
        position='top'
        autoHide={true}
        onHide={handleOnToastHide}
        config={{
          success: ({ text1 }) => {
            return (
              <AppToast
                variant='success'
                text={text1}
              />
            );
          },
          info: ({ text1 }) => {
            return (
              <AppToast
                variant='info'
                text={text1}
              />
            );
          },
          error: ({ text1 }) => {
            return (
              <AppToast
                variant='error'
                text={text1}
              />
            );
          },
          warn: ({ text1 }) => {
            return (
              <AppToast
                variant='warn'
                text={text1}
              />
            );
          },
        }}
      />
    </Container>
  );
};

export const useToast = () => React.useContext(ToastContext);
