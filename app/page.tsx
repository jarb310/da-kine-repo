export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Shadic B</h1>
        <p className="tagline">a junior at UH Manoa studying SLS</p>
      </header>

      <main>
        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            Hi, I&apos;m Shadic. I&apos;m a junior at UH Manoa studying Second
            Language Studies, where I get to learn about how people pick up,
            use and live with more than one language. I&apos;m still figuring
            a lot out, and I&apos;m grateful for the chance to keep learning.
          </p>
        </section>

        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>
              Taking a course on second language acquisition and how learners
              develop a new language over time.
            </li>
            <li>
              Reading about bilingualism and how language use shifts across
              communities and settings.
            </li>
            <li>
              Joining conversation practice sessions on campus to keep my
              speaking skills sharp.
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {year} Shadic B</p>
      </footer>
    </>
  );
}
