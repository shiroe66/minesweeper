import { IData } from '../interfaces/data.interface';

export const difficult: Record<string, IData> = {
  easy: {
    col: 8,
    row: 8,
    mines: 8,
  },
  medium: {
    col: 16,
    row: 16,
    mines: 40,
  },
  hard: {
    col: 16,
    row: 32,
    mines: 100,
  },
};
