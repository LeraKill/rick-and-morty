import styled from "styled-components";

const CharactersContainerSC = styled("section")`
  margin: 0 0 44px 0;
`;
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
  transition: box-shadow 0.3s ease 0s;
  &:hover {
    box-shadow: 0px 2px 4px 0 ${({ theme }) => theme.colors.green},
      0px 3px 4px 0px ${({ theme }) => theme.colors.green},
      0px 1px 5px 0px ${({ theme }) => theme.colors.green};
  }
`;

const CharactersImgBlockSC = styled("div")`
  position: relative;
  width: 100%;
  height: 168px;
  overflow: hidden;
`;
const CharactersImgSC = styled("img")`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
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

const CharactersBtn = styled("button")`
  display: block;
  width: 154px;
  margin: 34px auto 0;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  transition: background-color 0.3s ease 0s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlueTwo};
  }
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
  CharactersBtn,
});
