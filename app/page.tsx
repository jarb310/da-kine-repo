export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Shadic B</h1>
        <p className="tagline">a junior at UH Manoa studying SLS</p>
      </header>

      <main>
        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>SLS 480E</li>
            <li>my AIR project</li>
            <li>learning to speak in conversational Japanese</li>
          </ul>
        </section>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            Hi, I&apos;m Shadic. I&apos;m a junior at UH Manoa studying Second
            Language Studies, where I get to learn about how people pick up,
            use and live with more than one language. I&apos;m still figuring
            a lot out, and I&apos;m grateful for the chance to keep learning.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; {year} Shadic B</p>
        <p>Built with Claude Code</p>
      </footer>
    </>
  );
}
