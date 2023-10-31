import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Service() {
  return (
    <>
      <Head>
        {/* Include Calendly CSS and script in the head */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </Head>
      <div className="container pt-32">
        <main>
          <div className="text-center pt-5 px-5 text-2xl service-heading">
            Find den rigtige type behandling til dig.
          </div>
          <div className="text-center pt-5 px-5 text-xl service-heading">
            Vi er specialiseret i fodpleje og thai massage teknikker. <br />
            Her finder du den rigtige behandling for dig. <br />
          </div>
          <div className="massage-heading pt-5">Massage</div>
          <div className="allservice">
            <Image
              src="/massage-oil.png"
              width={100}
              height={80}
              alt="Massage Oil"
              className="service-img"
            />
            <div className="description">
              <div className="text-center pt-5 px-5 text-2xl">Oliemassage</div>
              <div className="text-info">
                Vi tilbyder en afslappende fuld krops Oliemassage hvor du vil
                opleve at din krop finder absolut ro. Behandlingen anbefales
                hvis du oplever stress eller har et område på din krop som er
                spændt op. Oliemassagen er en blidere form for massage. Olien er
                med til at afhjælpe tør og uren hud og gavner vitaliteten og
                udstrålingen af din hud. Vores tekniker stammer fra den
                klassiske Thai massage, og derfor vil du opleve at dine muskler
                slappe helt af efter din behandling. Vores Oliemassage er oplagt
                til par som gerne vil forkæle hinanden.
              </div>
              <div className="normal-par-Container">
                <div className="normalContainer">
                  <div className="service-title">Oliemassage</div>
                  <div className="price-info">
                    <span className="minutes">60 min</span>{" "}
                    <span className="price">400 kr.</span>
                    <Link
                      className="btn book"
                      href="https://calendly.com/wellnessogfodpleje/oliemassage-60-min?hide_gdpr_banner=1"
                    >
                      Book nu
                    </Link>
                  </div>
                  <div className="price-info">
                    <span className="minutes">90 min</span>{" "}
                    <span className="price">550 kr.</span>
                    <Link
                      className="btn book"
                      href="https://calendly.com/wellnessogfodpleje/oliemassage-90-min?hide_gdpr_banner=1"
                    >
                      Book nu
                    </Link>
                  </div>
                </div>

                <div className="parContainer">
                  <div className="service-title">Par oliemassage</div>
                  <div className="price-info">
                    <span className="minutes">60 min</span>{" "}
                    <span className="price">750 kr.</span>
                    <Link className="btn book" href="tel:+4526246614">
                      Ring ind for at booke
                    </Link>
                  </div>
                  <div className="price-info">
                    <span className="minutes">90 min</span>{" "}
                    <span className="price">1.075 kr.</span>
                    <Link className="btn book" href="tel:+4526246614">
                      Ring ind for at booke
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="fodpleje-heading">Fodpleje</div>
          <div className="allservice">
            <Image
              src="/treatment-foot.png"
              width={100}
              height={80}
              alt="Foot Treatment"
              className="service-img"
            />
            <div className="description">
              <div className="text-center pt-5 px-5 text-2xl">
                Fodbehandling
              </div>
              <div className="text-info">
                Vores Fodbehandling til dig som ønsker det bedste for dine
                fødder. Ved fodbehandlingen vil du få et fodbad, fjernelse af
                hård hud, fjernelse af eventuelle ligtorne. Dine fødder vil
                føles som helt nye, og de vil takke dig efter vores behandling.
                Vi slutter af med en fodmassage. Her anvendes thai teknikkerne
                ved at følge medianbanerne, dette vil stimulere
                blodcirkulationen og nervesystemet.
              </div>
              <div className="service-title">Fodbehandling</div>
              <div className="price-info">
                <span className="price">350 kr.</span>
                <Link
                  className="btn book"
                  href="https://calendly.com/wellnessogfodpleje/fodbehandling?hide_gdpr_banner=1"
                >
                  Book nu
                </Link>
              </div>
            </div>
          </div>
          <div className="allservice">
            <Image
              src="/massage-foot.png"
              width={100}
              height={80}
              alt="Foot Massage"
              className="service-img"
            />
            <div className="description">
              <div className="text-center pt-5 px-5 text-2xl">Fodmassage</div>
              <div className="text-info">
                Ved fodmassage anvender vi thai teknikker ved at følge
                medianbanerne, dette vil stimulere blodcirkulationen og
                nervesystemet. Ved at anvende trykterapi på foden vil du opleve
                en krop i balance. Nervesystemet i foden løber gennem hele
                kroppen, og derfor vil fodmassagen være med til at helbrede
                eller forebygge sygdom. Massagen forgår ved først at massere
                under- og oversidderne af fødderne, for derefter at massere
                underbenene.
              </div>
              <div className="service-title">Fodmassage</div>
              <div className="price-info">
                <span className="minutes">30 min</span>
                <span className="price">180 kr.</span>
                <Link
                  className="btn book"
                  href="https://calendly.com/wellnessogfodpleje/fodmassage-30-min?hide_gdpr_banner=1"
                >
                  Book nu
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
