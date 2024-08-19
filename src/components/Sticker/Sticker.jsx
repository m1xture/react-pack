import styled from "styled-components";

const Item = styled.li`
  background-color: #edb5b5;
  border-radius: 20px;
  overflow: hidden;
  padding: 10px;
`;

const Sticker = ({ id, url, alt }) => {
  return (
    <Item id={id}>
      <img src={url} alt={alt} />
    </Item>
  );
};

export default Sticker;
