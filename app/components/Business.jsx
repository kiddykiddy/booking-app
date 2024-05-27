// components/Business.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";

const Business = ({ id, name, location, service, imageUrl, rating }) => {
  return (
    <Link href="/service/[id]" as={`/service/${id}`}>
      <div className="business">
        <Image
          src={imageUrl}
          alt={name}
          className="business-image"
          width={500}
          height={500}
        />
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{service}</p>
        <StarRating rating={rating} />
      </div>
    </Link>
  );
};

export default Business;
