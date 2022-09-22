import styled from "styled-components";

const DetailsBlockSC = styled("div")`
  margin: 0 10px;
  flex: 0 1 50%;
`;

const DetailsTitleSC = styled("p")`
  font-size: 20px;
  letter-spacing: 0.15px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 500;
  margin-bottom: 36px;
`;

const DetailsListSC = styled("ul")``;

const DetailsListItemSC = styled("li")`
  padding: 9px 0 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const DetailsListKeySC = styled("p")`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 10px;
`;

const DetailsListValueSC = styled("p")`
  color: ${({ theme }) => theme.colors.grayThree};
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 142%;
`;

export const useCharacterDetailsStyle = () => ({
  DetailsBlockSC,
  DetailsTitleSC,
  DetailsListSC,
  DetailsListItemSC,
  DetailsListKeySC,
  DetailsListValueSC,
});
