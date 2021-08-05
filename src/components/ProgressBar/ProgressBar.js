/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--height': 8 + 'px',
    '--padding': 0 + 'px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--height': 12 + 'px',
    '--padding': 0 + 'px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 16 + 'px',
    '--padding': 4 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return <Wrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={styles}
  >
    <VisuallyHidden>{value} %</VisuallyHidden>
    <BarWrapper>
      <Bar
        value={value}
        size={size}
        style={{
          '--height': styles.height,
          '--width': value + '%',
        }}
      />
    </BarWrapper>
  </Wrapper>;
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`
const BarWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  /* trim off corners when bar is near full */
  overflow: hidden;
  width: 100%;
`
const Bar = styled.div`
  background: ${COLORS.primary};
  color: white;
  height: var(--height);
  transition: width 0.2s ease-in;
  width: var(--width);
`

export default ProgressBar;
