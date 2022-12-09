import AppHeader from "../Header/AppHeader";
import styled from "styled-components";
import colors from "../../style/colors";
import taxi from '../../assets/icons/taxi.svg';
import AuthButtons from "../Header/AuthButtons";
import React from "react";
import {useAppSelector} from "../../app/hooks";
import {selectIsLoggedIn} from "../auth/authSlice";

function WelcomePage () {

    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    return (
        <MainPageWrapper>
            <AppHeader/>
            {!isLoggedIn && <AuthButtons/>}
            <Taxi src={taxi}/>
        </MainPageWrapper>
    )
};

const MainPageWrapper = styled.span`
  background: ${colors.turquoise};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
`;

const Taxi = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 300px;
  
`;

export default WelcomePage;