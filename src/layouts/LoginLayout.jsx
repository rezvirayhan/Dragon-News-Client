import React from 'react';
import { Outlet } from 'react-router-dom';
import NavagationBar from '../pages/Shared/NavagatinBar/NavagationBar';

const LoginLayout = () => {
    return (
        <div>
            <NavagationBar></NavagationBar>
            <Outlet></Outlet>

        </div>
    );
};

export default LoginLayout;