import React, {useEffect} from 'react';

import colors from '../style/colors';
import history from './history';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import Modals from "../feature/modal/Modals";
import styled from "styled-components";
import DashboardPage from "../feature/dashboard/DashboardPage";
import DebugPage from "../feature/debug/DebugPage";
import WelcomePage from "../feature/WelcomePage/WelcomePage";
import {selectIsLoggedIn} from "../feature/auth/authSlice";
import {useAppSelector} from "./hooks";


function App() {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    useEffect(() => {
        const initialHeight = window.innerHeight;
        const updateViewport = () => {
            const metaViewport = document.querySelector('meta[name=viewport]');
            if (metaViewport) {
                if (window.innerHeight < initialHeight) {
                    // case when keyboard appears for Android devices and shrinks the height
                    // we set viewport height to initial height
                    metaViewport.setAttribute('content', `height=${initialHeight}, width=device-width, initial-scale=1.0`);
                } else {
                    metaViewport.setAttribute(
                        'content',
                        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                    );
                }
            }
        };
        window.addEventListener('resize', updateViewport);

        return function cleanup() {
            window.removeEventListener('resize', updateViewport);
        };
    }, []);

    return (
        <HistoryRouter history={history}>
            <MainPageWrapper>
                <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/" element={<WelcomePage/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/debug" element={<DebugPage />} />
                </Routes>

                <Modals />
            </MainPageWrapper>
        </HistoryRouter>
    );
}

const MainPageWrapper = styled.span`
  background: ${colors.turquoise};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
 ;
  
`;

export default App;
