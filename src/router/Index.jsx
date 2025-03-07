import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../pages/HomePage'; 
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import RegisterPage from '../pages/RegisterPage';

export const Index = () => {
    return (
        <BrowserRouter>
            <CustomCursor />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
