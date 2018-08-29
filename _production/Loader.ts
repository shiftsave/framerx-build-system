import styled from 'react-emotion';
import { BaseLoader } from '../elements/Loader';
import { LILAC } from '../constants/colors';

interface StyledLoaderProps {
  center: boolean;
  fullPage?: boolean;
}

export const Loader = styled(BaseLoader)`
  svg {
    align-items: center;
    animation: rotate 1400ms linear infinite;
    display: ${(props: StyledLoaderProps) =>
      props.center ? 'flex' : 'inline-block'};
    fill: none;
    height: ${(props: StyledLoaderProps) => props.fullPage && '100vh'};
    justify-content: ${(props: StyledLoaderProps) => props.center && 'center'};
    stroke: ${LILAC};
    stroke-width: 6px;
    text-align: center;
    width: ${(props: StyledLoaderProps) => props.center && '100%'};
  }

  .loaderPath {
    animation: dash 1400ms linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -30px;
    }

    100% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -124px;
    }
  }
`;
