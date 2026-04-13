import React from "react";
import ProjectCard from "../components/ProjectCard";


/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
  {
    title: "AI 기반 기사 모니터링 서비스",
    description: "AI를 활용하여 실시간으로 뉴스 기사를 수집 및 분석하는 자동화 모니터링 서비스",
  },
  {
    title: "AI 기반 쿠버네티스 환경 모니터링 시스템",
    description: "AI를 적용하여 쿠버네티스 클러스터의 이상 징후를 탐지하고 자동으로 알림을 제공하는 시스템",
  },
  {
    title: "MLOps 프로젝트",
    description: "머신러닝 모델의 학습, 배포, 모니터링을 자동화한 MLOps 파이프라인 구축 프로젝트",
  },
];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
