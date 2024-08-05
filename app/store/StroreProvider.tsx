import React, { useReducer } from 'react';
import {
  characterReducer,
  CharacterReducerGenericAction,
  CharacterState,
  initialCharacterState,
} from '../store/characterReducer';
import { houseReducer, HouseReducerGenericAction, HouseState, initialHouseState } from './houseReducer';

type StoreProviderContextType = {
  characterStore: CharacterState;
  characterDispatch: React.Dispatch<CharacterReducerGenericAction>;
  houseStore: HouseState;
  houseDispatch: React.Dispatch<HouseReducerGenericAction>;
};

const StoreProviderContext = React.createContext<StoreProviderContextType>({
  characterStore: initialCharacterState,
  characterDispatch: () => {
    throw new Error('Please ensure you register the StoreProvider');
  },
  houseStore: initialHouseState,
  houseDispatch: () => {
    throw new Error('Please ensure you register the StoreProvider');
  },
});

export const StoreProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [characterState, characterDispatch] = useReducer(characterReducer, initialCharacterState);
  const [houseState, houseDispatch] = useReducer(houseReducer, initialHouseState);

  return (
    <StoreProviderContext.Provider
      value={{
        characterStore: characterState,
        characterDispatch: characterDispatch,
        houseStore: houseState,
        houseDispatch: houseDispatch,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};

export const useStoreProvider = () => React.useContext(StoreProviderContext);
