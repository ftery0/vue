import { css } from '@emotion/css';

export const container = css`
  border-width: 1px;
  border-style: dotted;
  border-image: initial;
  border-color: #667eea;
  margin: 50px 10px 10px;
  padding: 24px;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 48em) {
    padding: 48px;
  }

  @media screen and (min-width: 30em) {
    margin-top: 100px;
  }
`;

export const login_view = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
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
`;

export const login_bottom = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const etc_div = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    display: flex;
    align-items: first baseline;
    gap: 10px;
    color: #999;
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

export const submit_button_div = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
`;

export const submit_button = css`
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 100%;
  border-radius: 0px;
  transition-property: var(--InterestExistence-transition-property-common);
  transition-duration: var(--InterestExistence-transition-duration-normal);
  width: fit-content;
  padding: 8px;
  font-family: Ranchers;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  font-stretch: normal;
  height: var(--InterestExistence-sizes-10);
  min-width: var(--InterestExistence-sizes-10);
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  color: white;
  background-color: #667eea;
  border: 1px solid transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
