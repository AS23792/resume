import { forwardRef } from 'react'
import Section from '../components/Section'
import { Code2 } from 'lucide-react'

const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id="projects" ref={ref} backgroundColor="#eef2f7">
      <div className="projects-wrapper">
        <h1 className="title">项目经历</h1>
        <div className="projects-grid">
          {/* 第一个项目 */}
          <div className="project-card">
            <Code2 className="icon" />
            <h2>高校人才队伍智能服务平台</h2>
            <p className="period">2023年7月 — 2027年12月</p>
            <p className="description">
              项目以“数启服务，智引发展”为目标，在教师能力画像基础上，建设“评价+预测+推荐”为主线的人才队伍智能服务平台。
            </p>
            <div className="tech-stack">
              技术栈：React, React Router, Zustand, Axios, Ant Design, ECharts,
              TypeScript, Vite
            </div>
            <ul className="duties">
              <li>
                使用 ECharts 进行教师画像，懒加载+节流处理图表渲染卡顿问题。
              </li>
              <li>实现 Excel 导入导出，支持切片上传与断点续传。</li>
              <li>构建基于 RBAC 的权限控制系统。</li>
              <li>动态表格渲染优化，科研能力支持拖拽排序。</li>
              <li>国际化与主题动态切换，增强用户体验。</li>
              <li>采用 Prettier、ESLint、Commitizen 等进行规范化开发。</li>
            </ul>
          </div>

          {/* 第二个项目 */}
          <div className="project-card">
            <Code2 className="icon" />
            <h2>四川盆地气溶胶与云凝结核科研平台</h2>
            <p className="period">2023年02月 — 2023年08月</p>
            <p className="description">
              平台展示四川盆地气溶胶吸湿特性与云凝结核参数化研究成果，涵盖经济损失评估、健康影响分析、地图可视化与资讯聚合，服务科研用户与行业专家。
            </p>
            <div className="tech-stack">
              技术栈：Vue, Vue Router, Element-plus, Axios, Sass, Webpack,
              百度地图 API
            </div>
            <ul className="duties">
              <li>
                多页面结构与导航管理，利用 keep-alive 实现缓存避免重复加载。
              </li>
              <li>
                基于百度地图 API
                渲染超额死亡经济损失空间分布图，提升数据直观性。
              </li>
              <li>
                搭建后台管理系统，支持富文本编辑器，图片预览与非法标签处理。
              </li>
              <li>保障富文本数据安全性，增强系统稳定性与扩展性。</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
.projects-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ 横向居中 */
}

.title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2d3436;
}

    .projects-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 0 2rem;
    }
    .project-card {
      background: #fff;
      border-radius: 1.5rem;
      padding: 2rem;
      width: 100%;
      max-width: 600px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
      position: relative;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }
    .icon {
      color: #0984e3;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 30px;
      height: 30px;
    }
    h2 {
      margin-top: 0;
      color: #34495e;
    }
    .period {
      color: #636e72;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 1rem;
      color: #555;
      margin-bottom: 1rem;
    }
    .tech-stack {
      font-size: 0.9rem;
      color: #0984e3;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .duties {
      list-style: disc inside;
      padding-left: 1rem;
      color: #666;
      font-size: 0.95rem;
    }
    .duties li {
      margin-bottom: 0.5rem;
    }
  `}</style>
    </Section>
  )
})

export default Projects
