import React, { ReactNode, forwardRef } from 'react'

interface SectionProps {
  children: ReactNode
  id: string
  backgroundColor?: string
  style?: React.CSSProperties // 添加 style 属性
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      style={{ ...props.style, backgroundColor: props.backgroundColor }} // 合并 backgroundColor 和传入的 style
    >
      {props.children}
    </section>
  )
})

export default Section
