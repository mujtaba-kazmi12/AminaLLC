
import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from './navbar'; // Import Navbar


export default function Home() {
  return (
    <Box bg="#faf7f1" color="#082838" position="relative" overflow="hidden" >
      {/* Background Pattern: Positioned inside the hero section */}
      <Box
        bg="linear-gradient(0deg, transparent 24%, rgba(200,200,200,0.5) 25%, rgba(200,200,200,0.5) 26%, transparent 27%, transparent 74%, rgba(200,200,200,0.5) 75%, rgba(200,200,200,0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200,200,200,0.5) 25%, rgba(200,200,200,0.5) 26%, transparent 27%, transparent 74%, rgba(200,200,200,0.5) 75%, rgba(200,200,200,0.5) 76%, transparent 77%, transparent)"
        backgroundSize="75px 75px"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%" // Now it will fill the hero section only
        opacity="0.3"
          // Keeps the background behind the content
      />

      {/* Navbar Component */}
      <Container maxW="container.xl" position="relative" zIndex="1">
        <Navbar />
      </Container>

      {/* Hero Section */}
      <Container maxW="container.xl" position="relative" zIndex="1">
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "column" }}
          align="center"
          mt={{ base: "1%", md: "6%", lg: "5" }}
          justify="center"
          height={{base:'250px',lg:'380px'}}  // Define the height of your hero section
          textAlign="center"
          pb={{lg:'90px'}}
        >
          {/* AI-online Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "60px" }}
              fontWeight="700"
              fontFamily='"Instrument Sans", Sans-serif'
              color="#1f1f57"
              lineHeight="1"
              mb={4}
            >
             Grand Amina Services LLC
            </Heading>
          </motion.div>

          

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box flex={{ md: "1" }} pl={{ md: "4" }} mt={{ base: 2, md: 2, lg: 0 }}>
              <Text
                fontSize={{ base: "md", md: "lg", lg: "20px" }}
                fontFamily='"DM Sans", sans-serif'
                mb={{ base: 1, md: 2, lg: 2 }}
                color="#fd8b17"
              >
                  We are a values-based mental health organization that provides access to
              </Text>
              <Text fontSize={{ base: "md", md: "lg", lg: "20px" }} fontFamily='"DM Sans", sans-serif'  color="#fd8b17">
              equitable and quality services that promotes individual, family, and community growth and healing.
              </Text>
            </Box>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
           
          </motion.div>
        </Flex>

     
      </Container>
    </Box>
  );
}
