import About from 'pages/About';
import AllProjects from 'pages/AllProjects';
import Contact from 'pages/Contact';
import CreativeCV from 'pages/CreativeCV';
import CreativeCV2 from 'pages/CreativeCV2';
import Error404 from 'pages/Error404';
import Home from 'pages/Home';
import MentionsLegales from 'pages/MentionsLegales';
import Project1 from 'pages/Project1';
import Project2 from 'pages/Project2';
import Project3 from 'pages/Project3';
import Project4 from 'pages/Project4';
import Project5 from 'pages/Project5';
import Project6 from 'pages/Project6';
import Project7 from 'pages/Project7';
import Project8 from 'pages/Project8';
import Project9 from 'pages/Project9';
import Services from 'pages/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/all-projects" element={<AllProjects />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/the-punisher" element={<Project1 />} />

        <Route path="/ortole-designer-packshot" element={<Project2 />} />

        <Route path="/9-milli" element={<Project3 />} />

        <Route path="/louis-pion" element={<Project4 />} />

        <Route path="/une-vie" element={<Project5 />} />

        <Route path="/mode" element={<Project6 />} />

        <Route path="/youv-dee" element={<Project7 />} />

        <Route path="/trieste" element={<Project8 />} />

        <Route path="/kleidi" element={<Project9 />} />

        <Route path="/services" element={<Services />} />

        <Route path="/legal-notices" element={<MentionsLegales />} />

        <Route path="/creative-cv" element={<CreativeCV />} />

        <Route path="/creative-cv-2" element={<CreativeCV2 />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
