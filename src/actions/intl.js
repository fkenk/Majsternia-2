/* eslint-disable import/prefer-default-export */

import {
  SET_LOCALE_START,
  SET_LOCALE_SUCCESS,
  SET_LOCALE_ERROR,
} from '../constants';

import queryIntl from './intl.graphql';

export function setLocale({ locale }) {
  return async (dispatch, getState, { client, history }) => {
   /* dispatch({
      type: SET_LOCALE_START,
      payload: {
        locale,
      },
    });

    try {
      dispatch({
        type: SET_LOCALE_SUCCESS,
        payload: {
          locale
        },
      });

      // remember locale for every new request
      if (process.env.BROWSER) {
        const maxAge = 3650 * 24 * 3600; // 10 years in seconds
        document.cookie = `lang=${locale};path=/;max-age=${maxAge}`;
        history.push(`?lang=${locale}`);
      }
    } catch (error) {
      dispatch({
        type: SET_LOCALE_ERROR,
        payload: {
          locale,
          error,
        },
      });
      return false;
    }
*/
    return true;
  };
}
