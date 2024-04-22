import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink, useMediaQuery } from '@chakra-ui/react';

function NavBar() {

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="#9F7AEA" color="white" p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
      >
        <Flex alignItems="center">
          <Heading as="h1" size="md" fontWeight="bold" color="black" mr={8} _hover={{ cursor: 'pointer', color: 'white' }}>
            MJ
          </Heading>
        </Flex>

        <Flex
          as="nav"
          alignItems="center"
          flexGrow={1}
          justifyContent={isLargerThan768 ? 'flex-end' : 'center'}
          mt={isLargerThan768 ? 0 : 4} // Adjust margin for small screens
        >
          <ul
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: isLargerThan768 ? 0 : '2rem', // Adjust margin for small screens
            }}
          >
            <li style={{ marginRight: '1rem', marginTop: '1rem' }}>
              <ChakraLink
                as={RouterLink}
                to="/"
                color="black"
                fontWeight='bold'
                textDecoration="none"
                _hover={{ color: 'white', cursor: 'pointer' }}
              >
                Home
              </ChakraLink>
            </li>

            <li style={{ marginRight: '1rem', marginTop: '1rem' }}>
              <ChakraLink
                as={RouterLink}
                to="/error404"
                color="black"
                fontWeight='bold'
                textDecoration="none"
                _hover={{ color: 'white', cursor: 'pointer' }}
              >
                Error404
              </ChakraLink>
            </li>

           
            <li style={{ marginRight: '1rem', marginTop: '1rem' }}>
              <ChakraLink
                as={RouterLink}
                to="/errorboundary"
                color="black"
                fontWeight='bold'
                textDecoration="none"
                _hover={{ color: 'white', cursor: 'pointer' }}
              
              >
                TestError
              </ChakraLink>
            </li>
          </ul>
          
        </Flex>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
