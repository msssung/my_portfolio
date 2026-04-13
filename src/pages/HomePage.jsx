import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
  {
    title: "소개",
    description: "정보통신공학과 데이터사이언스SW를 전공하는 학생입니다.",
  },
  {
    title: "프로젝트",
    description: "React와 Python을 활용한 프로젝트들입니다.",
  },
  {
    title: "연락처",
    description: "kms_0109@naver.com으로 연락주시면 빠르게 답변드립니다.",
  },
  {
    title: "기술 스택",
    description: "AI/ML 관련 내용을 학습하고 있습니다.",
  },
];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
