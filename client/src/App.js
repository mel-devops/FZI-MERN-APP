import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [publications, setPublications] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [error, setError] = useState("");

  const fetchPublications = async () => {
    try {
      const response = await axios.get("/publications");
      setPublications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPublication = async () => {
    try {
      if (!name || !author || !yearPublished) {
        setError("All fields are required");
        return;
      }

      const response = await axios.post("/publications", {
        Name: name,
        Author: author,
        YearPublished: parseInt(yearPublished),
      });
      setPublications([...publications, response.data]);
      setError("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="app">
        <h5>Publications</h5>
        <ul>
          {publications.map((publication) => (
            <li key={publication._id}>
              {publication.Name} by {publication.Author} ({publication.YearPublished})
            </li>
          ))}
        </ul>
        <h8>Add New Publication</h8>
        <form onSubmit={createPublication}>
          {error && <p>{error}</p>}
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <br />
          <label>
            Year Published:
            <input
              type="number"
              value={yearPublished}
              onChange={(e) => setYearPublished(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="greyButton">Add</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default App;
