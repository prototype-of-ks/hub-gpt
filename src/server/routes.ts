import handlers from './handlers';
import { join } from 'path';
import { Route } from './types';

const apiRoot = '/api/v1';

const buildApiPath = (path: string) => join(apiRoot, path);

export const routes: Route[] = [
  {
    path: buildApiPath('/createCompletion'),
    method: 'get',
    handler: handlers.GptHandler,
  }
];
