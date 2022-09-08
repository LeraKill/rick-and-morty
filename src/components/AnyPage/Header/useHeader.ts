import { AllRoutes } from "@/types/types";

interface IHeaderMenuArray {
  id: number;
  category: string;
  href: AllRoutes;
}

export const HeaderMenuArray: IHeaderMenuArray[] = [
  {
    id: 1,
    category: "Characters",
    href: "/",
  },
  {
    id: 2,
    category: "Locations",
    href: "/",
  },
  {
    id: 3,
    category: "Episodes",
    href: "/",
  },
];
