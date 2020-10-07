export default links => `<nav class="nav"><div class="navBar">


  ${links
    .map(
      link => `<li><a href="/${links.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
  </div>
  </nav>`;
