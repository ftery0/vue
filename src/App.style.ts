import { css } from '@emotion/css';

export const layout = css`
  display: flex;
  @media (max-width: 1280px) {
   flex-direction: column;
  }
`;

export const content = css`  
  flex: 1;
  margin-left: 315px;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
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
