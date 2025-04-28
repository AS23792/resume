import { forwardRef } from 'react'
import Section from '../components/Section'
import { CheckCircle } from 'lucide-react' // 使用 lucide-react 的图标库，超好看！

const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id="skills" ref={ref} backgroundColor="#f0f4f8">
      <div className="skills-wrapper">
        <h1 className="title">专业技能</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <CheckCircle className="icon" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
    .skills-wrapper {
        width: 1000px;
      padding-top: 2rem; /* 控制整个区域的上边距 */
    }
    .title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 5rem;
      color: #2d3436;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* 卡片更宽 */
      gap: 2rem; /* 卡片间距稍大一点更舒服 */
      padding: 0 2rem;
    }
    .skill-card {
      background: white;
      border-radius: 1rem;
      padding: 2rem; /* 卡片内部也更宽敞一点 */
      display: flex;
      align-items: center;
      gap: 1.5rem;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .skill-card:hover {
      transform: translateY(-5px);
    }
    .icon {
      color: #0984e3;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
    }
    p {
      margin: auto 20px;
      font-size: 1.1rem;
      color: #636e72;
    }
  `}</style>
    </Section>
  )
})

const skills = [
  '熟悉 HTML、CSS、JavaScript，了解 TypeScript',
  '熟悉 Vue、React 框架及其生态，包括 Vuex/Redux、Vue Router/React Router 等',
  '熟练使用 Element UI、View UI、Ant Design 等 UI 组件库及 Echart 绘图工具',
  '了解 Node.js、Java 等服务端技术，熟悉前后端交互流程，熟练使用 Axios 网络请求库',
  '熟悉 Git 版本控制工具，了解 Webpack、Vite 等前端构建工具',
  '熟悉计算机网络和浏览器工作原理，常见数据结构及算法基础知识',
]

export default Skills
