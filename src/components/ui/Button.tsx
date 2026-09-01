import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outlineDark' | 'ghost'
type Size = 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-dark-deep hover:-translate-y-0.5',
  outlineDark: 'border-2 border-dark-deep/20 text-dark-deep hover:border-primary hover:text-primary hover:-translate-y-0.5',
  ghost: 'text-primary hover:text-primary-dark',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (props.as === 'a') {
    const { as: _as, ...anchorProps } = props
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
