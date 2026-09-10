"use client";

import { FormEvent, useEffect, useState } from "react";

type EnquiryFormProps = { subject?: string; compact?: boolean; submitLabel?: string };

const FORM_ENDPOINT = "https://formsubmit.co/ajax/anat.pottery@gmail.com";

export function EnquiryForm({ subject = "Anat Handmade Pottery enquiry", compact = false, submitLabel }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [productName, setProductName] = useState("");
  const [topic, setTopic] = useState("General question / studio visit");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (compact) return;
    const product = new URL(window.location.href).searchParams.get("product");
    if (!product) return;
    setProductName(product);
    setTopic("I’m interested in purchasing pottery");
    setMessage(`I’m interested in ${product}. Please let me know if it is available.`);
  }, [compact]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const date = String(data.get("date") || "").trim();
    const selectedTopic = String(data.get("topic") || "").trim();
    const submittedMessage = String(data.get("message") || "").trim();
    const emailSubject = productName ? `Enquiry about ${productName}` : subject;

    const payload = new FormData();
    payload.append("name", name);
    payload.append("email", email);
    payload.append("_replyto", email);
    payload.append("_subject", emailSubject);
    payload.append("page", window.location.href);
    if (selectedTopic) payload.append("enquiry_type", selectedTopic);
    if (date) payload.append("preferred_date_time", date);
    if (submittedMessage) payload.append("message", submittedMessage);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Unable to send enquiry");

      form.reset();
      setMessage("");
      if (!compact) setTopic("General question / studio visit");
      window.location.assign("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`enquiry-form ${compact ? "compact" : ""}`} id="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input name="name" autoComplete="name" required disabled={status === "sending"} /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required disabled={status === "sending"} /></label>
      </div>
      {!compact && (
        <label>How can I help you?
          <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)} disabled={status === "sending"}>
            <option>General question / studio visit</option>
            <option>I’m interested in a class</option>
            <option>I’m interested in purchasing pottery</option>
          </select>
        </label>
      )}
      {compact && <label>Preferred date/time (optional)<input name="date" type="text" placeholder="For example, Saturday morning" disabled={status === "sending"} /></label>}
      <label>Your message (optional)<textarea name="message" rows={compact ? 4 : 6} value={message} onChange={(event) => setMessage(event.target.value)} disabled={status === "sending"} /></label>
      <button className="button primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel || (compact ? "Enquire About This Class" : "Send Enquiry")}
      </button>
      {status === "sent" && <p className="form-note" role="status">Thank you — your enquiry has been sent to Anat. She’ll get back to you shortly.</p>}
      {status === "error" && <p className="form-note" role="alert">Something went wrong. Please try again, or email Anat directly at anat.pottery@gmail.com.</p>}
    </form>
  );
}
