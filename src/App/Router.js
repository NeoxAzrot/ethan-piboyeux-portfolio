import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from 'pages/Home'
import About from 'pages/About'
import AllProjects from 'pages/AllProjects'
import Contact from 'pages/Contact'
import Project1 from 'pages/Project1'
import Project2 from 'pages/Project2'
import Project3 from 'pages/Project3'
import Project4 from 'pages/Project4'
import Project5 from 'pages/Project5'
import Services from 'pages/Services'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        
        <Route exact path="/all-projects">
          <AllProjects />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/project-1">
          <Project1 />
        </Route>

        <Route exact path="/project-2">
          <Project2 />
        </Route>

        <Route exact path="/project-3">
          <Project3 />
        </Route>

        <Route exact path="/project-4">
          <Project4 />
        </Route>

        <Route exact path="/project-5">
          <Project5 />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Redirect to="/error-404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
