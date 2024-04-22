// ErrorBoundary.jsx

import React, { Component } from 'react';
import {Box, Heading, Text} from '@chakra-ui/react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
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
        <Heading as="h1" size="2xl" mb={4}>
        Something went wrong.
        </Heading>
        <Text fontSize="2xl" mb={4}>
        Please try again later.
        </Text>
          
      </Box>
        
      );
    }
  
    return this.props.children;
  }
}
export default ErrorBoundary