import Link from "next/link";
import Image from "next/image";

// components/Business.jsx
const Business = ({ id, name, location, service, imageUrl }) => {
  return (
    <Link href="/service/[id]" as={`/service/${id}`}>
      <div className="business">
        <Image src={imageUrl} alt={name} className="business-image" />
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{service}</p>
      </div>
    </Link>
  );
};

export default Business;
