import React, { useEffect, useState } from "react";
import './index.css';
import axios from 'axios';
import {
  Link,
  Button,
  Flex,
  Input,
  Spinner, // Import Spinner from Chakra UI
  Text,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import Error404 from "./Error404";

function Home() {
  const [repo, setRepo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const reposPerPage = 4;

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredRepos = repo.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
  );

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const fetchRepos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.github.com/users/Majeedatwahab/repos');
      setRepo(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setError('Error fetching repositories. Please try again later.'); // Set error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return (
      <Text color="red" textAlign="center" mt={4}>
        {error}
      </Text>
    );
  }

  
  

  const repoElements = currentRepos.map((repoElement) => (
    <div className="repo-card" key={repoElement.id}>
      <Link as={RouterLink} to={`/repodetails/${repoElement.name}`}>
        <h2 className="repo-name">{repoElement.name}</h2>
      </Link>
      
      <a
        href={repoElement.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color : "black",
          fontWeight: "bold",
          background: "#B2F5EA",
          padding: "5px",
          border: "none",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "20px",
          display: "inline-block",
          textAlign: "center"
        }}
      >
        View on GitHub
      </a>
    </div>
  ));

  return (
    <>
      <Input
        type="text"
        placeholder="Search repositories"
        className="search"
        value={search}
        onChange={handleSearchChange}
        mt={10}
        width={{ base: '100%', md: '50%' }}
        mx="auto"
        height="30px"
        padding="10px"
        borderRadius="10px"
        border="none"
        outline="none"
        background="#B2F5EA"
        color="black"
      />
      <section className="repo-container">
        {repoElements}
      </section>

      <Flex justify="center" mt={4}>
        {currentPage > 1 && (
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            mr={10}
            borderRadius="5px"
            backgroundColor="#B2F5EA"
            color="black"
            fontSize="15px"
            outline="none"
            border="none"
            padding="10px"
            fontWeight="bold"
          >
            Previous
          </Button>
        )}

        {indexOfLastRepo < filteredRepos.length && (
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            ml={10}
            borderRadius="5px"
            backgroundColor="#B2F5EA"
            color="black"
            fontSize="15px"
            outline="none"
            border="none"
            padding="10px"
            fontWeight="bold"
          >
            Next
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Home;
