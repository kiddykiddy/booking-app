"use client"; // SearchBar.js
import { useState, useEffect } from "react";
import Business from "./Business";
import businessData from "./businessData"; // Import the business data

const SearchBar = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [searched, setSearched] = useState(false);
  const [availableLocations, setAvailableLocations] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    // Set businesses state with the imported data
    setBusinesses(businessData);

    // Extract unique locations and services from the imported data
    const uniqueLocations = [
      ...new Set(businessData.map((business) => business.location)),
    ];
    const uniqueServices = [
      ...new Set(businessData.map((business) => business.service)),
    ];
    setAvailableLocations(uniqueLocations);
    setAvailableServices(uniqueServices);
  }, []);

  useEffect(() => {
    // If either service or location changes, reset searched state
    setSearched(false);
  }, [service, location]);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Reset the selected service only if it is not available in the new location
    if (service && !availableServices.includes(service)) {
      setService("");
    }

    // Filter businesses based on the selected location
    const filteredBusinesses = businesses.filter(
      (business) => business.location === selectedLocation
    );

    // Extract unique services from the filtered businesses
    const filteredServices = [
      ...new Set(filteredBusinesses.map((business) => business.service)),
    ];

    // Update service dropdown options
    setAvailableServices(filteredServices);
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setService(selectedService);

    // Reset the selected location only if it is not available for the new service
    if (location && !availableLocations.includes(location)) {
      setLocation("");
    }

    // Filter locations based on the selected service
    const filteredLocations = businesses
      .filter((business) => business.service === selectedService)
      .map((business) => business.location);

    // Update location dropdown options
    setAvailableLocations([...new Set(filteredLocations)]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic based on selected service and location
    if (service && location) {
      // Set searched state to true
      setSearched(true);
    } else {
      // Inform the user to select both service and location
      alert("Please select both service and location");
    }
  };

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <select value={service} onChange={handleServiceChange}>
            <option value="">Choose Service</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <select value={location} onChange={handleLocationChange}>
            <option value="">Choose Location</option>
            {availableLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Render businesses only if search is executed */}
      {searched && (
        <div className="business-list">
          {businesses
            .filter(
              (business) =>
                business.service === service && business.location === location
            )
            .map((business) => (
              <Business
                key={business.id}
                id={business.id}
                name={business.name}
                location={business.location}
                service={business.service}
                imageUrl={business.imageUrl}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
