// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure
} from '../actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    try {
      search(action.payload).then(result =>
        store.dispatch(getSearchSuccess(result))
      );
    } catch (error) {
      store.dispatch(getSearchFailure(error));
    }
  }
  next(action);
};
