import styled from 'styled-components';
import React from 'react';
import colors from '../../style/colors';
import AuthButtons from "./AuthButtons";

function AppHeader() {
  return (
    <TitleWrapper>
      DinoTaxi
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  display: flex;
  font-size: 72px;
  line-height: 160%;
  justify-content: center;
  border: none;
  font-weight: 800;
  margin-top: 100px;
`;

export default AppHeader;