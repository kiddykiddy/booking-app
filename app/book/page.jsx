import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Book() {
  return (
    <>
      <div className="container pt-32">
        <main>
          <div className="massage-heading">Massage</div>
          <div className="allservice">
            <div className="description">
              <div className="price-info">
                Oil massage (60 min) 40 dallars.
                <Link
                  className="btn book"
                  href="https://calendly.com/wellnessogfodpleje/oliemassage-60-min?hide_gdpr_banner=1"
                >
                  Book now
                </Link>
              </div>
              <div className="price-info">
                Oil massage (90 min) 55 dollars.
                <Link
                  className="btn book "
                  href="https://calendly.com/wellnessogfodpleje/oliemassage-90-min?hide_gdpr_banner=1"
                >
                  Book now
                </Link>
              </div>
              <div className="price-info">
                Couples Couples oil massage (60 min) 75 dollars.
                <Link className="btn book" href="tel:+4526246614">
                  Call us
                </Link>
              </div>
              <div className="price-info">
                Couples Couples oil massage (90 min) 175 dollars.
                <Link className="btn book" href="tel:+4526246614">
                  Call us
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="fodpleje-heading">Foot Treament</div>
          <div className="allservice">
            <div className="description">
              <div className="price-info">
                Foot Treatment 35 dollars.
                <Link className="btn book" href="https://calendly.com/">
                  Book now
                </Link>
              </div>
              <div className="price-info">
                Foot Treament (30 min) 18 dollars.
                <Link className="btn book" href="https://calendly.com/">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
