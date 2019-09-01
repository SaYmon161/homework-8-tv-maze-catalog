// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { getShowRequest, getShowSuccess, getShowFailure } from '../actions';
import { show } from '../api';

export const showMiddleware = store => next => action => {
  console.log(1);

  if (action.type === getShowRequest.toString()) {
    try {
      show(action.payload).then(result =>
        store.dispatch(getShowSuccess(result))
      );
    } catch (error) {
      store.dispatch(getShowFailure(error));
    }
  }
  next(action);
};
