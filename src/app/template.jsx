'use client';

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Navbar from './Navbar';

const Template = ({ children }) => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [])

    return (
        <div>
            <Navbar />
            {children}</div>
    )
}

export default Template;