import React from "react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="hero-bg"></div>

      <div className="container">
        <main>
          <div className="text-center text-xl">
            <h1 className="home-heading">Book Wellness Services near you</h1>
            <SearchBar />
          </div>
        </main>
      </div>
    </>
  );
}
