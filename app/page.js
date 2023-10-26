import React from 'react'; 

export default function Home() {
  return (
    <>
      <div id="frontpage-photo">
        <div className="hero-bg">
          <h1 className="text-center pt-32 px-5 text-3xl">
            Wellness og Fodpleje by dk.
          </h1>
          <h2 className="text-center pt-5 px-5 text-xl">
            Vi tilbyder en professionel behandling indenfor fodpleje og massage. Du
            er i trykke hænder hos os.
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
            <p>Vi har lukket alle helligdage</p>
          </div>
        </main>
      </div>
    </>
  );
}
