//  import { defaultEndpoint } from "@/pages/index";
// import { ICharactersProps } from "@/types/types";
// import { useEffect, useState } from "react";

// export const useCharacters = ({ characters }: ICharactersProps) => {
//   const { info, results: defaultResults = [] } = characters;
//   const [results, updateResults] = useState(defaultResults);
//   const [page, updatePage] = useState({
//     ...info,
//     current: defaultEndpoint,
//   });

//   const { current } = page;

//   useEffect(() => {
//     if (current === defaultEndpoint) return;

//     const request = async () => {
//       const res = await fetch(current);
//       const nextData = await res.json();
//       updatePage({ current, ...nextData.info });
//       if (!nextData.info?.prev) {
//         updateResults(nextData.results);
//         return;
//       }
//       updateResults((prev) => {
//         return [...prev, ...nextData.results];
//       });
//     };
//     request();
//   }, [current]);

//   function handleLoadMore() {
//     updatePage((prev) => {
//       return { ...prev, current: page?.next };
//     });
//   }
//   return {
//     results,
//     updatePage,
//     handleLoadMore,
//   };
// };
