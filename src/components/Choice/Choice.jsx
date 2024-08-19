import styled from "styled-components";

const Text = styled.p`
  color: #f1abab;
  font-size: 48px;
  font-family: "Verdana";
  display: block;
  text-align: center;
  margin-top: 40px;
`;

const Choice = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Choice;
