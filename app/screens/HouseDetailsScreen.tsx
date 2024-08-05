import React, { useEffect } from "react";
import Container from "../components/Container";
import Label from "../components/Label";
import { useStoreProvider } from "../store/StroreProvider";
import { House } from "../store/houseReducer";
import { getHouse } from "../store/houseReducer.api";

const HouseDetailsScreen: React.FC = () => {
  const { houseStore } = useStoreProvider();
  const [house, setHouse] = React.useState<House | null>(null);

  useEffect(() => {
    if (!Boolean(houseStore.selectedHouseName)) {
      return;
    }

    (async () => {
      const house = await getHouse(houseStore.selectedHouseName || '');

      setHouse(house);
    })();
  }, [houseStore.selectedHouseName]);

  return <Container>
    <Label>{house ? 'No data at the moment' : 'Loading...'}</Label>
  </Container>
}

export default HouseDetailsScreen;
