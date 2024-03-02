import React from "react";

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <div className="headingContainer">
          <h1 className="heading1">Wellness og Fodpleje by dk.</h1>
          <h2 className="heading2">
            Vi tilbyder en professionel behandling indenfor fodpleje og massage.{" "}
            <br />
            Du er i trykke hænder hos os.
          </h2>
        </div>
      </div>

      <div className="container">
        <main>
          <div className="text-center pt-5 px-5 text-xl">
            <b>Åbningstider</b>
          </div>
          <div className="text-center pt-5 px-5 text-xl">
            <p>Mandag-Fredag: 10:00-18:00</p>
            <p>Lørdag: 10:00-15:00</p>
            <p>Søndag: Lukket</p>
            <br />
          </div>
        </main>
      </div>
    </>
  );
}
