import React from "react";

// react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Download from "../pages/Download";
import Header from "./Header";
import Contact from "../pages/Contact";
import FaqPage from "../pages/FaqPage";
import Footer from "./Footer";
import Notfound from "../pages/Notfound";
import User from "../pages/User";
import PhotoDownload from "../pages/PhotoDownload";
import VideoDownload from "../pages/VideoDownload";
import ReelDownload from "../pages/ReelDownload";
import UserProfile from "../pages/UserProfile";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-400 dark:bg-slate-900  pt-[77px]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/p/:id" element={<Download />} />
          <Route exact path="/photo-downloader/" element={<PhotoDownload />} />
          <Route exact path="/video-downloader/" element={<VideoDownload />} />
          <Route exact path="/reel-downloader/" element={<ReelDownload />} />
          <Route exact path="/user-profile/" element={<UserProfile />} />
          <Route exact path="/user/:id" element={<User />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <div className="dark:bg-slate-900 bg-slate-100">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
