import axios from "axios";
import { BASE_URL } from "./config";
import { House } from "./houseReducer";

export const getHouseNames = async (): Promise<string[] | null> => {
  const result = await axios.get(BASE_URL.concat('/api/houses'));

  if (result.status !== 200) {
    // toast error
    return null;
  }

  return result.data as string[];
}

export const getHouse = async (name: string): Promise<House | null> => {
  const result = await axios.get(BASE_URL.concat(`/api/houses/${name}`));

  if (result.status !== 200) {
    // toast error
    return null;
  } else if ((result.data as string).includes('No house with name')) {
    // toast error
    return null;
  }

  return result.data as House;
}
