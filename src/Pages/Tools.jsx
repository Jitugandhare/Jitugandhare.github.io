import React from "react";
import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaSlack } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { BiLogoZoom } from "react-icons/bi";
import { SiMongodb, SiMongoose } from 'react-icons/si';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";






export const Tools = () => {

  return (
    <Box
      id="skills"
      bg={"#25262b"}
      color={"white"}
      textAlign={"center"}
    >
      <Heading
        m={"50px 0"}
        className="tech-stacks"
        display={"inline-block"}
        padding="10px"
        data-aos="fade-right"
        fontFamily={"cursive"}
        color={"#0ef"}
        size="2xl"
        as="h1"
      >
        MY TECHNICAL SKILLS
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        rowGap="60px"
        // margin="50px auto"
        placeItems={"center"}
        alignItems={{ base: "center", sm: "center", md: "center" }}
      >


        <Box
          id="html"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <FaHtml5
            color="#FF0000"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box
          id="css"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <IoLogoCss3
            color="#264de4"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="js"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <IoLogoJavascript
            color="#f0db4f"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box
          id="react-icon"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <FaReact
            color="#61DBFB"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>





        <Box
          id="redux"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          < SiRedux
            color="purple"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="typescript"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <SiTypescript
            color="#007acc"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="nodejs"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <FaNode
            color=" #68A063"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="expressjs"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          <SiExpress
            color="#68a063"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="mongodb"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          < SiMongodb
            color="#3FA037"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box
          id="mongoose"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card">
          < SiMongoose
            color="#A58B6F"
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>









        <Box
          id="github"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <AiFillGithub
            fontSize={"65px"}
            style={{ margin: "auto" }}
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="netlify"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiNetlify
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#24c1b1"
            className="skills-card-img"
          />

          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="vercel"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiVercel
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="black"
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>
        <Box
          id="vscode"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <TbBrandVscode
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#0082ca"
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>






















        <Box
          id="npm"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <ImNpm
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#c53635"
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>

        <Box
          id="postman"
          p="10px"
          width={{ base: "60%", sm: "50%", md: "30%", lg: "30%" }}
          className="skills-card"
        >
          <SiPostman
            fontSize={"65px"}
            style={{ margin: "auto" }}
            color="#f76935"
            className="skills-card-img"
          />
          <Heading className="skills-card-name"></Heading>
        </Box>



      </Grid>
    </Box>
  );
};


