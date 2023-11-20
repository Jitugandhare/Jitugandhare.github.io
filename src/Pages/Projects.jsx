import {
  Box,
  Image,
  Heading,
  Link,
  Text,
  Flex,
  Grid,
  Center,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiFolder, BiCopy } from "react-icons/bi";
import { FaGithub, FaReact, FaHtml5 } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import bb from '../Assets/Projects/bb.png'
import onfli from '../Assets/Projects/onfli.png'
import mikkushepo from '../Assets/Projects/mikkushepo.png'

import {
  SiChakraui,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import AOS from "aos";
import { IoLogoJavascript } from "react-icons/io";

export const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  return (
    <Box
      cursor={"pointer"}
      textAlign={"center"}
      id="projects"
      bg={"#25262b"}
      color={"white"}
    >
      <Heading
        mt="40px"
        textAlign={"center"}
        className="projects"
        display={"inline-block"}
        padding="10px"
        as="h1"
        size={"2xl"}
        color={"#0ef"}
        fontFamily={"cursive"}
        data-aos="fade-right"
      >
        PROJECTS
      </Heading>

      <Grid>
        <Box
          id="project-sec"
          data-aos="fade-right"
          _hover={{ bg: "#301f5f", border: "1px solid #18112C" }}
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          border={"1px inset #18112C"}
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link
                      href="https://github.com/Jitugandhare/desisive-duck"
                      className="project-github-link"
                    >
                      <FaGithub style={{ fontSize: "40px" }} />
                    </Link>
                    <Link
                      href="https://desisive-duck.vercel.app/"
                      className="project-deployed-link"
                    >
                      {" "}
                      <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                OnFlick 
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                "Elevate online shopping with our React-based e-commerce project, featuring a sleek design and seamless functionality. Enjoy intuitive navigation, real-time updates, and secure transactions for a modern and efficient shopping experience."
              </Text>
             

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaReact style={{ fontSize: "40px", color: "#3fc3bd" }} />
                  </Text>
                  <Text>
                    <SiChakraui
                      style={{ fontSize: "40px", color: "#3fc3bd" }}
                    />
                  </Text>

                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={onfli} />
            </Box>
          </Flex>

        </Box>

        <Box
          id="project-sec"
          data-aos="fade-left"
          _hover={{ bg: "#301f5f", border: "1px solid #18112C" }}
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          border={"1px inset #18112C"}
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
               <Image w="100%" 
              src={bb} /> 
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link
                      href="https://github.com/Jitugandhare/-gutsy-sheet-7629"
                      className="project-github-link"
                    >
                      <FaGithub style={{ fontSize: "40px" }} />
                    </Link>
                    <Link
                      href="https://frolicking-bubblegum-e45b74.netlify.app/"
                      className="project-deployed-link"
                    >
                      {" "}
                      <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                Boat & Bait
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                This is a modern e-commerce platform for buying and exploring exquisite clothes related to babies. It provides a user-friendly interface, a wide range of clothes.
               
              </Text>
              <Text textAlign={"left"}>Built Landing Page </Text>
              <Text textAlign={"left"}>Built Footer Part </Text>
              <Text textAlign={"left"}>Developed the Authentication functionality</Text>
              <Text textAlign={"left"}>Payment functionality</Text>

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaHtml5 style={{ fontSize: "40px", color: "coral" }} />
                  </Text>
                  <Text>
                    <FaCss3Alt style={{ fontSize: "40px", color: "blue" }} />
                  </Text>
                  <Text>
                    <IoLogoJavascript
                      style={{ fontSize: "40px", color: "#FDD835" }}
                    />
                  </Text>
                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>
            
          </Flex>
        </Box>

        <Box
          id="project-sec"
          data-aos="fade-right"
          _hover={{ bg: "#301f5f", border: "1px solid #18112C" }}
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          border={"1px inset #18112C"}
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link
                      href="https://github.com/Jitugandhare/knowledgeable-breath-5856-"
                      className="project-github-link"
                    >
                      <FaGithub style={{ fontSize: "40px" }} />
                    </Link>
                    <Link
                      href="https://roaring-hotteok-b61a42.netlify.app/"
                      className="project-deployed-link"
                    >
                      {" "}
                      <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                Mikkushepora
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
              "Experience Shepora's essence in our HTML, CSS, and JS clone. Enjoy sleek design, seamless navigation, and dynamic features for a user-friendly showcase of products and content."
              </Text>
              
              <Text textAlign={"left"}>
                Added Login and Signup Functionalities
              </Text>

              <Text textAlign={"left"}>
                Built landing page
              </Text>

             
              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaHtml5 style={{ fontSize: "40px", color: "coral" }} />
                  </Text>
                  <Text>
                    <FaCss3Alt style={{ fontSize: "40px", color: "blue" }} />
                  </Text>
                  <Text>
                    <IoLogoJavascript
                      style={{ fontSize: "40px", color: "#FDD835" }}
                    />
                  </Text>
                  
                </Flex>
              </Box>
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Image w="100%" src={mikkushepo} />
            </Box>
          </Flex>
        </Box>

        <Box
          id="project-sec"
          data-aos="fade-left"
          _hover={{ bg: "#301f5f", border: "1px solid #18112C" }}
          borderRadius={"10px"}
          p="20px"
          w="80%"
          m="40px auto"
          border={"1px inset #18112C"}
          className="project-card"
        >
          <Flex
            gap={"30px"}
            justifyContent={"space-evenly"}
            direction={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
               <Image w="100%" 
              src={bb} /> 
            </Box>
            <Box
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
            >
              <Flex justifyContent={"space-between"}>
                <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                <Box>
                  <Flex>
                    <Link
                      href="https://github.com/Jitugandhare/-gutsy-sheet-7629"
                      className="project-github-link"
                    >
                      <FaGithub style={{ fontSize: "40px" }} />
                    </Link>
                    <Link
                      href="https://frolicking-bubblegum-e45b74.netlify.app/"
                      className="project-deployed-link"
                    >
                      {" "}
                      <BiCopy style={{ fontSize: "40px", marginLeft: "5px" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
              <Heading
                textAlign={"left"}
                size={"md"}
                mt="10px"
                className="project-title"
              >
                Boat & Bait
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
              >
                This is a modern e-commerce platform for buying and exploring exquisite clothes related to babies. It provides a user-friendly interface, a wide range of clothes.
               
              </Text>
              <Text textAlign={"left"}>Built Landing Page </Text>
              <Text textAlign={"left"}>Built Footer Part </Text>
              <Text textAlign={"left"}>Developed the Authentication functionality</Text>
              <Text textAlign={"left"}>Payment functionality</Text>

              <Box w={"100%"} mt="30px" className="project-tech-stack">
                <Flex w={"100%"} justifyContent={"space-between"}>
                  <Text>
                    <FaHtml5 style={{ fontSize: "40px", color: "coral" }} />
                  </Text>
                  <Text>
                    <FaCss3Alt style={{ fontSize: "40px", color: "blue" }} />
                  </Text>
                  <Text>
                    <IoLogoJavascript
                      style={{ fontSize: "40px", color: "#FDD835" }}
                    />
                  </Text>
                  <Text>
                    <TbJson style={{ fontSize: "45px", color: "#2e6ff2" }} />
                  </Text>
                </Flex>
              </Box>
            </Box>
            
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

