interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function Button({ 
  children = 'Button', 
  onClick, 
  disabled = false, 
  type = 'button',
  className 
}: ButtonProps): React.JSX.Element {
  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}