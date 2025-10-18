export interface ArticleInput {
  title: string
  content: string
}

export const postMyArticle = async (input: ArticleInput) => {
  const response = await fetch('https://api.github.com/users/octocat', {
    method: 'POST',
    body: JSON.stringify(input),
  })
  const data = await response.json()
  return data
}
