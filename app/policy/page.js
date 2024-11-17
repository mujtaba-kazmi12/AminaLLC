
"use client";

import { Box, Container } from "@chakra-ui/react";
import ArrowSection from "./arrowSection";
import Navbar from "../components/navbar";
import ContactSection from "./formSections";
import Footer from "./Footer";
export default function ContactPage() {
  return (
    <Box bg="#fbf7f4" minHeight="100vh">
        <Container maxW="container.xl" position="relative" zIndex="1">
        <Navbar />
      </Container>
    
      <Box flex="1"> {/* Ensures that the content area expands to fill available space */}
        <ArrowSection />
        <ContactSection />
      </Box>
     <Footer/>
    </Box>
  );
}
