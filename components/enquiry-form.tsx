"use client";

import { FormEvent, useState } from "react";

type EnquiryFormProps = { subject?: string; compact?: boolean };

export function EnquiryForm({ subject = "Anat Handmade Pottery enquiry", compact = false }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const date = String(data.get("date") || "");
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "");
    const body = [`Name: ${name}`, `Email: ${email}`, topic && `Enquiry: ${topic}`, date && `Preferred date/time: ${date}`, "", message].filter(Boolean).join("\n");
    window.location.href = `mailto:anat.pottery@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={`enquiry-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input name="name" autoComplete="name" required /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      {!compact && (
        <label>How can I help you?
          <select name="topic" defaultValue="General question / studio visit">
            <option>General question / studio visit</option>
            <option>I’m interested in a class</option>
            <option>I’m interested in purchasing pottery</option>
          </select>
        </label>
      )}
      {compact && <label>Preferred date/time (optional)<input name="date" type="text" placeholder="For example, Saturday morning" /></label>}
      <label>Your message<textarea name="message" rows={compact ? 4 : 6} /></label>
      <button className="button primary" type="submit">{compact ? "Enquire About This Class" : "Send Enquiry"}</button>
      {sent && <p className="form-note" role="status">Your email app has opened with the enquiry ready to send.</p>}
    </form>
  );
}
