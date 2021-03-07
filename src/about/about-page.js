import animationImage from "../images/beeple-potus-3012.gif";
import "./about-page.css";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <h2>Vicki Lei</h2>
      <p>Weclome to my HTML Webpage!</p>

      <p>Hi 🐞</p>

      <p>Some things I've been doing lately:</p>

      <ul>
        <li>Trying to make Pecan Pie</li>
        <li>Going back to the gym</li>
        <li>Learn how to play a ukulele</li>
      </ul>

      <p>Some languages I am going to be using:</p>

      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
      </ul>

      <p>
        An app I used daily is
        <a href="https://www.spotify.com/us/" target="_blank" title="music">
          Spotify
        </a>
      </p>

      <p>
        Link to my
        <a href="https://www.linkedin.com/in/yongxin-lei/" title="linkedin">
          Linkedin
        </a>
      </p>

      <img src={animationImage} alt="Some cool art" width="300" />
    </main>
  );
}

export default AboutPage;
