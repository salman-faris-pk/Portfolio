import React, { memo } from "react"

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeadingComponent = ({ 
  children, 
  className = "" 
}: SectionHeadingProps) => (
  <h2 className={`text-3xl font-medium capitalize mb-6 md:mb-8 text-center ${className}`}>
    {children}
  </h2>
)

export const SectionHeading = memo(SectionHeadingComponent)
export default SectionHeading