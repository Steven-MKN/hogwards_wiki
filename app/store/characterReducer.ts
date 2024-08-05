export type Character = {
  id: string,
  name: string,
  alternate_names: string[],
  species: string,
  gender: string,
  house: string,
  dateOfBirth: string,
  yearOfBirth: number,
  wizard: boolean,
  ancestry: string,
  eyeColour: string,
  hairColour: string,
  wand: Wand,
  patronus: string,
  hogwartsStudent: boolean,
  hogwartsStaff: boolean,
  actor: string,
  alternate_actors: string[],
  alive: boolean,
  image: string,
}

export type Wand = {
  wood: string,
  core: string,
  length: number
}

export type CharacterState = {
  characters: Character[],
  selectedCharacterId: string | null,
}

export enum CharacterActionTypes {
  SET_CHARACTERS = 'SET_CHARACTERS',
  SELECT_CHARACTER = 'SELECT_CHARACTER',
}

export interface CharacterReducerGenericAction {
  payload: Partial<Character>;
  type: CharacterActionTypes;
}

export const characterReducer = (
  state: CharacterState,
  action: CharacterReducerGenericAction,
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload as Character[] ?? [],
      };
    case CharacterActionTypes.SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacterId: action.payload.id ?? null,
      };
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
};

export const initialCharacterState: CharacterState = {
  characters: [],
  selectedCharacterId: null,
}
