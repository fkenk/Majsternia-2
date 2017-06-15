import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import aboutUs from './aboutUs';
import projects from './projects';

export default function createRootReducer() {
  return combineReducers({
    user,
    runtime,
    intl,
    aboutUs,
    projects
  });
}
