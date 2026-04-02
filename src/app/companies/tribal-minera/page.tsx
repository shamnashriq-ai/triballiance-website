import CompanyPage from "@/components/CompanyPage";

export default function TribalMineraPage() {
  return (
    <CompanyPage
      name="Tribal Minera Sdn Bhd"
      industry="Mining & Minerals"
      backgroundImage="/tribal-minera-hero.jpg"
      description="Leading responsible mining operations and mineral resource development across Malaysia."
      overview="Tribal Minera Sdn Bhd is Triballiance Group's mining and mineral resources arm, specializing in the exploration, extraction, and processing of high-value mineral deposits. With a commitment to responsible mining practices, Tribal Minera balances industrial productivity with environmental stewardship, employing modern techniques and technologies to maximize resource value while minimizing ecological impact. Our operations contribute significantly to Malaysia's industrial supply chain, providing essential raw materials for construction, manufacturing, and export markets."
      services={[
        "Mineral exploration & prospecting",
        "Mining operations & extraction",
        "Mineral processing & refining",
        "Environmental compliance & reclamation",
        "Geological surveying & assessment",
        "Resource management & planning",
      ]}
      highlights={[
        { label: "Industry", value: "Mining" },
        { label: "Location", value: "Malaysia" },
        { label: "Focus", value: "Minerals" },
        { label: "Status", value: "Active" },
      ]}
    />
  );
}
