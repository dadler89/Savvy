export default links => `<nav class="nav"><div class="navBar" id="active">

  ${links
    .map(
      link => `<li><a href="/${links.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
    </nav>`;
