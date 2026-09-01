interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 sm:max-w-3xl lg:max-w-4xl ${alignClass}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-dark-deep'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? 'text-white/80' : 'text-muted'}`}>{subtitle}</p>
      )}
    </div>
  )
}
