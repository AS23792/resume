import { useRef, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import About from './pages/About' // 已修正拼写
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Activities from './pages/Activities'
import './style.css'

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = [
    { id: 'about', label: '关于我', ref: useRef<HTMLElement | null>(null) },
    {
      id: 'education',
      label: '教育背景',
      ref: useRef<HTMLElement | null>(null),
    },
    { id: 'skills', label: '专业技能', ref: useRef<HTMLElement | null>(null) },
    {
      id: 'projects',
      label: '项目经历',
      ref: useRef<HTMLElement | null>(null),
    },
    {
      id: 'activities',
      label: '社团活动',
      ref: useRef<HTMLElement | null>(null),
    },
  ]

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 使用 IntersectionObserver 监听可见 section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // 当 section 50% 可见时触发
    )

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current)
        }
      })
    }
  }, [sections])

  return (
    <div>
      <NavBar
        sections={sections}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main>
        <About ref={sections[0].ref} />
        <Education ref={sections[1].ref} />
        <Skills ref={sections[2].ref} />
        <Projects ref={sections[3].ref} />
        <Activities ref={sections[4].ref} />
      </main>
    </div>
  )
}

export default App
