export default function Page() {
  return (
    <>
      {/* Hero Video */}
      <div className="video-container">
        <video autoPlay muted playsInline>
          <source src="/videos/storyverse_logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Text Below Video */}
      <section className="hero-text">
        <h1>Storyverse</h1>
      </section>

      <main>
        <h1>enter. engage. become.</h1>
        <br />
        <p>
          Our mission is to craft deeply felt, nonlinear worlds where human
          experience guides the journey. At Storyverse, you don&rsquo;t just watch
          the story. You become it.
        </p>
        <div className="mission-video">
          <video controls width="100%">
            <source src="/videos/enter_engage_become.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      <footer>
        &copy; 2025 StoryverseNYC Inc. — All rights reserved
        <br />
        <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a>
      </footer>
    </>
  );
}
