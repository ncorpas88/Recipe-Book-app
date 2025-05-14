import logoGitHub from "../image/git.png";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <a href="https://github.com/ncorpas88/Recipe-Book-app.git">
          <img src={logoGitHub} alt="logoGit" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
