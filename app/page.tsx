
"use client";

import { useState, type FormEvent } from "react";

const INSTAGRAM = "https://www.instagram.com/belenblooms/";

function FlowerArt({
  variant = "pink",
}: {
  variant?: "pink" | "cream" | "sage";
}) {
  return (
    <div
      className={`floral-art floral-${variant}`}
      role="img"
      aria-label="Decorative illustrated floral bouquet"
    >
      <div className="floral-halo" />
      <div className="floral-stems">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className={`f-stem f-stem-${i + 1}`} />
        ))}
      </div>
      <div className="floral-leaves">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className={`f-leaf f-leaf-${i + 1}`} />
        ))}
      </div>
      <div className="floral-flowers">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className={`f-flower f-flower-${i + 1}`}>
            {Array.from({ length: 6 }, (_, j) => (
              <i key={j} className={`f-petal f-petal-${j + 1}`} />
            ))}
            <i className="f-center" />
          </span>
        ))}
      </div>
      <div className="floral-wrap floral-wrap-left" />
      <div className="floral-wrap floral-wrap-right" />
      <div className="floral-ribbon" />
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [bouquetType, setBouquetType] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const enquiry = [
    "Hi Belen Blooms! I'd love to enquire about a bouquet.",
    "",
    `Name: ${name || "Not provided"}`,
    `Bouquet type: ${bouquetType || "To discuss"}`,
    `Occasion: ${occasion || "Not specified"}`,
    `Preferred date: ${date || "Flexible"}`,
    `Budget: ${budget || "To discuss"}`,
    `Details: ${details || "None"}`,
    "",
    "I saw your 50% non-refundable deposit policy. Could you please confirm availability, pricing, and the next steps?",
  ].join("\n");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
    setCopied(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(enquiry);
      setCopied(true);
    } catch {
      const field = document.getElementById(
        "prepared-enquiry"
      ) as HTMLTextAreaElement | null;
      field?.focus();
      field?.select();
    }
  }

  return (
    <>
      <div className="concept-banner">
        INDEPENDENT WEBSITE CONCEPT · NOT AN OFFICIAL BELEN BLOOMS WEBSITE
      </div>

      <header className="site-header" id="top">
        <a href="#top" className="brand">
          <span className="brand-icon">✿</span>
          <span className="brand-name">
            belen <em>blooms</em>
            <small>HOUSTON · TEXAS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#story">Our World</a>
          <a href="#process">How to Order</a>
        </nav>

        <a href="#enquiry" className="nav-cta">
          ENQUIRE NOW <Arrow />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {[
          ["Collections", "#collections"],
          ["Our World", "#story"],
          ["How to Order", "#process"],
          ["Order Enquiry", "#enquiry"],
        ].map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={() => setMenuOpen(false)}
          >
            {label} <Arrow />
          </a>
        ))}
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span>✧</span> HOUSTON FLORAL BOUTIQUE CONCEPT
            </div>

            <h1>
              Flowers for
              <br />
              <em>every kind</em>
              <br />
              of love.
            </h1>

            <p>
              A little beauty for the moments that mean
              everything. Discover natural and eternal
              bouquet inspiration, thoughtfully imagined
              for your special occasions.
            </p>

            <div className="hero-actions">
              <a href="#collections" className="button button-rose">
                EXPLORE COLLECTIONS <Arrow />
              </a>
              <a href="#enquiry" className="text-link">
                CUSTOM ORDER ENQUIRY <Arrow />
              </a>
            </div>

            <div className="hero-bottom">
              <span>WITH LOVE, FROM HOUSTON</span>
              <span>EST. IN THE MOMENT ✿</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-caption top">
              <span>THE BLOOM JOURNAL</span>
              <span>VOL. 01</span>
            </div>
            <div className="hero-circle" />
            <FlowerArt variant="pink" />
            <div className="hero-seal">
              <span>MADE</span>
              <strong>with love</strong>
              <span>✿ ✿ ✿</span>
            </div>
            <div className="visual-caption bottom">
              <span>FLORAL LOVE NOTES</span>
              <span>HOUSTON, TX</span>
            </div>
          </div>
        </section>

        <div className="ribbon-strip">
          <span>FLOWERS FOR EVERY FEELING</span>
          <span>✿</span>
          <span>NATURAL & ETERNAL BLOOMS</span>
          <span>✿</span>
          <span>MADE FOR MEMORIES</span>
        </div>

        <section className="intro section-space" id="story">
          <div className="section-label">
            <span>01 — A LITTLE ABOUT THE FEELING</span>
            <span>LOVE IN FULL BLOOM</span>
          </div>

          <div className="intro-grid">
            <div>
              <span className="tiny-flower">✿</span>
              <h2>
                Some feelings
                <br />
                are better
                <br />
                <em>said with flowers.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                From thoughtful surprises to meaningful
                celebrations, flowers have a way of making
                ordinary moments unforgettable.
              </p>
              <p>
                This independent concept imagines a welcoming
                online home for Belen Blooms, where customers
                can discover bouquet inspiration and connect
                directly with the florist.
              </p>
              <a href="#collections" className="text-link">
                DISCOVER THE COLLECTIONS <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="collections section-space" id="collections">
          <div className="section-label">
            <span>02 — THE COLLECTIONS</span>
            <span>FIND YOUR FLOWERS</span>
          </div>

          <div className="collection-heading">
            <div>
              <span className="mini-heading">TWO WAYS TO SAY IT</span>
              <h2>
                Blooms that
                <br />
                <em>tell your story.</em>
              </h2>
            </div>
            <p>
              Natural and eternal bouquets are part of
              Belen Blooms&apos; advertised offerings.
              The illustrations below are concept artwork,
              not verified product photographs.
            </p>
          </div>

          <div className="collection-grid">
            <article className="collection-card">
              <div className="collection-art natural-art">
                <span className="collection-index">01 / NATURAL</span>
                <FlowerArt variant="cream" />
                <span className="art-script">fresh feelings</span>
              </div>
              <div className="collection-details">
                <div>
                  <span>FRESH FLOWER INSPIRATION</span>
                  <h3>Natural Bouquets</h3>
                  <p>
                    For the moments you want to celebrate
                    with fresh blooms.
                  </p>
                </div>
                <a href="#enquiry" aria-label="Enquire about natural bouquets">
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="collection-card">
              <div className="collection-art eternal-art">
                <span className="collection-index">02 / ETERNAL</span>
                <FlowerArt variant="sage" />
                <span className="art-script">lasting love</span>
              </div>
              <div className="collection-details">
                <div>
                  <span>ETERNAL FLOWER INSPIRATION</span>
                  <h3>Eternal Bouquets</h3>
                  <p>
                    A lasting gesture for someone
                    you&apos;ll always cherish.
                  </p>
                </div>
                <a href="#enquiry" aria-label="Enquire about eternal bouquets">
                  <Arrow />
                </a>
              </div>
            </article>
          </div>

          <div className="collection-footer">
            <span>ACTUAL DESIGNS & PRICES ARE CONFIRMED BY THE FLORIST</span>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              VIEW INSTAGRAM <Arrow />
            </a>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-decoration">✿</div>
          <span>THE LITTLE THINGS MATTER</span>
          <h2>
            A bouquet is a
            <br />
            <em>love note</em>
            <br />
            without words.
          </h2>
          <a href="#enquiry" className="button button-outline">
            SEND YOUR LOVE NOTE <Arrow />
          </a>
        </section>

        <section className="process section-space" id="process">
          <div className="section-label">
            <span>03 — HOW TO ORDER</span>
            <span>THOUGHTFULLY SIMPLE</span>
          </div>

          <div className="process-heading">
            <h2>
              Your bouquet
              <br />
              <em>begins here.</em>
            </h2>
            <p>
              A simple guide to preparing your enquiry.
              Confirm all final arrangements directly
              with Belen Blooms.
            </p>
          </div>

          <div className="steps">
            <article>
              <span className="step-number">01</span>
              <span className="step-icon">♡</span>
              <h3>Choose your flowers</h3>
              <p>
                Decide between natural or eternal bouquets,
                or ask about a custom idea.
              </p>
            </article>
            <article>
              <span className="step-number">02</span>
              <span className="step-icon">✎</span>
              <h3>Share your vision</h3>
              <p>
                Include the occasion, preferred date,
                budget, and any special details.
              </p>
            </article>
            <article>
              <span className="step-number">03</span>
              <span className="step-icon">✉</span>
              <h3>Message the florist</h3>
              <p>
                Send your enquiry on Instagram to confirm
                availability, pricing, and next steps.
              </p>
            </article>
          </div>

          <div className="deposit-note">
            <span className="deposit-icon">✧</span>
            <div>
              <strong>PLEASE NOTE THE DEPOSIT POLICY</strong>
              <p>
                Belen Blooms advertises a 50% non-refundable
                deposit requirement. Confirm the exact terms
                directly with the florist before paying.
              </p>
            </div>
          </div>
        </section>

        <section className="enquiry section-space" id="enquiry">
          <div className="section-label">
            <span>04 — YOUR FLORAL LOVE NOTE</span>
            <span>LET&apos;S MAKE SOMETHING LOVELY</span>
          </div>

          <div className="enquiry-grid">
            <div className="enquiry-copy">
              <span className="mini-heading">START A CONVERSATION</span>
              <h2>
                Tell us
                <br />
                what&apos;s
                <br />
                <em>blooming.</em>
              </h2>
              <p>
                Share the details of your bouquet idea.
                We&apos;ll prepare a message you can copy
                and send directly to Belen Blooms on Instagram.
              </p>

              <div className="instagram-box">
                <span>CONNECT WITH THE FLORIST</span>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @belenblooms <Arrow />
                </a>
              </div>

              <div className="location-note">
                <span>✿</span>
                HOUSTON, TEXAS 77034
              </div>
            </div>

            <div className="form-card">
              <div className="form-title">
                <span>YOUR CUSTOM BOUQUET ENQUIRY</span>
                <span>♡</span>
              </div>

              <form onSubmit={handleSubmit}>
                <label>
                  YOUR NAME *
                  <input
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label>
                  BOUQUET TYPE *
                  <select
                    required
                    value={bouquetType}
                    onChange={(e) => setBouquetType(e.target.value)}
                  >
                    <option value="">Choose a bouquet type</option>
                    <option>Natural bouquet</option>
                    <option>Eternal bouquet</option>
                    <option>Custom / not sure yet</option>
                  </select>
                </label>

                <label>
                  OCCASION
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    <option value="">Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Romantic surprise</option>
                    <option>Graduation</option>
                    <option>Just because</option>
                    <option>Other</option>
                  </select>
                </label>

                <div className="form-row">
                  <label>
                    PREFERRED DATE
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                  <label>
                    YOUR BUDGET
                    <input
                      maxLength={60}
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Budget range"
                    />
                  </label>
                </div>

                <label>
                  TELL US ABOUT YOUR IDEA *
                  <textarea
                    required
                    rows={5}
                    maxLength={1200}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Colors, size, flower preferences, special requests..."
                  />
                </label>

                <button type="submit" className="button button-rose submit-button">
                  PREPARE MY ENQUIRY <Arrow />
                </button>

                <p className="form-note">
                  This independent demo does not collect or
                  submit information. You choose whether
                  to send your message.
                </p>
              </form>

              {prepared && (
                <div className="prepared-message" role="status">
                  <h3>Your message is ready ♡</h3>
                  <p>
                    Copy the message below, open Instagram,
                    and paste it into a DM to @belenblooms.
                  </p>
                  <textarea
                    id="prepared-enquiry"
                    readOnly
                    rows={11}
                    value={enquiry}
                    aria-label="Prepared order enquiry"
                  />
                  <div className="message-actions">
                    <button type="button" onClick={handleCopy}>
                      {copied ? "✓ COPIED" : "COPY MESSAGE"}
                    </button>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OPEN INSTAGRAM ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="closing">
          <span>WITH LOVE, ALWAYS</span>
          <div className="closing-flower">✿</div>
          <h2>
            Every flower
            <br />
            <em>has a feeling.</em>
          </h2>
          <a href="#enquiry" className="button button-light">
            LET&apos;S CREATE YOUR BOUQUET <Arrow />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <a href="#top" className="footer-brand">
              belen <em>blooms</em> ✿
            </a>
            <p>Natural & eternal bouquets · Houston, Texas</p>
          </div>

          <div className="footer-links">
            <a href="#collections">COLLECTIONS</a>
            <a href="#story">OUR WORLD</a>
            <a href="#process">HOW TO ORDER</a>
            <a href="#enquiry">ORDER ENQUIRY</a>
          </div>

          <div className="footer-links">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
            <span>HOUSTON, TX 77034</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BELEN BLOOMS · INDEPENDENT WEBSITE CONCEPT</span>
          <span>NOT AFFILIATED WITH OR ENDORSED BY THE BUSINESS</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      <a href="#enquiry" className="mobile-cta">
        START YOUR BOUQUET ENQUIRY <Arrow />
      </a>
    </>
  );
}
