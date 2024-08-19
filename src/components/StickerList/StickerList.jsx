import styled from "styled-components";
import Sticker from "../Sticker/Sticker";

const List = styled.ul`
  display: flex;
  padding-top: 20px;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const StickerList = ({ updateText, data }) => {
  return (
    <List onClick={updateText}>
      {data.map((sticker) => (
        <Sticker
          key={sticker.id}
          id={sticker.id}
          url={sticker.img}
          alt={sticker.label}
        />
      ))}
    </List>
  );
};

export default StickerList;
