import React from "react";
import doraImage from "../assets/dora.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={doraImage} alt="프로필" />
      <div className="profile-info">
        <h3>김민성</h3>
        <p>안녕하세요! 저는 MLOps와 AI 엔지니어링에 관심이 많은 학생입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 