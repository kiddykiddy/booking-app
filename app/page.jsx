import React from "react";

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <div className="headingContainer">
          <h1 className="heading1">Wellness therapy</h1>
          <h2 className="heading2">
            We offer professional treatment in foot care and massage.
            <br />
            You are in good hands with us.
          </h2>
        </div>
      </div>

      <div className="container">
        <main>
          <div className="text-center pt-5 px-5 text-xl">
            <b>Opening time</b>
          </div>
          <div className="text-center pt-5 px-5 text-xl">
            <p>Manday-Friday: 10:00-18:00</p>
            <p>Saturday: 10:00-15:00</p>
            <p>Sunday: Close</p>
            <br />
          </div>
        </main>
      </div>
    </>
  );
}
