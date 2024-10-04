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
import { TbBrandSocketIo } from "react-icons/tb";
import { SiExpress, SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import React, { useEffect } from "react";
import { BiFolder, BiCopy } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { FaGithub, FaReact, FaHtml5 } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import bb from '../Assets/Projects/bb.png'
import onfli from '../Assets/Projects/onfli.png'
import mikkushepo from '../Assets/Projects/mikkushepo.png'
import Salesway from '../Assets/Projects/SalesWay.png'
import Instaclone from "../Assets/Projects/Insta.png"
import Hebron from "../Assets/Projects/Hebron.png"

import {
  SiChakraui,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,


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
     
        {/* first */}
        <Box
          id="project-sec"
          data-aos="fade-right"
          _hover={{ bg: "#301f5f", borderColor: "#18112C" }}
          borderRadius="10px"
          p="20px"
          w={{ base: "95%", lg: "80%" }}  // Responsive width
          m="40px auto"
          border="1px inset #18112C"
          className="project-card"
        >
          <Flex
            gap="30px"
            justifyContent="space-evenly"
            direction={{ base: "column-reverse", lg: "row" }} // Cleaner direction change
          >
            <Box w="100%">
              <Flex justifyContent="space-between">
                {/* Folder Icon */}
                <Box>
                  <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                </Box>

                {/* GitHub and Link Icons */}
                <Box>
                  <Flex alignItems="center" gap="10px">
                    <Link
                      href="https://github.com/Jitugandhare/Insta"
                      className="project-github-link"
                      isExternal
                    >
                      <FaGithub style={{ fontSize: "40px", color: "white" }} />
                    </Link>
                    <Link
                      href="https://thriving-meringue-a57f31.netlify.app"
                      className="project-deployed-link"
                      isExternal
                    >
                      <BiCopy style={{ fontSize: "40px", color: "white" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>

              {/* Project Title */}
              <Heading
                textAlign="left"
                size="md"
                mt="10px"
                fontFamily="cursive"
                className="project-title"
              >
                Insta
              </Heading>

              {/* Project Description */}
              <Text
                textAlign="left"
                mt="10px"
                fontFamily="cursive"
                className="project-description"
              >
                "This project is a Instagram clone built with the MERN stack (MongoDB, Express, React, Node.js) and Redux for state management, featuring a modern UI with ShadCN. Users can create and edit profiles, post images and captions, comment, like posts, follow/unfollow others, for users and posts. The application includes a notification system for likes, comments, and follows, as well as real-time chat and notifications using socket.io, providing an engaging and interactive experience."
              </Text>

              {/* Tech Stack Icons */}
              <Box w="100%" mt="30px" className="project-tech-stack">
                <Flex justifyContent="space-between" alignItems="center">
                  {/* React Icon */}
                  <Box textAlign="center">
                    <FaReact style={{ fontSize: "40px", color: "#3fc3bd" }} />
                    <Text fontSize="sm" mt="5px">React</Text>
                  </Box>

                  {/* Node.js Icon */}
                  <Box textAlign="center">
                    <FaNodeJs style={{ fontSize: "40px", color: "green" }} />
                    <Text fontSize="sm" mt="5px">Node.js</Text>
                  </Box>

                  {/* Redux Icon */}
                  <Box textAlign="center">
                    <SiRedux style={{ fontSize: "40px", color: "#7d32a8" }} />
                    <Text fontSize="sm" mt="5px">Redux</Text>
                  </Box>

                  {/* MongoDB Icon */}
                  <Box textAlign="center">
                    <SiMongodb style={{ fontSize: "40px", color: "green" }} />
                    <Text fontSize="sm" mt="5px">MongoDB</Text>
                  </Box>

                  {/* Express Icon */}
                  <Box textAlign="center">
                    <SiExpress style={{ fontSize: "40px", color: "green" }} />
                    <Text fontSize="sm" mt="5px">Express</Text>
                  </Box>
                  {/* socketio */}
                  <Box textAlign="center">
                    <TbBrandSocketIo style={{ fontSize: "40px", color: "green" }} />
                    <Text fontSize="sm" mt="5px">Socket.io</Text>
                  </Box>

                  {/* Tailwind CSS Icon */}
                  <Box textAlign="center">
                    <BiLogoTailwindCss style={{ fontSize: "45px", color: "#2e6ff2" }} />
                    <Text fontSize="sm" mt="5px">Tailwind</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Image Section */}
            <Box w="100%">
              <Image w="100%" src={Instaclone} alt="Insta Project Screenshot" />
            </Box>
          </Flex>
        </Box>

        <Box
          id="project-sec"
          data-aos="fade-right"
          _hover={{ bg: "#301f5f", borderColor: "#18112C" }}
          borderRadius="10px"
          p="20px"
          w={{ base: "95%", lg: "80%" }}  // Responsive width
          m="40px auto"
          border="1px inset #18112C"
          className="project-card"
        >
          <Flex
            gap="30px"
            justifyContent="space-evenly"
            direction={{ base: "column-reverse", lg: "row" }} // Cleaner direction change
          >
            <Box w="100%">
              <Flex justifyContent="space-between">
                {/* Folder Icon */}
                <Box>
                  <BiFolder style={{ fontSize: "40px", color: "#388E3C" }} />
                </Box>

                {/* GitHub and Link Icons */}
                <Box>
                  <Flex alignItems="center" gap="10px">
                    <Link
                      href="https://github.com/Jitugandhare/ammplicom"
                      className="project-github-link"
                      isExternal
                    >
                      <FaGithub style={{ fontSize: "40px", color: "white" }} />
                    </Link>
                    <Link
                      href="https://landing-page-lake-eight-56.vercel.app/"
                      className="project-deployed-link"
                      isExternal
                    >
                      <BiCopy style={{ fontSize: "40px", color: "white" }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>

              {/* Project Title */}
              <Heading
                textAlign="left"
                size="md"
                mt="10px"
                fontFamily="cursive"
                className="project-title"
              >
                HEBRON NUTRITION: A Health & Wellness
              </Heading>

              {/* Project Description */}
              <Text
                textAlign="left"
                mt="10px"
                fontFamily="cursive"
                className="project-description"
              >
                HEBRON NUTRITION is a modern and user-friendly web application designed to promote health and wellness by offering personalized nutrition advice, health tips, and product recommendations. Built with React.js for a dynamic and responsive user interface, the project leverages styled-components to create modular, reusable, and aesthetically appealing styles.
              </Text>

              {/* Tech Stack Icons */}
              <Box w="100%" mt="30px" className="project-tech-stack">
                <Flex justifyContent="space-between" alignItems="center">
                  {/* React Icon */}
                  <Box textAlign="center">
                    <FaReact style={{ fontSize: "40px", color: "#3fc3bd" }} />
                    <Text fontSize="sm" mt="5px">React</Text>
                  </Box>

                  {/* Node.js Icon */}
                  
                  {/* Redux Icon */}
                  <Box textAlign="center">
                    <SiRedux style={{ fontSize: "40px", color: "#7d32a8" }} />
                    <Text fontSize="sm" mt="5px">Redux</Text>
                  </Box>


                  {/* Tailwind CSS Icon */}
                  <Box textAlign="center">
                    <SiStyledcomponents  style={{ fontSize: "45px", color: "#2e6ff2" }} />
                    <Text fontSize="sm" mt="5px">Styled-Components</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Image Section */}
            <Box w="100%">
              <Image w="100%" src={Hebron} alt="Hebron-nutrition" />
            </Box>
          </Flex>
        </Box>






        {/* second project */}
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
                      href="https://github.com/Jitugandhare/ut/tree/main/new-asssign/ut-assignment"
                      className="project-github-link"
                    >
                      <FaGithub style={{ fontSize: "40px" }} />
                    </Link>
                    <Link
                      href="https://ut-assignment.vercel.app/"
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
                fontFamily={"cursive"}
              >
                Salesway Dashboard
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
                fontFamily={"cursive"}
              >
                "Developed a user-friendly navigation system using React, ensuring seamless access to various dashboard sections.Designed a performance scoring system to visualize user sales performance, encouraging competitive improvement."
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
                    <BiLogoTailwindCss style={{ fontSize: "45px", color: "#2e6ff2" }} />
                    {/* <TbJson style={{ fontSize: "45px", color: "#2e6ff2" } } /> */}
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
              <Image w="100%" src={Salesway} />
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
                fontFamily={"cursive"}
              >
                OnFlick
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
                fontFamily={"cursive"}
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
                fontFamily={"cursive"}
              >
                Boat & Bait
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
                fontFamily={"cursive"}
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
                fontFamily={"cursive"}
              >
                Mikkushepora
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
                fontFamily={"cursive"}
              >
                "Experience Shepora's essence in our HTML, CSS, and JS clone. Enjoy sleek design, seamless navigation, and dynamic features for a user-friendly showcase of products and content."
              </Text>

              <Text textAlign={"left"} fontFamily={"cursive"}>
                Added Login and Signup Functionalities
              </Text>

              <Text textAlign={"left"} fontFamily={"cursive"} >
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
                fontFamily={"cursive"}
              >
                Boat & Bait
              </Heading>
              <Text
                className="project-description"
                textAlign={"left"}
                mt="10px"
                fontFamily={"cursive"}
              >
                This is a modern e-commerce platform for buying and exploring exquisite clothes related to babies. It provides a user-friendly interface, a wide range of clothes.

              </Text>
              <Text textAlign={"left"} fontFamily={"cursive"}> Built Landing Page </Text>
              <Text textAlign={"left"} fontFamily={"cursive"}>Built Footer Part </Text>
              <Text textAlign={"left"} fontFamily={"cursive"}>Developed the Authentication functionality</Text>
              <Text textAlign={"left"} fontFamily={"cursive"}> Payment functionality</Text>

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

