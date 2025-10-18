export class HttpError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data: any
  ) {
    super(`HTTP Error: ${status} ${statusText}`)
    this.name = 'HttpError'
    this.data = data
  }
}

export class ValidationError extends Error {}

export const validLength = (value: string) => {
  if (value.length === 0) {
    throw new ValidationError('Value must be longer than 3 characters')
  }
}
