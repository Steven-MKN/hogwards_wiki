import React from "react";
import { Character } from "../store/characterReducer";
import Container from "./Container";
import Label from "./Label";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CharacterCard: React.FC<{ character: Character, handleOnCardPress: (id: string) => void }> = ({ character, handleOnCardPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => handleOnCardPress(character.id)}>
        <Container>
          <Label>{character.name}</Label>
          <Label>{character.species}</Label>
          <Label>{character.house}</Label>
          <Label>{`${character.alive}`}</Label>
          <Label>{character.image}</Label>
        </Container>
      </TouchableOpacity>
    </Container>
  )
}