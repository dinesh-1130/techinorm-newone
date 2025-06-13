import React from "react";
import ContactHome from "./components/ContactHome";
import ConnectTeam from "./components/ConnectTeam";
import DeliverSection from "./components/DeliverSection";
import ContactForm from "./components/ContactForm";
import QuoteSection from "./components/QuoteSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <ContactHome />
      <ConnectTeam />
      <DeliverSection />
      <ContactForm />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
