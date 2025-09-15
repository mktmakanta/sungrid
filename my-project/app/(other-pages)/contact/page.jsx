import React from "react";
import ContactPage from "@/components/Contact";
import SectionsHeader from "@/components/SectionsHeader";
import siteMetadata from "../../metadata";

export const metadata = siteMetadata.contact;

const Contact = () => {
  return (
    <>
      <SectionsHeader text={"Contact Us"} image={"fourth"} />
      <ContactPage />
    </>
  );
};

export default Contact;
