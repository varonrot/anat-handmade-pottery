export const goodToKnowFaqs = [
  ["I’ve never touched clay before; is that okay?", "Absolutely. The workshops are designed for beginners and focus on the joy of the process. Shorter nails make working with clay easier, and it is best to leave rings and bracelets at home."],
  ["What should I wear to class?", "Wear comfortable clothes and shoes you don’t mind getting dusty. Clay washes out easily, and aprons are provided."],
  ["Where is the studio located?", "The garden studio is in South Ealing, London W5, close to South Ealing and Northfields stations and served by the 65, E2 and E3 buses. Full arrival details are sent once your booking is confirmed."],
  ["Can I book a class as a gift?", "Yes. Digital or physical gift vouchers are available for classes or a chosen value."],
  ["When can I collect my pots?", "Pottery needs to dry and be fired twice, so finished work is usually ready in 3–4 weeks. Pieces can be stored for up to two months."],
  ["What is the booking and cancellation policy?", "If you cannot make your session, get in touch as soon as possible to reschedule or arrange a make-up session. Refunds are available up to 48 hours before the class."],
  ["Do you ship pottery?", "If you are visiting from outside London and cannot collect your pieces, shipping can be arranged for an additional packaging and postage fee."],
] as const;

export function GoodToKnow({ showHeading = true }: { showHeading?: boolean }) {
  return <section className="faq-list contact-good-to-know section-shell">
    {showHeading && <div className="section-heading">
      <p className="eyebrow">Before your visit</p>
      <h2>Good to Know</h2>
    </div>}
    {goodToKnowFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
  </section>;
}
