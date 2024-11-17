

"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Heading, Button, VStack, Divider } from "@chakra-ui/react";

export default function ScrollHighlightComponent() {
  const [activeSection, setActiveSection] = useState(null);

  // Define refs for each section
  const sectionRefs = {
    dataController: useRef(null),
    digitalServices: useRef(null),
    dataUpdate: useRef(null),
    disclosureOfData: useRef(null),
    rightsOfTheUser: useRef(null),
    dataSecurity: useRef(null),
  };

  const rightSectionRef = useRef(null);

  // Scroll event and observer for detecting which section is in view
  useEffect(() => {
    const observerOptions = {
      root: rightSectionRef.current, // root is the right section container
      threshold: 0.6, // 60% of the section must be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section ID
        }
      });
    }, observerOptions);

    // Observe each section for intersection
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer when component unmounts
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Handle menu item click: scroll to the corresponding section
  const handleMenuClick = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Set the active section immediately when a menu item is clicked
    setActiveSection(sectionId);
  };

  // Menu items data
  const menuItems = [
    { id: "dataController", label: "Data controller" },
    { id: "digitalServices", label: "Digital services" },
    { id: "dataUpdate", label: "Data update" },
    { id: "disclosureOfData", label: "Disclosure of data" },
    { id: "rightsOfTheUser", label: "Rights of the user" },
    { id: "dataSecurity", label: "Data security" },
  ];

  return (
    <Flex direction="row" maxW="container.xl" mx="auto" py={10} minH="100vh">
      {/* Left Sidebar */}
      <Box
        as="aside"
        w="25%"
        p={4}
        h="100vh"
        overflowY="auto"
        position="relative"
        display={{ base: "none", md: "block" }} // Hide on small screens
      >
        <VStack align="flex-start" spacing={4}>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="solid"
              bg={activeSection === item.id ? "blue.500" : ""}
              color={activeSection === item.id ? "white" : "gray.800"}
              fontWeight={activeSection === item.id ? "bold" : "bold"}
              borderRadius="xl"
              borderColor="gray.200"
              borderWidth={activeSection !== item.id ? 1 : 0}
              width="100%"
              fontFamily='"Instrument Sans", sans-serif'
              justifyContent="flex-start"
              py={8}
              px={6}
              onClick={() => handleMenuClick(item.id)}
              _hover={{
                bg: activeSection === item.id ? "blue.600" : "blue.600",
                color: "white",
              }}
              boxShadow={activeSection === item.id ? "lg" : "none"}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>

      {/* Right Content Section */}
      <Box
        as="main"
        w={{ base: "100%", md: "75%" }} // Full width on small screens
        p={8}
        h={{ base: "auto", md: "100vh" }} // Fixed height only on large screens
        overflowY={{ base: "visible", md: "auto" }} // No scroll on small screens, scroll on large screens
        ref={rightSectionRef}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        }}
      >
        <section ref={sectionRefs.dataController} id="dataController">
          <Heading mb={5} fontSize="2xl"  fontWeight="bold" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552">
            Data Controller
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            Below is a suggested outline for a privacy policy for a Software as a Service (SaaS)
            company. Keep in mind that privacy policies should be customized to reflect the specific
            practices and policies of your company, as well as any applicable laws and regulations.
            It’s also recommended to have legal counsel review your privacy policy to ensure
            compliance.
          </Text>
          <Text mb={8} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            We take reasonable measures to protect the security of your personal information and
            prevent unauthorized access, use, or disclosure. However, please be aware that no method
            of transmission over the internet or electronic storage is 100% secure.
          </Text>
          <Divider my={6} />
        </section>

        <section ref={sectionRefs.digitalServices} id="digitalServices">
          <Heading mb={5} fontSize="2xl" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552" fontWeight="bold">
            Digital Services
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            We take reasonable measures to protect the security of your personal information and
            prevent unauthorized access, use, or disclosure. However, please be aware that no method
            of transmission over the internet or electronic storage is 100% secure.
          </Text>
          <Divider my={6} />
        </section>

        <section ref={sectionRefs.dataUpdate} id="dataUpdate">
          <Heading mb={5} fontSize="2xl" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552" fontWeight="bold">
            Data Update
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            You have certain rights regarding your personal information, including the right to
            access, update, and delete your information. You may also have the right to restrict or
            object to certain processing activities. To exercise these rights, please contact us
            using the contact information provided below.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            Below is a suggested outline for a privacy policy for a Software as a Service (SaaS)
            company. Keep in mind that privacy policies should be customized to reflect the specific
            practices and policies of your company, as well as any applicable laws and regulations.
            It’s also recommended to have legal counsel review your privacy policy to ensure
            compliance.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            We take reasonable measures to protect the security of your personal information and
            prevent unauthorized access, use, or disclosure. However, please be aware that no method
            of transmission over the internet or electronic storage is 100% secure.
          </Text>
          <Divider my={6} />
        </section>

        <section ref={sectionRefs.disclosureOfData} id="disclosureOfData">
          <Heading mb={5} fontSize="2xl" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552" fontWeight="bold">
            Disclosure of Data
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or applicable laws. We will notify you of any material changes by posting the updated
            Privacy Policy on our website.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            Below is a suggested outline for a privacy policy for a Software as a Service (SaaS)
            company. Keep in mind that privacy policies should be customized to reflect the specific
            practices and policies of your company, as well as any applicable laws and regulations.
            It’s also recommended to have legal counsel review your privacy policy to ensure
            compliance.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            We take reasonable measures to protect the security of your personal information and
            prevent unauthorized access, use, or disclosure. However, please be aware that no method
            of transmission over the internet or electronic storage is 100% secure.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            Changes by posting the updated Privacy Policy on our website.
          </Text>
          <Divider my={6} />
        </section>

        <section ref={sectionRefs.rightsOfTheUser} id="rightsOfTheUser">
          <Heading mb={5} fontSize="2xl" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552" fontWeight="bold">
            Rights of the User
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us at [contact email or address].
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            This is the second workshop of the UX design methodology. Given all the conclusions drawn
            in the personae workshop, we will project ourselves towards the production of ideal user
            journeys. In other words: how each persona can achieve their goal.
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            From Traditional PR And Thought Leadership Campaigns To Storytelling And Creative Social
            Media Management We’ve Got You Covered. Something Is Not Your Average Order-Taking
            Vendor. We Are Proud To Be The Go-To Partner For Some Of The World’s Biggest Agencies And
            Brands Because They Trust Our Expertise.
          </Text>
          <Divider my={6} />
        </section>

        <section ref={sectionRefs.dataSecurity} id="dataSecurity">
          <Heading mb={5} fontSize="2xl" fontFamily='"Instrument Sans", sans-serif'
            color="#0f2552" fontWeight="bold">
            Data Security
          </Heading>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            This Privacy Policy is effective as of [date].
          </Text>
          <Text mb={4} lineHeight="taller" fontSize="lg" color="gray.500" fontFamily='"DM Sans", sans-serif'>
            This is the second workshop of the UX design methodology. Given all the conclusions drawn
            in the personae workshop, we will project ourselves towards the production of ideal user
            journeys. In other words: how each persona can achieve their goal.
          </Text>
          <Divider my={6} />
        </section>
      </Box>
    </Flex>
  );
}
