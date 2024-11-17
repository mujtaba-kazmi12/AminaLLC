import { Box, Text, Link, VStack, HStack, Input, IconButton, Heading, Divider } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="white" py={10} px={{ base: 6, md: 16 }} mt={{lg:20}}>
      <HStack align="flex-start" justify="space-between" spacing={{ base: 6, lg: 16 }} maxW="container.xl" mx="auto" width="100%" flexWrap="wrap">
        
        {/* Left Section: Brand & Description */}
        <VStack align="flex-start" spacing={4} flex="1" minW={{ base: "100%", md: "25%" }}>
          <Heading size="lg" color="gray.800">
            Sassly
          </Heading>
          <Text fontSize="sm" color="gray.600" maxW="250px">
            Sassly is a real early-stage software looking for an analytics platform that scales with you, check out our stage program.
          </Text>
        </VStack>

        {/* Middle-Left Section: Company Links */}
        <VStack align="flex-start" spacing={2} flex="1" minW={{ base: "100%", md: "15%" }}>
          <Heading size="sm" color="gray.800">Company</Heading>
          <Link fontSize="sm" color="gray.600">About</Link>
          <Link fontSize="sm" color="gray.600">Careers</Link>
          <Link fontSize="sm" color="gray.600">Press</Link>
          <Link fontSize="sm" color="gray.600">Contact Us</Link>
          <Link fontSize="sm" color="gray.600">System Status</Link>
        </VStack>

        {/* Middle-Right Section: Product Links */}
        <VStack align="flex-start" spacing={2} flex="1" minW={{ base: "100%", md: "15%" }}>
          <Heading size="sm" color="gray.800">Product</Heading>
          <Link fontSize="sm" color="gray.600">Live Chat</Link>
          <Link fontSize="sm" color="gray.600">Jirogram</Link>
          <Link fontSize="sm" color="gray.600">Datasetico</Link>
          <Link fontSize="sm" color="gray.600">Underline</Link>
          <Link fontSize="sm" color="gray.600">Keyword</Link>
        </VStack>

        {/* Right Section: Newsletter Signup */}
        <VStack align="flex-start" spacing={4} flex="1" minW={{ base: "100%", md: "25%" }}>
          <Heading size="sm" color="gray.800">Newsletter</Heading>
          <HStack>
            <Input placeholder="Enter your email" variant="filled" size="md" />
            <IconButton
              icon={<FaPaperPlane />}
              aria-label="Submit"
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.600" }}
              size="md"
            />
          </HStack>
        </VStack>
      </HStack>


<Divider mt={{base:5,lg:5}}
maxW="container.xl" 
mx="auto" 
width="100%"
/>

      <HStack 
  justify="space-between" 
  align="center" 
  mt={10} 
  flexWrap="wrap"
  maxW="container.xl" 
  mx="auto" 
  width="100%"
>
  {/* Social Media Links */}
  <HStack spacing={4} justify={{ base: "center", md: "flex-start" }} flex="1" width={{ base: "100%", md: "auto" }}>
    <Link href="https://facebook.com" isExternal>
      <FaFacebookF color="gray.600" />
    </Link>
    <Link href="https://twitter.com" isExternal>
      <FaTwitter color="gray.600" />
    </Link>
    <Link href="https://instagram.com" isExternal>
      <FaInstagram color="gray.600" />
    </Link>
    <Link href="https://linkedin.com" isExternal>
      <FaLinkedinIn color="gray.600" />
    </Link>
  </HStack>

  {/* Copyright */}
  <Text 
    fontSize="sm" 
    color="gray.600" 
    textAlign={{ base: "center", md: "right" }} 
    width={{ base: "100%", md: "auto" }} 
    flex="1"
  >
    © 2024 <Link href="https://crowdytheme.com" color="gray.800" isExternal>Reserved</Link>
  </Text>
</HStack>

    </Box>
  );
}
