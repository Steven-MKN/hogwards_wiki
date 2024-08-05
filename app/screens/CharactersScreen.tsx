import React, { useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";
import Container from "../components/Container";
import Label from "../components/Label";
import { CharacterActionTypes } from "../store/characterReducer";
import { getCharacters } from "../store/characterReducer.api";
import { useStoreProvider } from "../store/StroreProvider";

const CharactersScreen: React.FC = () => {
  const { characterStore, characterDispatch } = useStoreProvider();
  useEffect(() => {
    (async () => {
      const characters = await getCharacters();
      console.log(characters);
      characterDispatch({ type: CharacterActionTypes.SET_CHARACTERS, payload: characters ?? [] });
    })();
  }, []);

  return <Container>
    <Label>Characters Screen</Label>
    {characterStore.characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </Container>
}

export default CharactersScreen;
