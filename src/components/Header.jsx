import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { LogoContainer, LogoImage, Headers, NavLinks } from "../css/HeaderCss";

export default function Header() {
  const { userInfo, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <LogoContainer>
      <LogoImage
        alt="LikeLiarimage"
        src="img/LikeLiarnn.png"
        onClick={() => navigate("/")}
      />
      <Headers>
        <h1>
          {userInfo !== null ? (
            <NavLinks onClick={logout}>로그아웃</NavLinks>
          ) : (
            <>
              <NavLinks onClick={() => navigate("/login")}>
                회원가입/로그인
              </NavLinks>
            </>
          )}

          <NavLinks onClick={() => navigate("/ranking")}>랭킹</NavLinks>
          <NavLinks onClick={() => navigate("/mypage")}>마이페이지</NavLinks>
        </h1>
      </Headers>
    </LogoContainer>
  );
}
