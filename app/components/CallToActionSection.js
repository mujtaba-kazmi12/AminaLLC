


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
        direction={{ base: "column", md: "row" }} // Column for small screens, row for large screens
        align={{ base: "center", md: "center" }} // Center alignment for both small and large screens
        justify="space-between" // Keeps original spacing for large screens
        gap={8}
        zIndex={1}
        position="relative"
      >
        {/* Left Side - Contact Information */}
        <VStack
          align={{ base: "center", md: "flex-start" }} // Center on small screens, left-align for large screens
          spacing={4}
          maxW="lg"
          color="white"
          textAlign={{ base: "center", md: "left" }} // Center text on small screens, left-align for large screens
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
            mt={{ lg: "10px" }}
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
            mx={{ base: "auto", md: "0" }} // Centered for small screens, keeps original alignment for large screens
          />
        </Box>
      </Flex>
    </Box>
  );
}
