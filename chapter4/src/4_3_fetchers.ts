export const fetchProfile = async () => {
  const response = await fetch('https://api.github.com/users/octocat')
  const data = await response.json()
  return data
}
