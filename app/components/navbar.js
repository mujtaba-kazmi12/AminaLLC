


import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Hide,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  CloseButton,
  Image
  
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navItemsLeft = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
  ];

  const navItemsRight = [
    { name: "Policy", href: "/#" },
    { name: "Contact", href: "/#" },
  ];

  return (
    <Box>
      <Flex
        justify="space-between"
        align="center"
        py={4}
        px={{ base: 2, md: 8, lg: 10 }}
        position="relative"
        mt={{lg:"20px"}}
      >
        {/* Left Navigation Items */}
        <Hide below="lg">
          <Flex gap="5" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }} pl={{lg:'240px'}}>
            {navItemsLeft.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Text p={2} cursor="pointer" color="#1f1f57" fontSize={{lg:"18px"}}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Hide>

        {/* Logo in the Center */}
        <Image
  src="/AminaBg.png"
  alt="Sassly Logo"
  position="absolute"
  left="50%"
  transform="translateX(-50%)"
  width={{ base: "50px", md: "70px", lg: "90px" }} // Responsive widths
 
/>

        {/* Right Navigation Items */}
        <Hide below="lg">
          <Flex gap="5" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }} pr={{lg:'240px'}}>
            {navItemsRight.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Text p={2} cursor="pointer" color="#1f1f57" fontSize={{lg:"18px"}}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Hide>

        {/* Hamburger Icon for small screens */}
        <Hide above="md">
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            ref={btnRef}
          />
        </Hide>
      </Flex>

      {/* Drawer for small and medium screens */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center" justifyContent="space-between">
              Menu
              <CloseButton size="lg" onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {[...navItemsLeft, ...navItemsRight].map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Text onClick={onClose} p={2} cursor="pointer">
                    {item.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

