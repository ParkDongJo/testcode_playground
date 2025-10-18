import { describe, it, vi, expect } from 'vitest'
import { inputFactory, mockPostMyArticle } from './4_6_mock_func'
import { postMyArticle } from './4_6_fetcher';
import { HttpError } from './4_6_validate';

describe('API 모킹하기', () => {
  it('유효성 검사에 성공하면, 성공 응답 반환한다.', async () => {
    expect.assertions(2);
    const input = inputFactory();
    const mock = mockPostMyArticle(input);

    const data = await postMyArticle(input);

    expect(data).toMatchObject({ id: '1', ...input });
    expect(mock).toHaveBeenCalledWith(input);
  })

  it('유효성 검사에 실패하면, 에러 반환한다.', async () => {
    expect.assertions(2);
    const input = inputFactory({ title: '', content: '' });
    const mock = mockPostMyArticle(input);

    await postMyArticle(input).catch((error) => {
      expect(error).toMatchObject(new HttpError(400, 'Bad Request', { message: 'Validation Error' }));
      expect(mock).toHaveBeenCalledWith(input);
    });
  })
})
