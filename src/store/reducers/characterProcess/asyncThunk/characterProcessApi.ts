export const getCharacterDynamicSSR = async (character_id: string) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${character_id}`,
    );
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
};
