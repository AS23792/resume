import { RefObject } from 'react'

interface NavBarProps {
  sections: { id: string; label: string; ref: RefObject<HTMLElement | null> }[]
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void
  activeSection: string
}

const NavBar: React.FC<NavBarProps> = ({
  sections,
  scrollToSection,
  activeSection,
}) => {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={section.id === activeSection ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(section.ref)
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
