import { css } from '@emotion/css';

export const layout = css`
  display: flex;
  @media (max-width: 1280px) {
   flex-direction: column;
  }
`;

export const content = css`  
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
