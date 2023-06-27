import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? "green.600" : score > 60 ? "yellow.600" : "";

  return (
    <Badge backgroundColor={color} fontSize={"14px"} paddingInline={2} borderRadius={'5px'}>{score}</Badge>
  )
}

export default CriticScore