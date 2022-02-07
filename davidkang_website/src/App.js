import React from 'react'
import About from './components/about/About'
import Intro from './components/intro/Intro'
import ProjectList from "./components/projectList/ProjectList"
import Toggle from './components/toggle/Toggle'

const App = () => {
  return (
    <div>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
    </div>
  )
}

export default App