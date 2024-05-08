import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Book() {
  return (
    <>
      <Head>
        <title>Barber Services</title>
      </Head>
      <div className="container pt-8 md:pt-16 lg:pt-24">
        <main>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Welcome to Our Barber Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barberServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-800 font-bold mb-2">${service.price}</p>
                <Link href={service.bookingLink}>
                  <div className="btn block w-full text-center">Book Now</div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const barberServices = [
  {
    id: 1,
    name: "Basic Haircut",
    description: "A classic haircut service provided by our skilled barbers.",
    price: 20,
    bookingLink: "/barberservice/basic-haircut-appointment?hide_gdpr_banner=1",
  },
  {
    id: 2,
    name: "Beard Trim",
    description:
      "A precise beard grooming service to keep your facial hair looking sharp.",
    price: 15,
    bookingLink: "/barberservice/beard-trim-appointment?hide_gdpr_banner=1",
  },
  {
    id: 3,
    name: "Hot Towel Shave",
    description: "Experience the luxury of a traditional hot towel shave.",
    price: 25,
    bookingLink:
      "/barberservice/hot-towel-shave-appointment?hide_gdpr_banner=1",
  },
  {
    id: 4,
    name: "Hair Styling",
    description: "Get a stylish and modern hairdo from our expert stylists.",
    price: 30,
    bookingLink: "/barberservice/hair-styling-appointment?hide_gdpr_banner=1",
  },
  // Add more barber services here if needed
];
