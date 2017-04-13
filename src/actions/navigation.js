import {
  GO_TO,
} from '../constants';

export function goToAction(location) {
  return { type: GO_TO, location };
}
