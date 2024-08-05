import React, { useReducer } from 'react';
import {
  characterReducer,
  CharacterReducerGenericAction,
  CharacterState,
  initialCharacterState,
} from '../store/characterReducer';

type StoreProviderContextType = {
  characterStore: CharacterState;
  characterDispatch: React.Dispatch<CharacterReducerGenericAction>;
};

const StoreProviderContext = React.createContext<StoreProviderContextType>({
  characterStore: initialCharacterState,
  characterDispatch: () => {
    throw new Error('Please ensure you register the StoreProvider');
  },
});

export const StoreProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [characterState, characterDispatch] = useReducer(characterReducer, initialCharacterState);

  return (
    <StoreProviderContext.Provider
      value={{
        characterStore: characterState,
        characterDispatch: characterDispatch,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};

export const useStoreProvider = () => React.useContext(StoreProviderContext);
