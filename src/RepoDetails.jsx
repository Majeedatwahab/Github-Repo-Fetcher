import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import './index.css';
import { FaRegStar, FaRegEye, } from 'react-icons/fa';
const RepoDetails = () => {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { id } = params; 

 
  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://api.github.com/repos/Majeedatwahab/${id}`);
        const data = await res.json();
        setRepo(data);
      } catch (error) {
        console.error("Error fetching repository:", error);
      }

      setLoading(false);
    };

    fetchRepo();
  }, [id]);

  return (
    <div>
      <title>{repo.name || "Repo Details"}</title>
      {loading ? (
        <PulseLoader
          loading={loading}
          size={100}
          color="#fff"
          className="loader"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div 
        style={{ 
          border: "1px solid black", 
          borderRadius: "5px", 
          width: "90%", 
          maxWidth: "600px", 
          height: "auto",  
          padding: "20px", 
          marginTop: "40px", 
          marginLeft: "auto", 
          marginRight: "auto", 
          background: "#9F7AEA",
          boxSizing: "border-box", 
        }}
      >
        <h1 style={{ color: "black", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "15px" }}>{repo.name}</h1>
        
        {repo.description ? (
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1rem", marginBottom: "15px" }}>{repo.description}</p>
        ) : (
          <p style={{ color: "black", fontSize: "1rem", marginBottom: "15px" }}>There is no description for this repository.</p>
        )}
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}><FaRegStar className="icons" /> Stars: {repo.stargazers_count}</p>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}><FaRegEye className="icons" /> Watch: {repo.watchers}</p>
        </div>
        
        <p style={{ color: "black", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "15px" }}>Main Language: {repo.language === null ? "none" : repo.language}</p>
        
        <Link className="link" to="/" style={{ display: "block", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "1rem" }}>
          Go Back
        </Link>
      </div>
      
      )}
    </div>
  );
};

export default RepoDetails;
