import styled from "styled-components";

const CharactersContainerSC = styled("section")``;
const CharactersContentSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
`;
const CharactersItemSC = styled("div")`
  width: 240px;
  cursor: pointer;
  margin: 0 8px 24px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
`;

const CharactersImgBlockSC = styled("div")`
  position: relative;
  width: 100%;
  height: 168px;
  overflow: hidden;
`;
const CharactersImgSC = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
`;
const CharactersInfoSC = styled("div")`
  padding: 12px 16px;
`;
const CharactersNameSC = styled("h4")`
  font-size: 20px;
  letter-spacing: 0.15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 10px;
`;
const CharactersTypeSC = styled("p")`
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

export const useCharactersStyle = () => ({
  CharactersContainerSC,
  CharactersContentSC,
  CharactersItemSC,
  CharactersImgBlockSC,
  CharactersImgSC,
  CharactersInfoSC,
  CharactersNameSC,
  CharactersTypeSC,
});
