import axios from 'axios';
import { AnswerResponse, QuestionType } from './types';

const axiosClient = axios.create({
  baseURL: `https://cross-platform.rp.devfactory.com`,
});


export async function getQuestionData(signal?: AbortSignal): Promise<QuestionType> {
    return (await axiosClient.get('/for_you', {signal: signal})).data
}

export async function getQuestionAnswer(
  questionId: number,
  signal?: AbortSignal,
): Promise<AnswerResponse> {
  return (
    await axiosClient.get('/reveal', {
      signal: signal,
      params: {
        id: questionId,
      },
    })
  ).data;
}
