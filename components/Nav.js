
  export default links => `
  <nav class="navBar">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${links
      .map(
        link => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join("")}
    </ul>
  </nav>`;
