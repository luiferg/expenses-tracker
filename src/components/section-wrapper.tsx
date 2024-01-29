interface SectionWrapperProps {
  id: string
  ariaLabel?: string
  className?: string
  children: React.ReactNode
}

const SectionWrapper = ({
  id,
  ariaLabel,
  className,
  children,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel || id}
      className={`${className} p-4 max-w-screen-xl w-full rounded-lg`}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
