
// import { Box, Button, Heading, Text, VStack, Stack } from "@chakra-ui/react";

// export default function CallToActionSection() {
//   return (
//     <Box
//       width={{base:"90%",lg:"100%"}}
//       bg="teal.300"
//       py={12}
//       px={4}
//       borderRadius="lg"
//       textAlign="center"
//       position="relative"
//       overflow="hidden"
//       maxW="container.xl"
//       mx="auto"
//       height="550px" // Increased height
//       display="flex"
//       alignItems="center" // Centers content vertically
//       justifyContent="center" // Centers content horizontally
//       mt="5"
//     >
//       {/* Background Shapes */}
//       <Box
//         position="absolute"
//         top="-50px"
//         left="-50px"
//         width="300px"
//         height="300px"
//         bg="teal.400"
//         borderRadius="full"
//         opacity={0.2}
//       />
//       <Box
//         position="absolute"
//         bottom="-50px"
//         right="-50px"
//         width="200px"
//         height="200px"
//         bg="teal.500"
//         borderRadius="full"
//         opacity={0.2}
//       />

//       {/* Content */}
//       <VStack spacing={4} position="relative" zIndex={1}>
//         <Heading
//           as="h1"
//           fontSize={{ base: "4xl", md: "4xl", lg: "60px" }}
//           fontWeight="bold"
//           color="#072032"
//           lineHeight="0.3"
//           fontFamily='"Instrument Sans", sans-serif'
//         >
//           Let’s start for
//         </Heading>
//         <Heading
//           as="h2"
//           fontSize={{ base: "4xl", md: "4xl", lg: "60px" }}
//           fontWeight="bold"
//           color="#072032"
//           fontFamily='"Instrument Sans", sans-serif'
//         >
//           14 days free trial
//         </Heading>
//         <Text
//           fontSize={{ base: "md", md: "lg", lg: "20px" }}
//           color="#072032"
//           maxW="xl"
//           mx="auto"
//           fontFamily='"DM Sans", sans-serif'
          
          
//         >
//           Optimize your impact this holiday season with an AI-driven,
//           multichannel marketing strategy.
//         </Text>

//         {/* Buttons */}
//         <Stack
//           direction={{ base: "column", sm: "row" }}
//           spacing={4}
//           justify="center"
//           mt={6}
//         >
//           <Button
//              bg="#072032"
//              color="white"
//              borderRadius="15px"
//              px={{ base: 8, md: 8, lg: 10 }}
//              py={{ base: 6, md: 6, lg: 8 }}
//              fontWeight="bold"
//              border="2px solid #072032"
//              _hover={{ bg: "transparent", color: "#072032", borderColor: "black" }}
//              mt={{ base: "5px", md: "48px", lg: "5px" }}
//              width={{ base: "100%", md: "auto" }}
//           >
//             Signup now
//           </Button>
//           <Button
//             bg="transparent"
//             color="#072032"
//             borderRadius="15px"
//             px={{ base: 8, md: 8, lg: 10 }}
//             py={{ base: 6, md: 6, lg: 8 }}
//             fontWeight="bold"
//             border="2px solid #072032"
//             _hover={{ bg: "gray.100", color: "#072032", borderColor: "black" }}
//             mt={{ base: "5px", md: "48px", lg: "5px" }}
//             width={{ base: "100%", md: "auto" }}
            
//           >
//             Request for demo
//           </Button>
//         </Stack>
//       </VStack>
//     </Box>
//   );
// }


import { Box, Flex, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";

export default function CallToActionSection() {
  return (
    <Box
      width="100%"
      py={12}
      px={4}
      position="relative"
      maxW="container.xl"
      mx="auto"
      mt="5"
      bgGradient="linear(to-r, orange.300, orange.400, orange.400)" // Orange gradient background
      borderRadius="lg"
      overflow="hidden"
    >
      {/* Background Shapes */}
      <Box
        position="absolute"
        top="-50px"
        left="-50px"
        width="300px"
        height="300px"
        bg="orange.200"
        borderRadius="full"
        opacity={0.2}
      />
      <Box
        position="absolute"
        bottom="-50px"
        right="-50px"
        width="200px"
        height="200px"
        bg="orange.200"
        borderRadius="full"
        opacity={0.2}
      />

      {/* Main Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={8}
        zIndex={1}
        position="relative"
      >
        {/* Left Side - Contact Information */}
        <VStack
          align="flex-start"
          spacing={4}
          textAlign={{ base: "center", md: "left" }}
          maxW="lg"
          color="white"
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            lineHeight="1.2"
            fontFamily='"DM Sans", sans-serif'
          >
            Grand Amina Services LLC
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontFamily='"DM Sans", sans-serif'
          >
            We would love to hear from you, so feel free to contact us!
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            fontFamily='"DM Sans", sans-serif'
          >
            Call or Email!
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontFamily='"DM Sans", sans-serif'
          >
            612-540-0643 <br />
            Info@aingamn.com
          </Text>
          <Button
            bg="orange.600"
            color="white"
            borderRadius="10px"
            px={{ base: 6, md: 8 }}
            py={{ base: 4, md: 6 }}
            fontWeight="bold"
            _hover={{ bg: "orange.700" }}
            mt={{lg:"10px"}}
          >
            Send a Quick Message!
          </Button>
        </VStack>

        {/* Right Side - Company Logo */}
        <Box>
          <Image
            src="/AminaBg.png" // Replace with the actual path to your logo
            alt="Company Logo"
            maxW={{ base: "200px", md: "300px", lg: "400px" }}
            mx={{ base: "auto", md: "0" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
