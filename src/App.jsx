import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx"
import Hero from "./components/hero/Hero.jsx"
import Parallax from "./components/parallax/Parallax.jsx"
// import Services from "./components/services/Services.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Contact from "./components/contact/Contact.jsx"
import Cursor from "./components/cursor/Cursor.jsx"
import Skills from "./components/skills/Skills.jsx"


function App() {
    return (
        <div>
            <Cursor/>
            <section id="Homepage">
              <Navbar></Navbar>
              <Hero></Hero>
            </section>

            <section id="Skills"><Parallax type = "skills"></Parallax></section>
            <section> <Skills></Skills> </section>

            <section id="Portfolio"><Parallax type = "portfolio"></Parallax></section>
            <Portfolio></Portfolio>
            <section id="Contact"><Contact></Contact></section>
        </div>
    )
}

export default App 
