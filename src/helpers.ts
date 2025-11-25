import { decode } from 'html-entities';

export const unescape = (str = '') => {
  if (!str || !str.includes('&')) {
    return str;
  }

  return decode(str);
};

export const joinBase = (path: string, base?: string) => {
  if (!base) {
    return path;
  }

  try {
    return new URL(path, base).href;
  } catch {
    return path;
  }
};
