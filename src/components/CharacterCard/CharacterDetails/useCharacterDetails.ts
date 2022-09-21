export interface ICharacterDetailsProps {
  data: {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: { name: string; url: string };
    name: string;
    origin: { name: string; url: string };
    species: string;
    status: string;
    type: string;
    url: string;
  };
  title: string;
}

export const getInformation = (
  gender: string,
  status: string,
  specie: string,
  origin: { name: string; url: string },
  type: string,
): { key: string; value: string }[] => {
  const informationArr = [
    { key: "Gender", value: gender },
    { key: "Status", value: status },
    { key: "Specie", value: specie },
    { key: "Origin", value: origin.name },
    { key: "Type", value: (type = "unknown") },
  ];
  return informationArr;
};
