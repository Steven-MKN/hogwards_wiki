import axios from "axios"
import { BASE_URL } from "./config"
import { Character } from "./characterReducer";

export const getCharacters = async (): Promise<Character[] | null> => {
  const result = await axios.get(BASE_URL.concat('/api/characters'));

  if (result.status !== 200) {
    // toast error
    return null;
  }

  return result.data as Character[];
}
