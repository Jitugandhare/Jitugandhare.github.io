import React, { useEffect } from "react";
import { Box, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillHtml5,
} from "react-icons/ai";
import {
  SiNetlify,
  SiPostman,
  SiVercel,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiCss3,
  SiGit,
  SiSocketdotio,
  SiRender
} from "react-icons/si";
import {
  TbBrandVscode,
  TbApi,
} from "react-icons/tb";
import {
  FaNpm,
} from "react-icons/fa";
import AOS from "aos";

// Original skills data
const skillsData = {
  "Frontend Technologies": [
    { name: "HTML5", icon: AiFillHtml5, color: "#e34c26" },
    { name: "CSS3", icon: SiCss3, color: "#1572b6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Redux", icon: SiRedux, color: "#764abc" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
    { name: "REST API", icon: TbApi, color: "#ff6b6b" },
  ],
  "Development Tools": [
    { name: "VS Code", icon: TbBrandVscode, color: "#007acc" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: AiFillGithub, color: "#181717" },
    { name: "NPM", icon: FaNpm, color: "#cb3837" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  ],
  "Deployment & Cloud": [
    { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Render", icon: SiRender, color: "#e4ad06ff" },
  ],
};

// Combine frontend and backend into a single Technologies array
const combinedTechnologies = [
  ...skillsData["Frontend Technologies"],
  ...skillsData["Backend Technologies"],
];

// Updated skills data with combined category
const updatedSkillsData = {
  Technologies: combinedTechnologies,
  "Development Tools": skillsData["Development Tools"],
  "Deployment & Cloud": skillsData["Deployment & Cloud"],
};

// Skill card component with bigger icon & card and smooth hover scale
const SkillCard = ({ skill, index }) => {
  return (
    <Box
      className="skills-card"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      p="30px"                      // increased padding
      borderRadius="15px"
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      transition="all 0.3s ease"
      cursor="pointer"
      _hover={{
        transform: "translateY(-8px) scale(1.15)",  // scale up on hover
        boxShadow: "0 20px 40px rgba(14, 239, 255, 0.3)",
        borderColor: "#0ef",
        bg: "rgba(14, 239, 255, 0.05)",
      }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        background="linear-gradient(45deg, transparent, rgba(14, 239, 255, 0.1), transparent)"
        transform="rotate(45deg)"
        opacity="0"
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
      />

      <VStack spacing="20px" position="relative" zIndex="2">
        <Box
          p="20px"                  // bigger padding around icon
          borderRadius="50%"
          bg="rgba(255, 255, 255, 0.1)"
          transition="all 0.3s ease"
          _groupHover={{
            bg: "rgba(14, 239, 255, 0.2)",
            transform: "scale(1.2)",
          }}
        >
          <skill.icon
            size="50px"             // bigger icon size
            color={skill.color}
            className="skills-card-img"
          />
        </Box>
        <Text
          className="skills-card-name"
          fontWeight="700"          // bolder text
          fontSize="md"            // bigger font size
          color="white"
          textAlign="center"
          fontFamily="Inter, sans-serif"
        >
          {skill.name}
        </Text>
      </VStack>
    </Box>
  );
};

// Skills category section
const SkillsCategory = ({ title, skills }) => {
  return (
    <Box mb="40px">
      <Heading
        size="md"
        color="#0ef"
        mb="25px"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        textAlign="center"
        data-aos="fade-right"
      >
        {title}
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
        spacing="20px"
        className="skills-grid"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

// Main Skills component
export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box
      id="skills"
      bg="#25262b"
      color="white"
      py="80px"
      px={{ base: "20px", md: "40px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        backgroundImage="radial-gradient(circle at 1px 1px, rgba(14, 239, 255, 0.5) 1px, transparent 0)"
        backgroundSize="20px 20px"
        pointerEvents="none"
      />

      <Box maxW="1200px" mx="auto" position="relative" zIndex="2">
        <VStack spacing="50px">
          <Box textAlign="center">
            <Heading
              className="tech-stacks"
              data-aos="fade-down"
              fontFamily="Inter, sans-serif"
              color="#0ef"
              size="2xl"
              as="h1"
              fontWeight="700"
              mb="10px"
            >
              TECHNICAL SKILLS
            </Heading>
            <Box
              width="100px"
              height="4px"
              bg="linear-gradient(90deg, #0ef, transparent)"
              mx="auto"
              borderRadius="2px"
              data-aos="fade-up"
            />
          </Box>

          {/* Render combined skills categories */}
          {Object.entries(updatedSkillsData).map(([category, skills]) => (
            <SkillsCategory key={category} title={category} skills={skills} />
          ))}
        </VStack>
      </Box>

      {/* Floating elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="rgba(14, 239, 255, 0.05)"
        filter="blur(40px)"
        animation="float 6s ease-in-out infinite"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="20%"
        left="10%"
        width="80px"
        height="80px"
        borderRadius="50%"
        bg="rgba(14, 239, 255, 0.03)"
        filter="blur(30px)"
        animation="float 8s ease-in-out infinite reverse"
        pointerEvents="none"
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  );
};
