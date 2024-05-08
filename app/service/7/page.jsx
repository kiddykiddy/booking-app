import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Book() {
  return (
    <>
      <Head>
        <title>Salon Services</title>
      </Head>
      <div className="container pt-8 md:pt-16 lg:pt-24">
        <main>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Explore Our Salon Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonServices.map((service) => (
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

const salonServices = [
  {
    id: 1,
    name: "Haircut",
    description: "Our expert stylists provide trendy haircuts for all styles.",
    price: 30,
    bookingLink:
      "https://calendly.com/salonservice/haircut-appointment?hide_gdpr_banner=1",
  },
  {
    id: 2,
    name: "Hair Color",
    description:
      "Transform your look with our professional hair coloring services.",
    price: 50,
    bookingLink:
      "https://calendly.com/salonservice/hair-color-appointment?hide_gdpr_banner=1",
  },
  {
    id: 3,
    name: "Manicure",
    description: "Pamper yourself with our luxurious manicure service.",
    price: 25,
    bookingLink:
      "https://calendly.com/salonservice/manicure-appointment?hide_gdpr_banner=1",
  },
  {
    id: 4,
    name: "Pedicure",
    description: "Treat your feet to a relaxing pedicure session.",
    price: 35,
    bookingLink:
      "https://calendly.com/salonservice/pedicure-appointment?hide_gdpr_banner=1",
  },
  // Add more salon services here if needed
];
