import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";
import Container from "../components/Container";
import Label from "../components/Label";
import { StackScreenParams } from "../navigation/StackScreenParams";
import { CharacterActionTypes } from "../store/characterReducer";
import { getCharacters } from "../store/characterReducer.api";
import { useStoreProvider } from "../store/StroreProvider";

const CharactersScreen: React.FC = () => {
  const naviagtion = useNavigation<StackNavigationProp<StackScreenParams>>();
  const { characterStore, characterDispatch } = useStoreProvider();

  useEffect(() => {
    (async () => {
      const characters = await getCharacters();
      console.log(characters);
      characterDispatch({ type: CharacterActionTypes.SET_CHARACTERS, payload: characters ?? [] });
    })();
  }, []);

  const handleOnCardPress = (id: string) => {
    characterDispatch({ type: CharacterActionTypes.SELECT_CHARACTER, payload: { id } });
    naviagtion.navigate('CharacterDetailsScreen');
  }

  return <Container>
    <Label>Characters Screen</Label>
    {characterStore.characters.map((character) => (
      <CharacterCard key={character.id} character={character} handleOnCardPress={handleOnCardPress} />
    ))}
  </Container>
}

export default CharactersScreen;
