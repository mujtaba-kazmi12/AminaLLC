import { Box, Heading, Divider } from "@chakra-ui/react";

export default function ThemedHeading() {
  return (
    <Box
      textAlign="center"
      py={6}
      px={4}
      bg="white" // Background color to blend with the theme
      mt={{lg:"150px"}}
    >
    <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "40px" }}
              fontWeight="700"
              fontFamily='"Instrument Sans", Sans-serif'
              color="#1f1f57"
              lineHeight="1"
              mb={4}
            >
             Your Partner in Clinical Growth!
            </Heading>
      <Divider
        borderColor="gray.300" // Subtle divider to match the theme
        width="60px"
        mx="auto"
      />
    </Box>
  );
}
