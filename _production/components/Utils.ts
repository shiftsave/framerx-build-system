import { css } from 'emotion';

type UtilsMarginProps = {
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
};

type UtilsPaddingProps = {
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
};

type UtilsProps = UtilsMarginProps & UtilsPaddingProps;

export const Utils = {
  margin: (props: UtilsProps) => css`
    margin-top: ${props.mt ? `${props.mt}px` : '0'};
    margin-right: ${props.mr ? `${props.mr}px` : '0'};
    margin-bottom: ${props.mb ? `${props.mb}px` : '0'};
    margin-left: ${props.ml ? `${props.ml}px` : '0'};
  `,

  padding: (props: UtilsProps) => css`
    padding-top: ${props.pt ? `${props.pt}px` : '0'};
    padding-right: ${props.pr ? `${props.pr}px` : '0'};
    padding-bottom: ${props.pb ? `${props.pb}px` : '0'};
    padding-left: ${props.pl ? `${props.pl}px` : '0'};
  `
};
