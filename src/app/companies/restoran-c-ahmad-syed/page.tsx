import CompanyPage from "@/components/CompanyPage";

export default function RestoranCAhmadSyedPage() {
  return (
    <CompanyPage
      name="Restoran C Ahmad & Syed"
      industry="Food & Beverage"
      backgroundImage="https://images.unsplash.com/photo-1625513123245-fcb02d69ad12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      description="Authentic Malaysian restaurant offering traditional cuisine with a modern twist."
      overview="Restoran C Ahmad & Syed is a beloved Malaysian dining establishment under the Triballiance Group, celebrating the rich and diverse culinary heritage of Malaysia. With a menu that spans traditional Malay, mamak, and fusion dishes, the restaurant offers an authentic dining experience that appeals to locals and visitors alike. Our commitment to fresh ingredients, traditional recipes, and warm hospitality has made us a favourite destination for food lovers seeking genuine Malaysian flavours in a welcoming atmosphere."
      services={[
        "Dine-in restaurant services",
        "Traditional Malaysian cuisine",
        "Fusion & contemporary dishes",
        "Private dining & group bookings",
        "Takeaway & delivery services",
        "Catering for special occasions",
      ]}
      highlights={[
        { label: "Industry", value: "F&B" },
        { label: "Cuisine", value: "Malaysian" },
        { label: "Type", value: "Restaurant" },
        { label: "Certification", value: "Halal" },
      ]}
    />
  );
}
