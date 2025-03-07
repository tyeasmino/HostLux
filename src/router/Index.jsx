import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
