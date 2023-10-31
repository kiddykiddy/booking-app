import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Book() {
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
          <div className="massage-heading">Massage</div>
          <div className="allservice">
            <div className="description">
              <div className="price-info">
                Oliemassage (60 min) 400 kr.
                <Link
                  className="btn book"
                  href="https://calendly.com/wellnessogfodpleje/oliemassage-60-min?hide_gdpr_banner=1"
                >
                  Book nu
                </Link>
              </div>
              <div className="price-info">
                Oliemassage (90 min) 550 kr.
                <Link
                  className="btn book "
                  href="https://calendly.com/wellnessogfodpleje/oliemassage-90-min?hide_gdpr_banner=1"
                >
                  Book nu
                </Link>
              </div>
              <div className="price-info">
                Par oliemassage (60 min) 750 kr.
                <Link className="btn book" href="tel:+4526246614">
                  Ring ind for at booke
                </Link>
              </div>
              <div className="price-info">
                Par oliemassage (90 min) 1.075 kr.
                <Link className="btn book" href="tel:+4526246614">
                  Ring ind for at booke
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="fodpleje-heading">Fodpleje</div>
          <div className="allservice">
            <div className="description">
              <div className="price-info">
                Fodbehandling 350 kr.
                <Link
                  className="btn book"
                  href="https://calendly.com/wellnessogfodpleje/fodbehandling?hide_gdpr_banner=1"
                >
                  Book nu
                </Link>
              </div>
              <div className="price-info">
                Fodmassage (30 min) 180 kr.
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
