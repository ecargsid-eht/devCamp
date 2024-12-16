import { Card, styled } from "tamagui";

export const StyledCard = styled(Card, {
    name:"StyledCard",
    bordered: true,
    borderWidth:0.3,
    borderColor:"$borderColor",
    gap:5,
    padding:12,
    marginVertical:5,

})