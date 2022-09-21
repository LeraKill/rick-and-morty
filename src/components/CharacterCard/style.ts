import styled from "styled-components";

const CardContainerSC = styled("div")`
  width: 100%;
  max-width: 934px;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

const CardContentSC = styled("div")`
  margin-bottom: 36px;
`;

const CardCharacterSC = styled("div")`
  margin-bottom: 42px;
`;

const CharacterImgBlockSC = styled("div")`
  margin: 0 auto 16px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
`;

const CharacterImgSC = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const CharacterNameSC = styled("h3")`
  font-weight: 400;
  font-size: 48px;
  text-align: center;
`;

const CardDetailsSC = styled("div")`
  display: flex;
  margin: 0 -10px;
`;

const GoBackSC = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
`;

const GoBackSvgSC = styled("div")`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const GoBackLinkSC = styled("a")`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition: all 0.3s ease 0s;
`;

export const useCharacterCardStyle = () => ({
  CardContainerSC,
  CardContentSC,
  CardCharacterSC,
  CharacterImgBlockSC,
  CharacterImgSC,
  CharacterNameSC,
  CardDetailsSC,
  GoBackSC,
  GoBackLinkSC,
  GoBackSvgSC,
});
