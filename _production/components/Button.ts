import styled from 'react-emotion';
import { INK, LILAC, PAPER } from '../constants/colors';

interface Props {
  primary?: string;
  link?: string;
}

export const Button = styled('button')`
align-items: center;
background: ${(props: Props) =>
    props.primary ? LILAC : "transparent"};
color: ${(props: Props) =>
  props.primary ? PAPER : INK};
`;
