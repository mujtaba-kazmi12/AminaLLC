
"use client";
import React, { useEffect } from 'react';
import { Box, Container, Text, Heading, Button, VStack, Flex, Link, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInUpStaggered = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Box bg="white" py={16} mt={{lg:"60px"}}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          width="100%"
        >
          {/* Left Text Section */}
          <VStack
            align="flex-start"
            spacing={6}
            flex="1"
            as={motion.div}
            variants={fadeInUpStaggered}
            initial="hidden"
            animate={controls}
          >
            {/* Fade in "Fully 100% quality editing" */}
            <motion.div variants={fadeInUp}>
              <Text fontSize="20px" fontFamily='"DM Sans", sans-serif'>
                <Text as="span" fontWeight="bold" textDecoration="underline" color="#fd8b17">Empower Abilities, Embrace Humanity!</Text> 
               
              </Text>
            </motion.div>

            {/* Fade in "Quality and professional editing" */}
            <motion.div variants={fadeInUp} ref={ref} >
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '51px' }}
                fontWeight="900"
                color="#1f1f57"
                fontFamily='"Instrument Sans", sans-serif'
                lineHeight="1.2"
                maxW="md"
              >
                Give hope, change lives, spread love.
              </Heading>
            </motion.div>

            {/* This is the trigger point for the rest of the animations */}
            <motion.div
              // Trigger the animation when this text comes into view
              variants={fadeInUp}
            >
              <Text color="#667085" fontSize="lg" maxW="lg" fontFamily='"DM Sans", sans-serif'>
              Our goals are to provide addiction and mental health providers essential solutions to navigate accreditation, regulatory compliance, and operational challenges
              </Text>
            </motion.div>

          

           
          </VStack>

          {/* Right Image Section */}
          <Box
            position="relative"
            mt={{ base: 10, md: 0 }}
            flex="1"
            display="flex"
            justifyContent="flex-end"
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            variants={{ visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}
          >
            {/* Pink Frame (Behind) */}
            <Box
              position="absolute"
              top="6%"
              right="6%"
              bg="#ffc367"
              borderRadius="lg"
              width="350px"
              height="450px"
              zIndex="0"
            >
              
            </Box>

            {/* Main Image */}
            <Box position="relative" zIndex="1" borderRadius="lg" overflow="hidden">
              <Image
                src="/child.webp"
                alt="Woman"
                borderRadius="lg"
                objectFit="cover"
                width="350px"
                height="450px"
              />

            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
