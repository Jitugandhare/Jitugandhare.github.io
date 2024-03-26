import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Flex
      gap="15px"
      boxSizing="border-box"
      alignItems={"center"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      color={"gray.300"}
      fontSize={"20px"}
      bg={"#2b2e34"}
      p={"10px"}
     
      justifyContent="space-between"
    >
      <Box fontWeight={"bold"} color="#25cefd" fontFamily={"cursive"}>
        {"JITU"}
      </Box>
      <Box display={"flex"} alignItems={"center"} fontFamily={"cursive"} color={'#25cefd'}>
        Made {" "}  by{"  "} Jitu Gandhare{" "}
        {/* <span style={{ color: "#25cefd", marginLeft: "3px",fontFamily:"cursive"}}>  </span> */}
        <span>
          {" "}
          <FaHeart color="red" style={{ margin: "0 5px" }} />
        </span>{" "}
       
        {/* <span style={{ color: "#25cefd", marginLeft: "3px",fontFamily:"cursive"}}> Jitu Gandhare </span> */}
      </Box>
      <Flex alignItems={"center"}>
        <Link id="contact-github" to="https://github.com/jitugandhare">
          <FaGithub fontSize={"35px"} />
        </Link>
        <Link id="contact-linkedin" to="https://www.linkedin.com/in/jitu-gandhare-6680ab201/">
          <FaLinkedin
            style={{ marginLeft: "20px" }}
            color="#25cefd"
            fontSize={"35px"}
          />
        </Link>
      </Flex>
    </Flex>
  );
};
