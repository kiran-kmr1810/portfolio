import React from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function Path() {
    return (
        <div>
        <Router> 
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/contact" component = {Contact} />
                <Route path="/about" component = {About} />
                <Route path="/projects" component = {Projects} />
                <Route path="/skills" component = {Skills} />
            </Switch>
        </Router>
        </div>
    )
}

export default Path
