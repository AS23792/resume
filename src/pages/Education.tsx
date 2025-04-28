import { forwardRef } from 'react'
import Section from '../components/Section'

const Education = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id="education" ref={ref} backgroundColor="#e8ecef">
      <h1>教育背景</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-date">2019 - 2023</span>
          <div className="timeline-content">
            <h2>成都信息工程大学 🎓</h2>
            <p>软件工程专业，本科毕业，GPA 3.69/5.00（专业前5%）。</p>
            <p>获得国家励志奖学金、校优秀毕业生等奖项。</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">2023 - 2026</span>
          <div className="timeline-content">
            <h2>重庆邮电大学 📚</h2>
            <p>攻读软件工程硕士，研究方向是变分自编码器、云模型。</p>
            <p>荣获第十九届“挑战杯”特等奖、第十五届“蓝桥杯”省一等奖等。</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">未来 🚀</span>
          <div className="timeline-content">
            <h2>奔向更大的舞台</h2>
            <p>web前端开发，用技术点亮世界！</p>
          </div>
        </div>
      </div>
      <style>{`
      h1{
      margin-right:100px}
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid #ccc;
        }
        .timeline-date {
          font-weight: bold;
          color: #ff5722;
          margin-bottom: 0.5rem;
          display: block;
        }
        .timeline-content h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }
        .timeline-content p {
          margin: 0.5rem 0 0;
          color: #666;
        }
      `}</style>
    </Section>
  )
})

export default Education
