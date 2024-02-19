import { SPRITES_URL } from "./CONSTANTS";

export const extractId = (url) => {
  const split = url.split("/");
  const id = split[split.length - 2];

  return `${SPRITES_URL}${id}.png`;
};
