import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from '../constants';

export function openDrawerAction() {
  return { type: OPEN_DRAWER };
}

export function closeDrawerAction() {
  return { type: CLOSE_DRAWER };
}
