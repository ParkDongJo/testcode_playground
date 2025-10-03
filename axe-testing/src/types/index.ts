// Global type definitions

export interface User {
  id: string
  name: string
  email: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export type Theme = 'light' | 'dark'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}
