import { SPRITES_URL } from "./CONSTANTS";

export const extractId = (url) => {
  const split = url.split("/");
  const id = split[split.length - 2];

  return `${SPRITES_URL}${id}.png`;
};

export const capitalize = (move) => {
  return move
    .split("-")
    .map((word) => {
      const first = word[0].toUpperCase();

      return first + word.slice(1);
    })
    .join(" ");
};

export const filterSprites = (obj) => {
  const entries = Object.entries(obj);

  const sprites = entries.filter(([name, value]) => {
    if (typeof value === "string") {
      return { name, value };
    }

    return null;
  }, []);

  return sprites;
};
