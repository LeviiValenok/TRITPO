import styled from 'styled-components';
import media from '../../style/mediaQueries'
import {PrimaryButton, SecondaryButton} from '../../common/shared/Button';
import colors from '../../style/colors';
import React from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {modalActions, selectIsModalOpen} from "../modal/modalSlice";
import {modalType} from "../modal/constants";

function AuthButtons() {
  const dispatch = useAppDispatch();


    return (
    <ButtonsWrapper>
      <SignUpButtonWrapper onClick={() =>
          dispatch(modalActions.setIsOpen({ type: modalType.SignUp, isOpen: true }))
      }>
        Sign up
      </SignUpButtonWrapper>
      <PrimaryButton onClick={() =>
        dispatch(modalActions.setIsOpen({ type: modalType.SignIn, isOpen: true }))}>
        Sign in
      </PrimaryButton>
    </ButtonsWrapper>
  )
}

const ButtonsWrapper = styled.div`
display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px 32px 12px;
  @media ${media.mqMobile} {
    padding: 16px 8px 8px;
  }
`;

const SignUpButtonWrapper = styled(SecondaryButton)`
  color: ${colors.white};
  background: ${colors.yellow};
`;


export default AuthButtons;