import CompanyPage from "@/components/CompanyPage";

export default function TribalFloriaPage() {
  return (
    <CompanyPage
      name="Tribal Floria Sdn Bhd"
      industry="Agriculture"
      description="Sustainable agriculture and plantation management focused on high-value crops and eco-friendly farming."
      backgroundImage="/tribal-floria-hero.jpg"
      overview="Tribal Floria Sdn Bhd represents Triballiance Group's commitment to sustainable agriculture. Specializing in plantation management and high-value crop cultivation, Tribal Floria combines traditional agricultural wisdom with modern farming technologies to deliver exceptional yields while maintaining ecological balance. Our operations span multiple agricultural segments, from large-scale plantation management to specialized crop development, contributing to Malaysia's agricultural self-sufficiency and export capabilities."
      services={[
        "Plantation management & operations",
        "High-value crop cultivation",
        "Sustainable farming practices",
        "Agricultural technology integration",
        "Crop research & development",
        "Supply chain & distribution",
      ]}
      highlights={[
        { label: "Industry", value: "Agriculture" },
        { label: "Location", value: "Malaysia" },
        { label: "Focus", value: "Plantations" },
        { label: "Status", value: "Active" },
      ]}
    />
  );
}
