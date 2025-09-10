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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Chuffa GB</h1>
        <p className="text-xl md:text-2xl mb-8">Premium transportation solutions for your needs</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Book Now
          </button>
          <button className="bg-transparent hover:bg-white hover:text-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}