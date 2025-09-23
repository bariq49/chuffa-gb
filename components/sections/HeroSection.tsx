import { FaMapMarkerAlt } from "react-icons/fa";
import CustomLocation from "../fields/CustomLocation";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 2.png')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
       <CustomLocation
        label="Pickup location"
        placeholder="From"
        icon={<FaMapMarkerAlt className="text-gray-700" />} // or omit to use default
        apiKey={process.env.NEXT_PUBLIC_GMAPS_KEY!} // ← put your key in .env
        // apiKey="AIzaSyDaQ998z9_uXU7HJE5dolsDqeO8ubGZvDU" // (not recommended to hardcode)
        componentRestrictions="gb" // optional country filter
        locationBias={{ lat: 51.5074, lng: -0.1278, radius: 50000 }} // optional bias (London, 50km)
        onSelect={(place) => {
          console.log("Selected:", place.description, place.place_id);
        }}
      />
      </div>
    </section>
  );
}