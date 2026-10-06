import { Arrow } from "./Icons";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-inner">
        <div>
          <h2>Let’s connect.</h2>
          <p>Open to sales and solutions engineering opportunities.</p>
        </div>
        <a className="contact-link" href="mailto:matthewlvw@gmail.com">
          matthewlvw@gmail.com <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
