import React from "react";
import "./Service.css";
import HeaderNavbar from "../Navbar/HeaderNavbar";
import Footer from "../Footer/Footer";

const servicesData = [
  {
    title: "Web Development",
    description: "We build responsive, user-friendly, and SEO-optimized websites tailored to your needs.",
    features: ["Custom Website Design", "E-commerce Development", "SEO Optimization", "Mobile-Responsive Layouts"],
    benefits: ["Improve Online Presence", "Increase Customer Engagement", "Boost Conversions"],
    pricing: ["Basic: $1,000", "E-commerce: $2,500", "Custom: Contact Us"],
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "We develop high-quality mobile apps for both Android and iOS platforms.",
    features: ["Cross-Platform Apps", "API Integrations", "User-Friendly UI/UX"],
    benefits: ["Expand Customer Reach", "Improve Engagement", "Seamless Performance"],
    pricing: ["Basic: $5,000", "Advanced: $10,000+", "Custom: Contact Us"],
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description: "Our data-driven strategies boost your brand visibility and drive sales.",
    features: ["SEO", "Social Media Marketing", "Google Ads", "Email Campaigns"],
    benefits: ["Higher Search Rankings", "Increase Traffic", "Boost Conversions"],
    pricing: ["SEO Package: $500/month", "PPC Ads: $1,000/month", "Custom: Contact Us"],
    icon: "📊",
  },
];

const Services = () => {
  return (

    <>
   <HeaderNavbar />
    <div className="services-container" >
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We provide high-quality digital solutions tailored to your business needs.</p>
      </header>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <h3>Key Features:</h3>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <h3>Benefits:</h3>
            <ul>
              {service.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <h3>Pricing:</h3>
            <ul>
              {service.pricing.map((price, i) => (
                <li key={i}>{price}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Services;
