import {motion} from "framer-motion";
import {Link} from "react-scroll";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};

const Links = () => {
    const items = ["Homepage", "Skills", "Portfolio", "Contact", "About"];

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.div
                    key={item}
                    variants={itemVariants}
                    whileHover={{
                    scale: 1.1
                }}
                    whileTap={{
                    scale: 0.95
                }}>
                    <Link
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={200}
                        offset={-70}
                    >
                        {item}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Links;
