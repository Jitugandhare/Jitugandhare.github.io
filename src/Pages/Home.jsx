import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,

  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Typed from "typed.js";
import professional from "../Assets/Professional_Pic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from '../Assets/Resume/resume.pdf'
import { FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'


import "./Home.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["MERN Stack Developer", "Effective Problem Solver"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,

      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

 

  const openLink = (url) => {
    window.open(url);
  };
  return (
    <>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        bg={"#25262b"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap="60px"
        id="home"
        p="50px"
        color={"white"}
        border="none"
      >
        <Box >
          <Box id="home-content">
            <Text
              bgGradient="linear(to-r, #25cefd, #FF0080)"
              bgClip="text"
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "6xl" }}
              fontWeight="extrabold"
              fontFamily={"cursive"}
            > I AM,
            </Text>
            <Text
              bgGradient="linear(to-r, #25cefd, #FF0080)"
              bgClip="text"
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "6xl" }}
              fontWeight="extrabold"
              fontFamily={"cursive"}
              id="user-detail-name"
            >
              Jitu Gandhare
            </Text>
            <Heading mt="10px" size="lg" as="h3" fontFamily={"cursive"}
            >
              <span className="text"></span>
              <span style={{ color: "#0ef", marginLeft: "3px" }}>|</span>
            </Heading>
            {/* <Text fontSize={"20px"} mt="10px">
              A Passionate Full Stack Developer <br />

            </Text> */}
            <Text fontWeight={"500"} mt={"20px"} fontSize={"4xl"} color="#25cefd" fontFamily={"cursive"}>
              A Passionate Full Stack Developer
            </Text>
            <Link
              mt="10px"
              fontWeight="bold"
              borderRadius="5px"
              backgroundImage="linear-gradient(to right, #01b395, #03bd69)"
              id="resume-link-2"
              href={resume}
              download={true}
              target="_blank"
            >
              <Box className="home-icon">
                <Button
                  mt="40px"
                  id="resume-button-2"
                  background="#0ef"
                  onClick={() => openLink("https://drive.google.com/file/d/1agDPHiViXhL3SBvuGoHAvePQQu6XwtX_/view?usp=sharing")}
                  className="home-resume btn-box"
                  fontFamily={"cursive"}
                >
                  Download Resume
                </Button>
              </Box>
            </Link>
          </Box>
        </Box>
        {/*   
          <Image
            id="mypic"
            src={professional}
            className="home-img"
            boxShadow="outline"
            borderColor={"#76446b"}
            alt="myPic"
            w={{base : '80%', sm : '80%', md : '60%', lg : '30%', xl : '30%', '2xl' : '30%'}}
            height="10%"
            borderRadius="50%"
            padding="5px"
          /> */}

        <Image
          id="mypic"
          src={professional}
          className="home-img"
          boxShadow="outline"
          borderColor="#76446b"
          alt="myPic"
          w={{ base: '80%', sm: '80%', md: '60%', lg: '30%', xl: '30%', '2xl': '30%' }}
          height="10%"
          borderRadius="50%"
          padding="5px"
          margin="auto"
          // boxShadow="0px 19px 38px #337f94, 0px 15px 12px #4b636a"
          bgGradient="linear(to-b, #656865, #25cefd)"
        />

      </Flex>
    </>
  );
};

