export type AllRoutes = "/";

export interface ICharactersProps {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: object | null;
  };
  results: {
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
  }[];
}

export interface ICharacterModel {
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
}
