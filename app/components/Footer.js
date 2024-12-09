


import { Box, Text, Link, VStack, HStack, Heading, Divider, Image } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="white" py={10} px={{ base: 6, md: 16 }} mt={{ lg: "150px" }}>
      <HStack align="flex-start" justify="space-between" spacing={{ base: 6, lg: 16 }} maxW="container.xl" mx="auto" width="100%" flexWrap="wrap">
        
        {/* Left Section: Brand & Description */}
        <VStack align="flex-start" spacing={4} flex="1" minW={{ base: "100%", md: "30%" }}>
          <Image
            src="/AminaBg.png"
            alt="Sassly Logo"
            width={{ base: "50px", md: "70px", lg: "290px" }}
            display={{ base: "none", lg:"flex"}}
          />
      
        </VStack>

        {/* Center Section: Disclaimer */}
        <VStack align="flex-start" spacing={4} flex="2" minW={{ base: "100%", md: "35%" }}>
          <Heading size="sm" color="#1f1f57">Disclaimer</Heading>
          <Text fontSize="sm" color="gray.600">
            The information on this website is for general information purposes only. Nothing on this site
            should be taken as healthcare advice for any individual case or situation. This information is
            not intended to create, and receipt or viewing does not constitute, a healthcare
            professional-patient relationship. We do our best to keep information accurate and up-to-date;
            however, mistakes do happen, and we cannot make guarantees regarding the accuracy of our
            information. We are not liable for any information on this website or your reliance upon it.
          </Text>
          <Heading size="sm" color="#1f1f57">Email</Heading>
          <Text fontSize="sm" color="gray.600">
            This email and any files transmitted with it are confidential and intended solely for the use of
            the individual or entity to whom they are addressed. If you have received this email in error,
            please notify the system manager. This message contains confidential information and is
            intended only for the individual named. If you are not the named addressee, you should not
            disseminate, distribute, or copy this email. Please notify the sender immediately by email if
            you have received this email by mistake and delete this email from your system.
          </Text>
        </VStack>

        {/* Right Section: Email Notice */}
        <VStack align="flex-start" spacing={4} flex="1" minW={{ base: "100%", md: "30%" }}>
          
        </VStack>
      </HStack>

      <Divider mt={{ base: 5, lg: 5 }} maxW="container.xl" mx="auto" width="100%" />

      <HStack justify="space-between" align="center" mt={10} flexWrap="wrap" maxW="container.xl" mx="auto" width="100%">
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
