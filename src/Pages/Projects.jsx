import {
  Box,
  Image,
  Heading,
  Link,
  Text,
  Flex,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { TbBrandSocketIo, TbBrandNextjs, TbJson } from "react-icons/tb";
import { SiExpress, SiRedux, SiRazorpay, SiStyledcomponents, SiTailwindcss, SiChakraui, SiJavascript, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaGithub, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiFolder, BiCopy, BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import React, { useEffect } from "react";
import AOS from "aos";

// Import your project images
import bb from '../Assets/Projects/bb.png';
import onfli from '../Assets/Projects/onfli.png';
import mikkushepo from '../Assets/Projects/mikkushepo.png';
import Salesway from '../Assets/Projects/SalesWay.png';
import Instaclone from "../Assets/Projects/Insta.png";
import Hebron from "../Assets/Projects/Hebron.png";
import ShopliquImage from "../Assets/Projects/Shoplique.png";
import TaskManagement from "../Assets/Projects/TaskManagement.png";
import Stock from "../Assets/Projects/Stock.png";

// Project data array for better maintainability
const projectsData = [
  {
    id: 1,
    title: "Shoplique",
    description: "A full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to offer users a smooth, secure, and responsive online shopping experience. Features user authentication, product browsing, real-time cart updates, and Razorpay payment integration.",
    image: ShopliquImage,
    githubLink: "https://github.com/Jitugandhare/Shoplique",
    deployedLink: "https://shoplique.onrender.com",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: FaNodeJs, name: "Node.js", color: "green" },
      { icon: SiRedux, name: "Redux", color: "#7d32a8" },
      { icon: SiMongodb, name: "MongoDB", color: "green" },
      { icon: SiExpress, name: "Express", color: "green" },
      { icon: SiRazorpay, name: "Razorpay", color: "blue" },
      { icon: FaCss3Alt, name: "CSS3", color: "#264de4" }
    ]
  },
  {
    id: 2,
    title: "Task Management",
    description: "A full-featured task management web application built with the MERN stack and Tailwind CSS. Users can register as User or Admin with role-based access control and comprehensive task management capabilities.",
    image: TaskManagement,
    githubLink: "https://github.com/Jitugandhare/Task-management",
    deployedLink: "https://task-management-2-imev.onrender.com/",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: FaNodeJs, name: "Node.js", color: "green" },
      { icon: SiRedux, name: "Redux", color: "#7d32a8" },
      { icon: SiMongodb, name: "MongoDB", color: "green" },
      { icon: SiExpress, name: "Express", color: "green" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" }
    ]
  },
  {
    id: 3,
    title: "Insta-Fista",
    description: "An Instagram clone built with the MERN stack and Redux for state management, featuring a modern UI. Users can create profiles, post images, comment, like posts, follow/unfollow others, and enjoy real-time chat using socket.io.",
    image: Instaclone,
    githubLink: "https://github.com/Jitugandhare/Insta",
    deployedLink: "https://new-jfuz.onrender.com",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: FaNodeJs, name: "Node.js", color: "green" },
      { icon: SiRedux, name: "Redux", color: "#7d32a8" },
      { icon: SiMongodb, name: "MongoDB", color: "green" },
      { icon: SiExpress, name: "Express", color: "green" },
      { icon: TbBrandSocketIo, name: "Socket.io", color: "green" },
      { icon: BiLogoTailwindCss, name: "Tailwind", color: "#2e6ff2" }
    ]
  },
  {
    id: 4,
    title: "HEBRON NUTRITION: A Health & Wellness",
    description: "A modern and user-friendly web application designed to promote health and wellness by offering personalized nutrition advice, health tips, and product recommendations. Built with React.js and styled-components.",
    image: Hebron,
    githubLink: "https://github.com/Jitugandhare/ammplicom",
    deployedLink: "https://landing-page-lake-eight-56.vercel.app/",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: SiRedux, name: "Redux", color: "#7d32a8" },
      { icon: SiStyledcomponents, name: "Styled-Components", color: "#2e6ff2" }
    ]
  },
  {
    id: 5,
    title: "Stock Ticker Web Application",
    description: "A web application that allows users to subscribe to and view detailed stock trading information. The app features real-time updates for stock prices and other relevant financial data.",
    image: Stock,
    githubLink: "https://github.com/Jitugandhare/Stock-subscription",
    deployedLink: "https://stock-subscription.vercel.app/",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: FaNodeJs, name: "Node.js", color: "green" },
      { icon: TbBrandNextjs, name: "Next.js", color: "black" },
      { icon: SiMongodb, name: "MongoDB", color: "green" },
      { icon: FaCss3Alt, name: "CSS3", color: "#2e6ff2" }
    ]
  },
  {
    id: 6,
    title: "Salesway Dashboard",
    description: "Developed a user-friendly navigation system using React, ensuring seamless access to various dashboard sections. Designed a performance scoring system to visualize user sales performance, encouraging competitive improvement.",
    image: Salesway,
    githubLink: "https://github.com/Jitugandhare/ut/tree/main/new-asssign/ut-assignment",
    deployedLink: "https://ut-assignment.vercel.app/",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: SiChakraui, name: "Chakra UI", color: "#3fc3bd" },
      { icon: BiLogoTailwindCss, name: "Tailwind", color: "#2e6ff2" }
    ]
  },
  {
    id: 7,
    title: "OnFlick",
    description: "Elevate online shopping with our React-based e-commerce project, featuring a sleek design and seamless functionality. Enjoy intuitive navigation, real-time updates, and secure transactions for a modern shopping experience.",
    image: onfli,
    githubLink: "https://github.com/Jitugandhare/desisive-duck",
    deployedLink: "https://desisive-duck.vercel.app/",
    techStack: [
      { icon: FaReact, name: "React", color: "#3fc3bd" },
      { icon: SiChakraui, name: "Chakra UI", color: "#3fc3bd" },
      { icon: TbJson, name: "JSON", color: "#2e6ff2" }
    ]
  },
  {
    id: 8,
    title: "Boat & Bait",
    description: "A modern e-commerce platform for buying and exploring exquisite baby clothes. Features user-friendly interface, wide range of products, landing page, footer, authentication functionality, and payment integration.",
    image: bb,
    githubLink: "https://github.com/Jitugandhare/-gutsy-sheet-7629",
    deployedLink: "https://frolicking-bubblegum-e45b74.netlify.app/",
    techStack: [
      { icon: FaHtml5, name: "HTML5", color: "coral" },
      { icon: FaCss3Alt, name: "CSS3", color: "blue" },
      { icon: IoLogoJavascript, name: "JavaScript", color: "#FDD835" },
      { icon: TbJson, name: "JSON", color: "#2e6ff2" }
    ]
  },
  {
    id: 9,
    title: "Mikkushepora",
    description: "Experience Sephora's essence in our HTML, CSS, and JS clone. Enjoy sleek design, seamless navigation, and dynamic features for a user-friendly showcase of products and content. Includes login/signup functionalities and landing page.",
    image: mikkushepo,
    githubLink: "https://github.com/Jitugandhare/knowledgeable-breath-5856-",
    deployedLink: "https://roaring-hotteok-b61a42.netlify.app/",
    techStack: [
      { icon: FaHtml5, name: "HTML5", color: "coral" },
      { icon: FaCss3Alt, name: "CSS3", color: "blue" },
      { icon: IoLogoJavascript, name: "JavaScript", color: "#FDD835" }
    ]
  }
];

// Component for individual project card
export const ProjectCard = ({ project }) => {
  return (
    <Box
      data-aos="fade-up"
      _hover={{ bg: "#301f5f", borderColor: "#0ef" }}
      borderRadius="15px"
      p="25px"
      border="2px solid #18112C"
      className="project-card"
      transition="all 0.3s ease"
      bg="#1a1a2e"
    >
      <Flex
        gap="20px"
        direction={{ base: "column", lg: "row" }}
        align="stretch"
      >
        {/* Content Section */}
        <Box flex="1" display="flex" flexDirection="column">
          <Flex justifyContent="space-between" mb="15px">
            <BiFolder style={{ fontSize: "35px", color: "#388E3C" }} />
            <Flex gap="10px">
              <Link
                href={project.githubLink}
                className="project-github-link"
                isExternal
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.2s"
              >
                <FaGithub style={{ fontSize: "30px", color: "white" }} />
              </Link>
              <Link
                href={project.deployedLink}
                className="project-deployed-link"
                isExternal
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.2s"
              >
                <BiCopy style={{ fontSize: "30px", color: "white" }} />
              </Link>
            </Flex>
          </Flex>

          <Heading
            size="lg"
            mb="15px"
            fontFamily="cursive"
            className="project-title"
            color="#0ef"
          >
            {project.title}
          </Heading>

          <Text
            mb="20px"
            fontFamily="cursive"
            className="project-description"
            color="gray.300"
            lineHeight="1.6"
            flex="1"
          >
            {project.description}
          </Text>

          {/* Tech Stack */}
          <Box className="project-tech-stack">
            <Flex wrap="wrap" justify="center" gap="15px">
              {project.techStack.map((tech, index) => (
                <Box key={index} textAlign="center">
                  <tech.icon style={{ fontSize: "35px", color: tech.color }} />
                  <Text fontSize="xs" mt="5px" color="gray.400">
                    {tech.name}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>

        {/* Image Section */}
        <Box flex="1" minW={{ base: "100%", lg: "300px" }}>
          <Image
            w="100%"
            h={{ base: "200px", lg: "250px" }}
            objectFit="cover"
            borderRadius="10px"
            src={project.image}
            alt={`${project.title} Screenshot`}
            border="2px solid #18112C"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true
    });
  }, []);

  return (
    <Box
      id="projects"
      bg="#25262b"
      color="white"
      py="60px"
      px={{ base: "20px", md: "40px" }}
    >
      <Heading
        textAlign="center"
        className="projects"
        as="h1"
        size="2xl"
        color="#0ef"
        fontFamily="cursive"
        mb="50px"
        data-aos="fade-down"
      >
        PROJECTS
      </Heading>

      <SimpleGrid
        columns={{ base: 1 }}
        spacing="40px"
        maxW="1200px"
        mx="auto"
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};