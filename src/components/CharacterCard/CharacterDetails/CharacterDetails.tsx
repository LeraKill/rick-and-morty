import React, { FC } from "react";
import { useCharacterDetailsStyle } from "./style";
import { getInformation, ICharacterDetailsProps } from "./useCharacterDetails";

const CharacterDetails: FC<ICharacterDetailsProps> = ({ data, title }) => {
  const { gender, status, species, origin, type } = data;
  const infoArr = getInformation(gender, status, species, origin, type);

  return (
    <DetailsBlockSC>
      <DetailsTitleSC>{title}</DetailsTitleSC>
      <DetailsListSC>
        {infoArr &&
          infoArr.map((item, index) => (
            <DetailsListItemSC key={`${item.key}_${index}`}>
              <DetailsListKeySC>{item.key}</DetailsListKeySC>
              <DetailsListValueSC>{item.value}</DetailsListValueSC>
            </DetailsListItemSC>
          ))}
      </DetailsListSC>
    </DetailsBlockSC>
  );
};

const {
  DetailsBlockSC,
  DetailsTitleSC,
  DetailsListSC,
  DetailsListItemSC,
  DetailsListKeySC,
  DetailsListValueSC,
} = useCharacterDetailsStyle();
export default React.memo(CharacterDetails);
