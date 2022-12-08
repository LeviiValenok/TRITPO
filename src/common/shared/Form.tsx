import styled from 'styled-components';

import colors from '../../style/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ErrorMessage = styled.p`
  align-self: center;
  color: ${colors.guardsmanRed};
`;
