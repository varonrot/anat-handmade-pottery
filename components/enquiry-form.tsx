"use client";

import { FormEvent, useEffect, useState } from "react";

type EnquiryFormProps = { subject?: string; compact?: boolean };

export function EnquiryForm({ subject = "Anat Handmade Pottery enquiry", compact = false }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);
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

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const date = String(data.get("date") || "");
    const selectedTopic = String(data.get("topic") || "");
    const submittedMessage = String(data.get("message") || "");
    const body = [`Name: ${name}`, `Email: ${email}`, selectedTopic && `Enquiry: ${selectedTopic}`, date && `Preferred date/time: ${date}`, "", submittedMessage].filter(Boolean).join("\n");
    const emailSubject = productName ? `Enquiry about ${productName}` : subject;
    window.location.href = `mailto:anat.pottery@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={`enquiry-form ${compact ? "compact" : ""}`} id="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input name="name" autoComplete="name" required /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      {!compact && (
        <label>How can I help you?
          <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
            <option>General question / studio visit</option>
            <option>I’m interested in a class</option>
            <option>I’m interested in purchasing pottery</option>
          </select>
        </label>
      )}
      {compact && <label>Preferred date/time (optional)<input name="date" type="text" placeholder="For example, Saturday morning" /></label>}
      <label>Your message<textarea name="message" rows={compact ? 4 : 6} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
      <button className="button primary" type="submit">{compact ? "Enquire About This Class" : "Send Enquiry"}</button>
      {sent && <p className="form-note" role="status">Your email app has opened with the enquiry ready to send.</p>}
    </form>
  );
}
