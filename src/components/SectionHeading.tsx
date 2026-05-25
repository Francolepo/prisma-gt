type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-5 muted-copy">{description}</p>
    </div>
  )
}
