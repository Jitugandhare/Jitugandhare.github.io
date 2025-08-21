import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);

  return (
    <Box
      id="about"
      bg="#25262b"
      color="white"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}  // less horizontal padding for full width feel
      textAlign="center"
      borderRadius="md"
      boxShadow="lg"
      w="100vw"               // full viewport width
      position="relative"     // to prevent horizontal scroll due to w=100vw + padding
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      className="about section"
    >
      <Heading
        fontFamily="cursive"
        fontWeight="bold"
        size="3xl"
        mb={{ base: 10, md: 16 }}
        data-aos="fade-right"
      >
        ABOUT{" "}
        <Box as="span" color="#0ef" aria-label="me">
          ME
        </Box>
      </Heading>

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 10, lg: 16 }}
      >
        <Box
          flex="1"
          maxW={{ base: "90%", md: "70%", lg: "45%" }}
          mx="auto"
          data-aos="zoom-out"
          _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
          rounded="xl"
          overflow="hidden"
          boxShadow="xl"
          cursor="pointer"
        >
          <Image
            src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
            alt="About Me GIF"
            w="100%"
            h="auto"
            objectFit="cover"
            borderRadius="xl"
            loading="lazy"
          />
        </Box>

        <Box
          flex="1"
          maxW={{ base: "90%", md: "70%", lg: "50%" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="cursive"
            lineHeight="tall"
            mb={6}
            data-aos="fade-right"
          >
            Detail-oriented full-stack web developer passionate about tech
            stacks like HTML, CSS, JavaScript, React, and Node.js. I thrive on
            building user-friendly web applications with clean code. A
            dedicated team player with a keen eye for detail, always eager to
            learn and grow alongside the company.
          </Text>

          <Button
            colorScheme="cyan"
            size="md"
            as="a"
            href="#contact"
            data-aos="fade-up"
            _hover={{ bg: "cyan.500" }}
          >
            Contact Me
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
