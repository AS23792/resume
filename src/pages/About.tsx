import { forwardRef } from 'react'
import Section from '../components/Section'

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      id="about"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #a960ee 0%, #ff8a00 100%)', // 渐变背景
      }}
    >
      <div className="about-container">
        <h1 className="threeD">关于我</h1>
        <div className="about-content">
          <div className="row">
            <span>
              <strong>姓名：</strong>程倩
            </span>
            <span>
              <strong>电话：</strong>157-6067-9415
            </span>
            <span>
              <strong>邮箱：</strong>3154782128@qq.com
            </span>
          </div>
          <div className="row">
            <span>
              <strong>政治面貌：</strong>党员
            </span>
            <span>
              <strong>当前状态：</strong>在校生
            </span>
            <span>
              <strong>求职意向：</strong>Web前端
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          font-size: 4rem;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-weight: bold;
          position: relative;
          animation: lightEffect 3s infinite alternate;
          text-transform: uppercase;
          display: inline-block;
          perspective: 1000px;
        }
        @keyframes lightEffect {
          0% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4);
            transform: rotateY(20deg) rotateX(10deg);
          }
          100% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.9),
              0 0 60px rgba(255, 255, 255, 0.7),
              0 0 120px rgba(255, 255, 255, 0.5);
            transform: rotateY(0deg) rotateX(0deg);
          }
        }
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-size: 1.2rem;
          color: #34495e;
        }
        .row {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .row span {
          min-width: 250px;
          text-align: center;
        }
        .threeD {
          font-size: 80px;
          font-weight: 800;
          text-shadow: 1px 0px rgb(235, 118, 218), 1px 2px rgb(196, 132, 230), 3px 1px rgb(154, 75, 137),
            2px 3px rgb(184, 106, 208), 4px 2px rgb(157, 48, 130), 4px 4px rgb(134, 29, 94), 5px 3px rgb(154, 75, 137),
            5px 5px rgb(184, 106, 208), 7px 4px rgb(157, 48, 130), 6px 6px  rgb(134, 29, 94), 8px 5px rgb(154, 75, 137),
            7px 7px rgb(184, 106, 208), 9px 6px rgb(157, 48, 130), 9px 8px  rgb(134, 29, 94), 11px 7px rgb(154, 75, 137);
        }
      `}</style>
    </Section>
  )
})

export default About
