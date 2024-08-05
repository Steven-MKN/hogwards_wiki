export type House = any; // TODO: House endpoint returns characters

export type HouseState = {
  houseNames: string[],
  selectedHouseName: string | null,
}

export enum HouseActionTypes {
  SET_HOUSE_NAMES = 'SET_HOUSE_NAMES',
  SELECT_HOUSE = 'SELECT_HOUSE',
}

export interface HouseReducerGenericAction {
  payload: string[] | string;
  type: HouseActionTypes;
}

export const houseReducer = (
  state: HouseState,
  action: HouseReducerGenericAction,
): HouseState => {
  switch (action.type) {
    case HouseActionTypes.SET_HOUSE_NAMES:
      return {
        ...state,
        houseNames: action.payload as string[] ?? [],
      };
    case HouseActionTypes.SELECT_HOUSE:
      return {
        ...state,
        selectedHouseName: action.payload as string,
      };
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
};

export const initialHouseState: HouseState = {
  houseNames: [],
  selectedHouseName: null,
}
