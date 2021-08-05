import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderThickness: 1,
    fontSize: `${14/16}rem`,
    iconSize: 16,
    height: `${24/16}rem`,
  },
  large: {
    borderThickness: 2,
    fontSize: `${18/16}rem`,
    iconSize: 24,
    height: `${36/16}rem`,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  return <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputIcon size={styles.iconSize} id={icon} strokeWidth="2" />
    <TextInput style={{
      '--borderThickness': styles.borderThickness + 'px',
      '--fontSize': styles.fontSize,
      '--height': styles.height,
      '--width': width + 'px',
    }} {...delegated} type="text" />
  </Wrapper>;
};

const Wrapper = styled.label`
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;
const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  height: var(--height);
  line-height: 1;
  padding-left: var(--height);
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 3px;
  }
`;
const InputIcon = styled(Icon)`
  bottom: 0;
  margin: auto 0;
  position: absolute;
  top: 0;
`

export default IconInput;
