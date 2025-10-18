import { fetchProfile } from './4_3_fetchers'

export const great = (name: string) => {
  return `Hello, ${name}!`
}

export const sayGoodBye = () => {
  throw new Error('Not implemented');
}

export const getUser = async() => {
  const date = await fetchProfile();
  return `${date.id} - ${date.email}`
}