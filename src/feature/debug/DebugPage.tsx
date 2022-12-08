import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';

const MODE = import.meta.env.MODE;
const BASE_URL = import.meta.env.BASE_URL;
const IS_PROD = import.meta.env.PROD;
const IS_DEV = import.meta.env.DEV;

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_API_DOMAIN;
const ENV_FILE = import.meta.env.VITE_ENV_FILE;

function DebugPage() {
  return (
    <Page>
      <h3>Vite variables</h3>
      <ul>
        <li>Vite Mode: {MODE}</li>
        <li>Base url: {BASE_URL}</li>
        <li>Is Prod: {IS_PROD ? 'Yes' : 'No'}</li>
        <li>Is Dev: {IS_DEV ? 'Yes' : 'No'}</li>
      </ul>
      <h3>App variables</h3>
      <ul>
        <li>Env file: {ENV_FILE}</li>
        <li>Auth domain: {AUTH_DOMAIN}</li>
      </ul>
    </Page>
  );
}

const Page = styled.div`
  color: ${colors.white};
  font-family: 'Helvetica', sans-serif;
  padding: 30px;
`;
export default DebugPage;
