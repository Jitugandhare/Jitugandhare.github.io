import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
// import resume from '../Assets/Resume/Sharvari-Hupare-Resume.pdf'

export const About = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  return (
    <>
      <Box
        b="none"
        textAlign={"center"}
        id="about"
        className="about section"
        bg={"#25262b"}
        color={"white"}
      >
        <Heading
          mt="50px"
          className="aboutmehead"
          display={"inline-block"}
          padding="10px"
          data-aos="fade-right"
          mb="45px"
          textAlign={"center"}
          fontFamily={"cursive"}
          size="2xl"
          as="h1"
        >
          ABOUT{" "}
          <span style={{ color: "#0ef", textAlign: "center" }}>ME</span>
        </Heading>
        <Flex
          justifyContent={"space-around"}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          gap="30px"
          alignItems={"center"}
        >
          <Box
            w={{
              base: "90%",
              sm: "90%",
              md: "70%",
              lg: "50%",
              xl: "40%",
              "2xl": "40%",
            }}
            data-aos="zoom-out"
          >
            <Image
              w="100%"
              border={"1px inset"}
              boxShadow="dark-md"
              p="6"
              rounded="md"
              src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
              borderTopRadius={"50%"}
              borderLeftRadius={"50%"}
            />
          </Box>
          <Box
            w={{
              base: "90%",
              sm: "90%",
              md: "70%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
          >
            <Text
              id="user-detail-intro"
              data-aos="fade-right"
              fontSize={"22px"}
              color={"white"}
              textAlign={"left"}
              fontFamily={"cursive"}
              mb="20px"
            >
              Detail-orientated full-stack web developer,who loves working with
              tech stacks like HTML,CSS,Javascript ,React and Nodejs etc. and passionate
              about developing user-friendly web applications . Team player with
              an eye for detail. An enthusiastic individual with zeal to grow,
              curious to explore and learn new things and dedicated to company
              growth and improvements.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

// export default About;
