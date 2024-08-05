import React from "react";
import Container from "../components/Container";
import Label from "../components/Label";
import { useStoreProvider } from "../store/StroreProvider";

const CharacterDetailsScreen: React.FC = () => {
  const { characterStore } = useStoreProvider();

  return <Container>
    <Label>{characterStore.selectedCharacterId ?? 'No character selected'}</Label>
  </Container>
}

export default CharacterDetailsScreen;
