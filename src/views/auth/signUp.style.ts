import { css } from '@emotion/css';

export const main = css`
  // main 스타일이 필요한 경우 추가
`;

export const sign_container = css`
  border: 1px dotted #667eea;
  padding: 48px;
  width: 100%;
  max-width: 400px;
  margin: 50px 10px;

  @media screen and (min-width: 48em) {
    padding: 48px;
  }

  @media screen and (min-width: 30em) {
    margin-top: 100px;
  }
`;

export const signup_view = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const input_box = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const form_control = css`
  width: 100%;
  position: relative;

  input:focus {
    border-color: #667eea;
  }

  input:hover {
    border-color: #667eea;
  }

  input {
    width: 100%;
    height: 30px;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: var(--InterestExistence-transition-property-common);
    transition-duration: var(--InterestExistence-transition-duration-normal);
    font-weight: var(--InterestExistence-fontWeights-normal);
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: var(--InterestExistence-colors-brand-main);
    line-height: 100%;
    --input-font-size: var(--InterestExistence-fontSizes-md);
    --input-padding: var(--InterestExistence-space-4);
    --input-border-radius: var(--InterestExistence-radii-md);
    --input-height: var(--InterestExistence-sizes-10);
    background: inherit;
    color: var(--InterestExistence-colors-brand-main);
    font-size: 16px;
  }

  input:focus {
    border-color: #667eea;
  }
`;

export const signup_bottom = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-family: Arial, Helvetica, sans-serif;
    gap: 10px;
    color: #999;
  }
`;

export const submit_button_div = css`
  display: flex;
  justify-content: flex-start;
`;

export const submit_button = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-family: Ranchers;
  font-size: 13.5px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
  background-color: #667eea;
  border: 1px solid transparent;
  cursor: pointer;
  width: fit-content;
  min-width: var(--InterestExistence-sizes-10);
  height: var(--InterestExistence-sizes-10);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const etc_sign_button = css`
  transition-property: var(--InterestExistence-transition-property-common);
  transition-duration: var(--InterestExistence-transition-duration-fast);
  transition-timing-function: var(
    --InterestExistence-transition-easing-ease-out
  );
  cursor: pointer;
  text-decoration: none;
  outline: transparent solid 2px;
  outline-offset: 2px;
  color: inherit;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-color: inherit;
  font-family: var(--InterestExistence-fonts-brand-arialNarrowBold);
  font-size: 13.5px;
  font-weight: var(--InterestExistence-fontWeights-bold);
  line-height: 110%;
  text-transform: uppercase;
`;
