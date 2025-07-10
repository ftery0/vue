import { css } from '@emotion/css';

export const sidebar = css`
  z-index: 101;
  background-color: var(--InterestExistence-colors-brand-background);
  border-right: 1px solid var(--InterestExistence-colors-brand-highlight);
  width: 315px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
  overflow-y: auto;

  .logo_box {
    display: flex;
    height: 5rem;
    align-items: center;
    padding: 0 1.5rem;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .sidebar_box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1.5rem;
    
    a{
      text-decoration: none;  
    }
    p{
      color: black;
  
    }
  }

  /* 모바일 초기 상태 - 숨겨짐 */
  &.sidebar-mobile {
    transform: translateX(-100%);
  }

  /* 모바일에서 열렸을 때 */
  &.sidebar-mobile.sidebar-open {
    transform: translateX(0);
  }

  /* 데스크탑 */
  @media screen and (min-width: 80em) {
    & {
      transform: none !important;
    }
  }
`;
