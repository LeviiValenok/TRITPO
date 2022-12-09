import styled from 'styled-components';
import colors from '../../style/colors';
import React, {useEffect} from "react";
import {PrimaryButton} from "../../common/shared/Button";
import {authActions, selectIsLoggedIn} from "../auth/authSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {profileActions, selectRating} from "../profile/profileSlice";

function DashboardPage () {
    const dispatch = useAppDispatch();
    const rating = useAppSelector(selectRating);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(profileActions.getRatingRequest());
        } else {
            dispatch(profileActions.setRating(5));
        }
    }, [isLoggedIn]);
    return (
        <div>
        <DashboardHeader>
            Maps are coming soon!
        </DashboardHeader>
        <ProfileWrapper>
            <div>User Profile</div>
            <div>Rating: {rating}</div>
        </ProfileWrapper>
            <ButtonWrapper>
            <PrimaryButton onClick={() => dispatch(authActions.logout())}>Log out</PrimaryButton>
            </ButtonWrapper>
        </div>
    );
}

const DashboardHeader = styled.div`
  color: ${colors.white};
  font-size: 44px;
  text-align: center;
  display: block;
  background-color: ${colors.orange};
  width: 100%;
  padding: 30px 0 30px 0;
  
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

const ProfileWrapper = styled.div`
  color: ${colors.orange};
  font-size: 30px;
  display: block;
  text-align: center;
  
`;
export default DashboardPage;