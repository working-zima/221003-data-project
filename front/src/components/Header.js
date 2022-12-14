import React, { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserStateContext, DispatchContext, LoginModalContext } from "../App";

import { throttle } from "lodash";

import classes from "./Header.css";
import { ROUTE } from './route';

function Header() {
  const navigate = useNavigate();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);
  const { setShow } = useContext(LoginModalContext);

  //모달창 열림
  const handleShow = () => {
    setShow(true);
  };

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // localStorage 에 저장했던 JWT 토큰을 삭제함.
    localStorage.removeItem("LS_KEY_LOGIN");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", throttle(updateScroll, 100));
    return () => {
      window.removeEventListener("scroll", throttle(updateScroll, 100));
    };
  }, []);
  
  return (
    <header className={scrollPosition < 25 ? "header" : "header-opacity"}>
      <div className="logo">
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to={ ROUTE.MAIN.link }
        >
          So Bike
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to={ ROUTE.INTRODUCE.link }
            >
              서비스 소개
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to={ ROUTE.SEARCH.link }
            >
              대여소 검색
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to={ ROUTE.REVIEW.link }
            >
              게시판
            </NavLink>
          </li>
          {isLogin ? (
            <>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to={ ROUTE.MYPAGE.link }
                >
                  내정보
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  onClick={logout}
                >
                  로그아웃
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  onClick={handleShow}
                >
                  로그인
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to={ ROUTE.REGISTER.link }
                >
                  회원가입
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
