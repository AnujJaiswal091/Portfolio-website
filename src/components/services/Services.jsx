import { useRef } from "react"
import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
  initial:{
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,

    transition:{
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}



const services = () => {

  const ref = useRef();

  const isInVeiw = useInView(ref,{margin:"-100px"}) 
  
    return (
        <motion.div className="services" variants={variants} initial="initial" ref = {ref} animate = {isInVeiw && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    "I design, build and 
                    <br/>
                    make it <b>awesome!</b>"
                </p>
                <hr/>
            </motion.div>
            
            <motion.div className="titleContainer" variants={variants}>
              <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                  <b>Unique</b> ideas
                </h1>
              </div>
              <div className="title">
                <h1>
                  <b>For Your</b> Business
                </h1>
                <button>WHAT WE DO?</button>
              </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
              <motion.div className="box"   >
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iure rerum veniam incidunt dicta vel,
                  odio consectetur accusantium debitis possimus velit natus perferendis reprehenderit aspernatur. Velit provident
                  reprehenderit quos quidem!
                </p> 
                <button>Go</button>
                </motion.div>
              <motion.div className="box"  >
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iure rerum veniam incidunt dicta vel,
                  odio consectetur accusantium debitis possimus velit natus perferendis reprehenderit aspernatur. Velit provident
                  reprehenderit quos quidem!
                </p> 
                <button>Go</button>
                </motion.div>
              <motion.div className="box"  >
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iure rerum veniam incidunt dicta vel,
                  odio consectetur accusantium debitis possimus velit natus perferendis reprehenderit aspernatur. Velit provident
                  reprehenderit quos quidem!
                </p> 
                <button>Go</button>
                </motion.div>
              <motion.div className="box"  >
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iure rerum veniam incidunt dicta vel,
                  odio consectetur accusantium debitis possimus velit natus perferendis reprehenderit aspernatur. Velit provident
                  reprehenderit quos quidem!
                </p> 
                <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default services
