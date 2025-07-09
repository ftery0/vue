import { css } from "@emotion/css";

export const sidebar = css`
  z-index: 101;
  transform: translateX(-100vw);
  background-color: var(--InterestExistence-colors-brand-background);
  border-right-color: var(--InterestExistence-colors-brand-highlight);
  width: var(--InterestExistence-sizes-full);
  position: fixed;
  height: 100vh;
  overflow-y: hidden;
  .logo_box {
    display: flex;
    height: 5rem;
    align-items: center;
    margin-inline-start: var(--chakra-space-8);
    margin-inline-end: var(--chakra-space-8);
    margin-bottom: 12px;
    justify-content: space-between;
    a {
      transition-property: var(--chakra-transition-property-common);
      transition-duration: var(--chakra-transition-duration-fast);
      transition-timing-function: var(--chakra-transition-easing-ease-out);
      cursor: pointer;
      text-decoration: none;
      outline: transparent solid 2px;
      outline-offset: 2px;
      border: 0px solid transparent;
      position: relative;
      color: var(--chakra-colors-brand-logoColor);
    }
  }

  @media screen and (min-width: 80em) {
    & {
      transform: none;
      width: 315px;
    }
  }
`;
