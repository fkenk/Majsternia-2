import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import aboutUs from './aboutUs';
import projects from './projects';
import contactForm from './contactForm';
import architecture from './architecture';
import park from './park';
import decoration from './decoration';


export default function createRootReducer() {
  return combineReducers({
    user,
    runtime,
    intl,
    aboutUs,
    projects,
    contactForm,
    architecture,
    park,
    decoration
  });
}
