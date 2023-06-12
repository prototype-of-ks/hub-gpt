import { Configuration, OpenAIApi } from 'openai';
import { NextFunction, Request, Response } from 'express';
import CONFIG from '../../../../local.env.json';
import { GPTHandlerRequestQuery } from '../../types';

const parseRequestQuery = (req: Request) => {
  const query = req.query;
};

const setup = () => {
  const configuration = new Configuration({
    apiKey: CONFIG.OPENAI_API_PROXY_KEY,
    basePath: CONFIG.OPENAI_API_PROXY,
  });
  
  const openai = new OpenAIApi(configuration);

  return {
    openai,
    configuration,
  };
};

async function handler(req: Request, res: Response, next: NextFunction) {
  try {
    const { openai } = setup();
    const { model, prompt } = req.query as GPTHandlerRequestQuery;
  
    const openaiResponse = await openai.createCompletion({
      model: model || 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 50,
    });

    res.status(200).send(openaiResponse.data);
  } catch (e) {
    res.json({
      status: 'failure',
      message: JSON.stringify(e),
    });
  } finally {
    next();
  }
}

export default handler;