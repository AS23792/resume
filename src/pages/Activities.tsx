import { forwardRef } from 'react'
import Section from '../components/Section'

const Activities = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      id="activities"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>社团活动</h1>
        <ul>
          <li>[社团名称] - [角色/活动描述]，[起止时间]</li>
          <li>[社团名称] - [角色/活动描述]，[起止时间]</li>
        </ul>
      </div>
    </Section>
  )
})

export default Activities
