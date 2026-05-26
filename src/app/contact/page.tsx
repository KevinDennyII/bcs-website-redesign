import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner, ContentBlock, StatStrip } from "@/components/content/content-blocks";
import { trustStats } from "@/content/site-content";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page migration and form hardening plan for BCS.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className={`${styles.page} site-shell section`}>
      <header className={styles.hero}>
        <h1>Contact Bright Consulting Solutions</h1>
        <p className={styles.intro}>
          Inquiry routing is being rebuilt for prime contracting, teaming, and career interest paths with secure,
          server-validated submission handling.
        </p>
        <Image
          className={styles.image}
          src="/images/contact-legacy-510x375.jpg"
          alt="Legacy contact-related visual from BCS image audit."
          width={510}
          height={375}
        />
      </header>

      <ContentBlock
        title="Response workflow modernization"
        intro="The contact form and follow-up process are being redesigned for faster routing and stronger trust signals."
      >
        <StatStrip items={trustStats} />
      </ContentBlock>

      <ContentBlock
        title="Secure inquiry form"
        intro="This form uses server-side validation, a honeypot trap, and request throttling to reduce abuse while preserving accessibility."
      >
        <ContactForm />
      </ContentBlock>

      <CTABanner
        title="Need to discuss a contracting opportunity?"
        body="Use the contact channel to identify whether you are looking for a prime contractor, sub-contractor, teaming partner, or career opportunity."
        ctaHref="/bcs-team-portal"
        ctaLabel="Visit BCS Team Portal"
        note="Next enhancement: connect submissions to CRM/email workflow with audit logging."
      />
    </main>
  );
}
