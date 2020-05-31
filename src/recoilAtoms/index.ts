import { atom } from 'recoil';

export const counterStateKey = 'counterState';
export const counterState = atom({
  key: counterStateKey,
  default: 0,
});
