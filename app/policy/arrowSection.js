

"use client";

import { Box, Heading, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Define motion components for Chakra UI
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function ArrowSection() {  // Changed to ArrowSection
  // Set different delays for base and large screens
  const headingDelay = useBreakpointValue({ base: 0, lg: 0.5 });
  const arrowDelay = useBreakpointValue({ base: 0.5, lg: 1 });
  const textDelay = useBreakpointValue({ base: 0.5, lg: 1.5 });

  return (
    <Box padding="0">
      {/* Main Content */}
      <Flex
        flexDirection={{ base: "column", md: "row" }} // Switch to column on smaller screens
        justifyContent={{ base: "flex-start", lg: "space-between" }} // Align left on small screens
        alignItems={{ base: "flex-start", lg: "center" }} // Align items to the left on small screens
        paddingX={{ base: 4, md: 6 }} // Add padding on the sides for small screens
        maxW="container.xl"
        margin="auto"
        minHeight={{ base: "30vh", lg: "60vh" }}
      >
        {/* Left Section: Headline */}
        <MotionBox
          flex="1"
          textAlign="left" // Aligns text to the left
          maxW={{ sm: "auto", lg: "400px" }}
          width="100%" // Ensure it takes full width on small screens
          marginTop={{ base: 10 }}
          initial={{ opacity: 0, x: -50 }} // Starting position for animation
          animate={{ opacity: 1, x: 0 }} // Fade in and slide in from the left
          transition={{ duration: 0.5, delay: headingDelay }} // Responsive delay for the headline
        >
          <MotionHeading
            as="h1"
            fontSize={{ base: "4xl", md: "4xl", lg: "60px" }}
            fontWeight="700"
            fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552"
            lineHeight="1"
            mb={{ base: 1, lg: 4 }}

          >
            Our Privacy Policy
          </MotionHeading>
        </MotionBox>

        {/* Arrow Section */}
        <MotionBox
          flex="1"
          display={{ base: "none", md: "flex" }} // Hide on small screens
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: 50 }} // Start off screen to the right
          animate={{ opacity: 1, x: 0 }} // Fade in and slide in from the right
          transition={{ duration: 0.5, delay: arrowDelay }} // Responsive delay for the arrow
          mt="100px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            position="relative"
          >
            <Box
              as="hr"
              width="70%"
              border="1.5px solid"
              borderColor="gray.400"
              position="absolute"
            />
            <ArrowForwardIcon
              boxSize={8}
              color="gray.400"
              position="relative"
              zIndex="1"
              marginLeft="auto"
              marginRight={9}
            />
          </Box>
        </MotionBox>

        {/* Right Section: Supporting Text */}
        <MotionBox
          flex="1"
          textAlign="left" // Aligns text to the left
          maxW="md"
          mt={{ lg: "200px"}}
          width="100%" // Ensure it takes full width on small screens
          initial={{ opacity: 0, y: 50 }} // Start off screen at the bottom
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 0.5, delay: textDelay }} // Responsive delay for the supporting text
          
        >
          <MotionText fontSize="20px" color="gray.500" mb="6" fontFamily='"DM Sans", sans-serif'>
            Everything you need to dominate app service fortified the industry’s #1 rated our customer support.
          </MotionText>
        </MotionBox>
      </Flex>
    </Box>
  );
}
