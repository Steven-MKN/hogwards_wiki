import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Container from "../components/Container";
import Label from "../components/Label";
import { StackScreenParams } from "../navigation/StackScreenParams";
import { useStoreProvider } from "../store/StroreProvider";
import { HouseActionTypes } from "../store/houseReducer";
import { getHouseNames } from "../store/houseReducer.api";
import { HouseCard } from "../components/HouseCard";

const HousesScreen: React.FC = () => {
  const naviagtion = useNavigation<StackNavigationProp<StackScreenParams>>();
  const { houseStore, houseDispatch } = useStoreProvider();

  useEffect(() => {
    (async () => {
      const houses = await getHouseNames();
      houseDispatch({ type: HouseActionTypes.SET_HOUSE_NAMES, payload: houses ?? [] });
    })();
  }, []);

  const handleOnCardPress = (name: string) => {
    houseDispatch({ type: HouseActionTypes.SELECT_HOUSE, payload: name });
    naviagtion.navigate('HouseDetailsScreen');
  }

  return <Container>
    <Label>Houses Screen</Label>
    {houseStore.houseNames.map((it) => (
      <HouseCard key={it} houseName={it} handleOnCardPress={handleOnCardPress} />
    ))}
  </Container>
}

export default HousesScreen;
