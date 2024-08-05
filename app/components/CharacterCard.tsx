import React from "react";
import { Character } from "../store/characterReducer";
import Container from "./Container";
import Label from "./Label";

export const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <Container>
      <Label>{character.name}</Label>
      <Label>{character.species}</Label>
      <Label>{character.house}</Label>
      <Label>{`${character.alive}`}</Label>
      <Label>{character.image}</Label>
    </Container>
  )
}