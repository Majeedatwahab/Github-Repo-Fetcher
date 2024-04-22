import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <Box 
      textAlign="center" 
      mt={20} 
      background="#9F7AEA" 
      minHeight="100vh"  
      display="flex" 
      flexDirection="column" 
      justifyContent="center"  
      alignItems="center"       
      >
      <Heading as="h1" size="xl" mb={4}>
        Error 404 - Page Not Found
      </Heading>
      <Text fontSize="xl" mb={4}>
        Oops! The page you are looking for does not exist.
      </Text>
        
    </Box>
  );
}

export default Error404;
