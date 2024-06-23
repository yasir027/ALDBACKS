import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import SubFooter from "./components/SubFooter/SubFooter";
import Home from "./pages/Home1.jsx"; // Ensure Home1.jsx is correctly imported
import IndexPage from "./pages/IndexPage";
import JudgesProfile from "./pages/JudgesProfile";
import Pad from "./pages/PadPage";
import CaseInfoPage from "./pages/CaseInfoPage";
import ArticleResults from "./pages/ArticleResult.jsx";
import Statutes from "./pages/Statutes.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignUp from "./pages/SignupPage.jsx";
import CaseFinder from "./pages/CaseFinder.jsx";
import Login from "./pages/LoginPage.jsx";
import FAQ from "./pages/FAQ.jsx";
import JudgeRead from "./pages/JudgeRead.jsx";  
import ArticleRead from "./pages/ArticleRead.jsx";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="Content">
                <Routes>
                    {/* Set the default route to Home */}
                    <Route path="/" element={<Home />} />
                    <Route path="/index" element={<IndexPage />} />
                    <Route path="/caseinfo" element={<CaseInfoPage />} />
                    <Route path="/judges-profile" element={<JudgesProfile />} />
                    <Route path="/pad" element={<Pad />} />
                    <Route path="/articles" element={<ArticleResults />} />
                    <Route path="/judge-read/:fileName" element={<JudgeRead />} />
                    <Route path="/article-read/:fileName" element={<ArticleRead />} />
                    <Route path="/statutes" element={<Statutes />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/casefinder" element={<CaseFinder />} />
                    <Route path="/signup" element={<SignUp />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
            <SubFooter />
        </div>
    );
};

export default App;
