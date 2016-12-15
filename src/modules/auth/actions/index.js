import { createAction } from 'redux-actions';

export const modulePrefix = 'modules/auth';

export const put = createAction(`${modulePrefix}:put`);
export const reset = createAction(`${modulePrefix}:reset`);
