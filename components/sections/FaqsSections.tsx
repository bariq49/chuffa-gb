import CustomCard from "../cards/CustomFaqs";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqsSectionProps {
  faqData?: FAQItem[];
}

export default function FaqsSection({ faqData }: FaqsSectionProps) {
  const defaultFaqData = [
    {
      question: "HOW DO I BOOK A CHAUFFEUR SERVICE IN LONDON?",
      answer: "It's straightforward. Pick your pickup and drop-off spots, select a vehicle, and your ride is confirmed and easy to track."
    },
    {
      question: "WHAT'S THE DIFFERENCE BETWEEN EXECUTIVE AND BUSINESS-CLASS CHAUFFEUR SERVICE?",
      answer: "Executive service offers a premium sedan, ideal for solo travelers or small groups. Business-class provides an even higher level of luxury, with a more spacious and exclusive vehicle."
    },
    {
      question: "CAN I CANCEL OR RESCHEDULE MY BOOKING?",
      answer: "Yes, you can cancel or reschedule your booking free of charge up to 24 hours before your scheduled pickup time. Cancellations made within 24 hours may be subject to a fee."
    },
    {
      question: "DO YOU OFFER AIRPORT TRANSFERS?",
      answer: "Absolutely. We provide reliable and punctual airport transfer services to and from all major London airports. We track your flight to ensure we're there when you land, even if your flight is delayed."
    },
    {
      question: "HOW DO I KNOW MY CHAUFFEUR IS LEGITIMATE?",
      answer: "All our chauffeurs are fully licensed, insured, and undergo rigorous background checks. We provide you with your chauffeur's details and vehicle information before your ride for your peace of mind."
    },
  ];

  const dataToUse = faqData && faqData.length > 0 ? faqData : defaultFaqData;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl max-w-7xl mx-auto">
          {dataToUse.map((item, index) => (
            <CustomCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}