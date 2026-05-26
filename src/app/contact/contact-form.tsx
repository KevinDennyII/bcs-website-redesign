"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialContactFormState, submitContactForm } from "./actions";
import styles from "./contact-form.module.css";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.submit} type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit inquiry"}
    </button>
  );
}

export function ContactForm() {
  const [formState, action] = useActionState(submitContactForm, initialContactFormState);
  const fieldErrors = formState.fieldErrors ?? {};

  return (
    <form className={styles.form} action={action} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={`${styles.input} ${fieldErrors.name ? styles.inputError : ""}`.trim()}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
          {fieldErrors.name ? <p className={styles.errorText}>{fieldErrors.name}</p> : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles.input} ${fieldErrors.email ? styles.inputError : ""}`.trim()}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {fieldErrors.email ? <p className={styles.errorText}>{fieldErrors.email}</p> : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="inquiryType">
            Inquiry type
          </label>
          <select
            className={`${styles.select} ${fieldErrors.inquiryType ? styles.inputError : ""}`.trim()}
            id="inquiryType"
            name="inquiryType"
            defaultValue="general"
            required
          >
            <option value="general">General inquiry</option>
            <option value="prime-contractor">Looking for a prime contractor</option>
            <option value="sub-contractor">Looking for a sub-contractor</option>
            <option value="teaming-partner">Looking for a teaming partner</option>
            <option value="career-opportunity">Exploring career opportunities</option>
          </select>
          {fieldErrors.inquiryType ? <p className={styles.errorText}>{fieldErrors.inquiryType}</p> : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="organization">
            Organization
          </label>
          <input
            className={`${styles.input} ${fieldErrors.organization ? styles.inputError : ""}`.trim()}
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
          />
          {fieldErrors.organization ? <p className={styles.errorText}>{fieldErrors.organization}</p> : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone (optional)
          </label>
          <input
            className={`${styles.input} ${fieldErrors.phone ? styles.inputError : ""}`.trim()}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          {fieldErrors.phone ? <p className={styles.errorText}>{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${styles.textarea} ${fieldErrors.message ? styles.inputError : ""}`.trim()}
          id="message"
          name="message"
          required
        />
        {fieldErrors.message ? <p className={styles.errorText}>{fieldErrors.message}</p> : null}
        <p className={styles.helper}>Please include enough detail for routing and follow-up.</p>
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="companyWebsite">Company Website</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />

      {formState.status === "error" ? <p className={styles.statusError}>{formState.message}</p> : null}
      {formState.status === "success" ? <p className={styles.statusSuccess}>{formState.message}</p> : null}
    </form>
  );
}
