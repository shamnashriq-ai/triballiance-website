import CompanyPage from "@/components/CompanyPage";

export default function IdeasparqRoboticsPage() {
  return (
    <CompanyPage
      name="Ideasparq Robotics Sdn Bhd"
      industry="Technology & Robotics"
      description="Pioneering robotics and automation solutions for industrial and commercial applications."
      backgroundImage="/ideasparq-robotics-hero.jpg"
      overview="Ideasparq Robotics Sdn Bhd is the technology and innovation engine of Triballiance Group. Specializing in robotics, automation, and AI-driven solutions, Ideasparq develops cutting-edge systems that enhance productivity, safety, and efficiency across industries. From industrial automation to educational robotics programs, Ideasparq is positioning Malaysia at the forefront of the Fourth Industrial Revolution, bridging the gap between human potential and technological advancement."
      services={[
        "Industrial robotics & automation",
        "AI & machine learning solutions",
        "Custom robotic systems design",
        "Educational robotics programs",
        "IoT integration & smart systems",
        "Robotics consulting & deployment",
      ]}
      highlights={[
        { label: "Industry", value: "Technology" },
        { label: "Location", value: "Malaysia" },
        { label: "Focus", value: "Robotics & AI" },
        { label: "Status", value: "Active" },
      ]}
    />
  );
}
