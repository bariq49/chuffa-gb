export default function ChooseCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-trasparent rounded-lg shadow-lg p-6 text-left max-w-sm mx-auto border-r-white border-b-white border">
      <div className=" justify-left mb-4 bg-white inline-block p-2 rounded-lg text-5xl text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <h5 className="text-white leading-relaxed">{description}</h5>
    </div>
  );
}