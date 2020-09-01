export const mediaQuery = (maxWidth: string) => `@media (max-width: ${maxWidth}px)`;

export const point = {
    xxlarge: '1920',
    xlarge: '1440',
    large: '1200',
    medium: '1024',
    small: '768',
    xsmall: '375',
}
export default {
  xxlarge: mediaQuery(point.xxlarge),
  xlarge: mediaQuery(point.xlarge),
  large: mediaQuery(point.large),
  medium: mediaQuery(point.medium),
  small: mediaQuery(point.small),
  xsmall: mediaQuery(point.xsmall),
  custom: mediaQuery,
};
