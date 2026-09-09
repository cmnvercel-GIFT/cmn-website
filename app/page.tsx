export default function Home() {
  return (
    <main className="page">
      <div className="backgroundGlow glowOne" />
      <div className="backgroundGlow glowTwo" />

      <header className="header">
        <div className="brand">
          <div className="brandMark">CMN</div>
          <div>
            <div className="brandTitle">Center for Moral Nexus</div>
            <div className="brandSub">GIFT University</div>
          </div>
        </div>
        <div className="status">COMING SOON</div>
      </header>

      <section className="hero">
        <div className="eyebrow">GIFT UNIVERSITY</div>
        <h1>Center for<br /><span>Moral Nexus</span></h1>
        <p className="lead">
          A dedicated platform for ideas, dialogue, research, and initiatives
          that connect moral values with contemporary society.
        </p>

        <div className="constructionCard">
          <div className="icon" aria-hidden="true">
            <span>✦</span>
          </div>
          <div>
            <h2>Website Under Construction</h2>
            <p>
              The Center for Moral Nexus website is currently being prepared.
              Our official website will be available soon.
            </p>
          </div>
        </div>

        <div className="url">
          <span>Official website</span>
          <strong>cmn.gift.edu.pk</strong>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} GIFT University. All rights reserved.</div>
        <div>Center for Moral Nexus</div>
      </footer>
    </main>
  );
}
