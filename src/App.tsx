import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CommitsPage} from "./pages/CommitsPage";
import {LayoutComponent} from "./components/Layout";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="commits" element={<LayoutComponent/>}>
                    <Route index element={<CommitsPage/>}/>
                    <Route path=":repository" element={<CommitsPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App;
