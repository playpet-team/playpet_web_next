import { css } from '@emotion/core';

const space = 8;

const margin = (value: number) => css`
    margin: ${space * value}px;
  `;

const marginTop = (value: number) => css`
    margin-top: ${space * value}px;
  `;

const marginBottom = (value: number) => css`
    margin-bottom: ${space * value}px;
  `;

const marginLeft = (value: number) => css`
    margin-left: ${space * value}px;
  `;

const marginRight = (value: number) => css`
    margin-right: ${space * value}px;
  `;

const marginX = (value: number) => css`
    margin-left: ${space * value}px;
    margin-right: ${space * value}px;
  `;

const marginY = (value: number) => css`
    margin-top: ${space * value}px;
    margin-bottom: ${space * value}px;
  `;

const padding = (value: number) => css`
    padding: ${space * value}px;
  `;

const paddingTop = (value: number) => css`
    padding-top: ${space * value}px;
  `;

const paddingBottom = (value: number) => css`
    padding-bottom: ${space * value}px;
  `;

const paddingLeft = (value: number) => css`
    padding-left: ${space * value}px;
  `;

const paddingRight = (value: number) => css`
    padding-right: ${space * value}px;
  `;

const paddingX = (value: number) => css`
    padding-left: ${space * value}px;
    padding-right: ${space * value}px;
  `;

const paddingY = (value: number) => css`
    padding-top: ${space * value}px;
    padding-bottom: ${space * value}px;
  `;

const spacing = {
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
};

export default spacing;
