import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset-default.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_CLIEN_ID, AUTH0_DOMAIN } from '@consts/secrets';
import { App } from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const authorizationParams = { redirect_uri: window.location.origin };

root.render(
    <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIEN_ID}
        authorizationParams={authorizationParams}
    >
        <App />
    </Auth0Provider>
);
