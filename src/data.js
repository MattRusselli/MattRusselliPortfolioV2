// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
  FaNodeJs,
  FaVuejs
} from 'react-icons/fa'

import {
  SiJavascript,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiMaterialui
} from 'react-icons/si'

// Projects Images (add your images to the images directory and import below)
import Poke from './images/poke.png'
import TTT from './images/ttt.png'
import RPS from './images/rps.png'
import Workout from './images/workout.png'
import Coach from './images/coach.png'

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from './images/hero-light.jpg'
import HeroDark from './images/hero-dark.jpg'
// If you change the import names above then you need to change the export names below
export { HeroLight as Light }
export { HeroDark as Dark }

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = 'MattRusselli'

// Blog link icon (imported above)
export const Blog = <FaLink />

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  'I enjoy learning about anything in tech, honing my skills with MERN/PERN full stack applications and helping others when I can. This site was built with React, Bootstrap, Redux, and the GitHub REST API.'

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: 'HTML5'
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: 'CSS3'
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: 'JavaScript'
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: 'React'
  },
  {
    id: 5,
    skill: <FaVuejs className="display-4" />,
    name: 'VueJs'
  },
  {
    id: 6,
    skill: <FaPython className="display-4" />,
    name: 'Python'
  },
  {
    id: 7,
    skill: <SiDjango className="display-4" />,
    name: 'Django'
  },
  {
    id: 8,
    skill: <FaNodeJs className="display-4" />,
    name: 'Node'
  },
  {
    id: 9,
    skill: <SiMongodb className="display-4" />,
    name: 'MongoDb'
  },
  {
    id: 10,
    skill: <SiPostgresql className="display-4" />,
    name: 'PostgreSQL'
  },
  {
    id: 11,
    skill: <SiExpress className="display-4" />,
    name: 'Express'
  },
  {
    id: 12,
    skill: <FaGitAlt className="display-4" />,
    name: 'Git'
  },
  {
    id: 13,
    skill: <FaGithubSquare className="display-4" />,
    name: 'GitHub'
  },
  {
    id: 14,
    skill: <FaBootstrap className="display-4" />,
    name: 'BootStrap'
  },
  {
    id: 15,
    skill: <SiMaterialui className="display-4" />,
    name: 'Material UI'
  }
]

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  'https://docs.google.com/document/d/e/2PACX-1vSexGrDVVQt_vpQmJuKYAWQQvC0Xe2Tcsm8sxWUjcqYpBbUAfBeXd30luq_JWyF2c10UXIskKQhj1j6/pub'

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  'National-Pokedex',
  'Exercise-Database-App',
  'Vue_Rock_Paper_Scissors',
  'Vanilla_JS_Tic-Tac-Toe',
  'Coachs_Corner_Client'
]

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: 'National-Pokedex',
    image: Poke
  },
  {
    name: 'Exercise-Database-App',
    image: Workout
  },
  {
    name: 'Vue_Rock_Paper_Scissors',
    image: RPS
  },
  {
    name: 'Vanilla_JS_Tic-Tac-Toe',
    image: TTT
  },
  {
    name: 'Coachs_Corner_Client',
    image: Coach
  }
]

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = 'https://formspree.io/f/xoqbeqbw'
