import { Request, Response, NextFunction, RequestHandler } from 'express';
import { CreateChatCompletionRequest } from 'openai';

export type Middleware = (request: Request, response: Response, next: NextFunction) => any;

export interface Route {
  path: string;
  handler: RequestHandler;
}

export interface GPTHandlerRequestQuery {
  model?: string;
  prompt?: string;
}