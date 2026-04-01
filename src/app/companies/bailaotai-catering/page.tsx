import CompanyPage from "@/components/CompanyPage";

export default function BailaotaiCateringPage() {
  return (
    <CompanyPage
      name="Bailaotai Catering Sdn Bhd"
      industry="Food & Beverage"
      description="Premium catering and food service operations serving corporate clients, events, and institutions."
      overview="Bailaotai Catering Sdn Bhd is Triballiance Group's premium catering arm, delivering exceptional food service experiences for corporate events, private functions, institutional clients, and large-scale gatherings. Known for culinary excellence and impeccable presentation, Bailaotai combines diverse cuisines with professional service to create memorable dining experiences. Our team of experienced chefs and event coordinators ensure every event receives the highest standard of quality and attention to detail."
      services={[
        "Corporate catering services",
        "Event & function catering",
        "Institutional food services",
        "Menu design & customization",
        "Full-service event coordination",
        "Halal-certified food preparation",
      ]}
      highlights={[
        { label: "Industry", value: "F&B" },
        { label: "Location", value: "Malaysia" },
        { label: "Focus", value: "Catering" },
        { label: "Certification", value: "Halal" },
      ]}
    />
  );
}
