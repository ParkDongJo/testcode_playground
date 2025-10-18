import { vi } from "vitest"
import * as Fetchers from './4_6_fetcher'
import { HttpError, validLength } from './4_6_validate'

interface ArticleInput {
  title: string
  content: string
}

interface ArticleOutput {
  id: string
  title: string
  content: string
}

export const inputFactory = (input: Partial<ArticleInput> = {}): ArticleInput => {
  return {
    title: 'Test Title',
    content: 'Test Content',
    ...input,
  }
}

export const mockPostMyArticle = (input: ArticleInput, status: number = 200) => {
  if (status > 299) {
    return vi
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValue(
        new HttpError(status, 'Internal Server Error', { message: 'HTTP Error' })
      );
  }
  try {
    validLength(input.title)
    validLength(input.content)
    return vi
      .spyOn(Fetchers, 'postMyArticle')
      .mockResolvedValue({ id: '1', ...input });
  } catch (error) {
    return vi
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValue(
        new HttpError(400, 'Bad Request', { message: 'Validation Error' })
      );
  }
}