import { TouchableOpacity } from "react-native"
import Container from "./Container"
import Label from "./Label"
import React from "react"

export const HouseCard: React.FC<{ houseName: string, handleOnCardPress: (houseName: string) => void }> = ({ houseName, handleOnCardPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => handleOnCardPress(houseName)}>
        <Container>
          <Label>{houseName}</Label>
        </Container>
      </TouchableOpacity>
    </Container>
  )
}