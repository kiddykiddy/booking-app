import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Massage() {
  return (
    <>
      <Head>
        <title>Massage Services</title>
      </Head>
      <div className="container pt-8 md:pt-16 lg:pt-24">
        <main>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Explore Our Massage Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massageServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-800 font-bold mb-2">${service.price}</p>
                <CustomLink href={service.bookingLink}>Book Now</CustomLink>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const CustomLink = ({ href, children }) => (
  <Link href={href}>
    <div className="btn block w-full text-center">{children}</div>
  </Link>
);

const massageServices = [
  {
    id: 1,
    name: "Swedish Massage",
    description: "Relax and unwind with our classic Swedish massage.",
    price: 60,
    bookingLink:
      "https://calendly.com/massageservice/swedish-massage-appointment?hide_gdpr_banner=1",
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    description:
      "Target deep-seated muscle tension with our deep tissue massage.",
    price: 70,
    bookingLink:
      "https://calendly.com/massageservice/deep-tissue-massage-appointment?hide_gdpr_banner=1",
  },
  {
    id: 3,
    name: "Hot Stone Massage",
    description:
      "Experience the soothing warmth of hot stones combined with massage techniques.",
    price: 80,
    bookingLink:
      "https://calendly.com/massageservice/hot-stone-massage-appointment?hide_gdpr_banner=1",
  },
  {
    id: 4,
    name: "Aromatherapy Massage",
    description:
      "Enhance relaxation and mood with our aromatic essential oils massage.",
    price: 75,
    bookingLink:
      "https://calendly.com/massageservice/aromatherapy-massage-appointment?hide_gdpr_banner=1",
  },
  // Add more massage services here if needed
];
