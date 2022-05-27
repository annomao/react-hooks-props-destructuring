import React from "react";
import MovieCard from "./MovieCard";
import SocialMedia from "./SocialMedia";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
      <SocialMedia links={socialLinks} />
    </div>
  );
}

export default App;
