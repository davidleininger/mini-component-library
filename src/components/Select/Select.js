import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
      </NativeSelect>
      <Presentation>{displayedValue} <IconWrapper id="chevron-down" strokeWidth="2" size="24" /></Presentation>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const NativeSelect = styled.select`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
const Presentation = styled.div`
  align-items: center;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  display: flex;
  padding: 12px 16px;
  /* adjust padding right for icon */
  padding-right: 10px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus + & {
    box-shadow: 0 0 0 2px ${COLORS.primary};
  }
`;
const IconWrapper = styled(Icon)`
  margin-left: 18px;
`

export default Select;
