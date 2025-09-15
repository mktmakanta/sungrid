import siteMetadata from "@/lib/metadata";
import React from "react";
import ContactPage from "@/components/Contact";
import SectionsHeader from "@/components/SectionsHeader";

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
