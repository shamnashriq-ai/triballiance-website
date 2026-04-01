import CompanyPage from "@/components/CompanyPage";

export default function WigoAirPage() {
  return (
    <CompanyPage
      name="Wigo Air Sdn Bhd"
      industry="Aviation"
      description="Aviation services and air travel solutions connecting communities and businesses across Malaysia."
      overview="Wigo Air Sdn Bhd is Triballiance Group's aviation venture, providing air travel solutions that connect communities, businesses, and opportunities. With a focus on safety, reliability, and exceptional customer experience, Wigo Air serves both commercial and charter aviation needs. The company is committed to making air travel more accessible while maintaining the highest standards of operational excellence and passenger comfort."
      services={[
        "Commercial air travel services",
        "Charter flight operations",
        "Aviation management & consulting",
        "Ground handling services",
        "Cargo & logistics support",
        "Pilot training & development",
      ]}
      highlights={[
        { label: "Industry", value: "Aviation" },
        { label: "Location", value: "Malaysia" },
        { label: "Focus", value: "Air Travel" },
        { label: "Status", value: "Active" },
      ]}
    />
  );
}
