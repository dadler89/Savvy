// export default () => `<nav class="nav"><div class="navBar">
// <a class="active" href="index.html">Starting Goalies</a>
// <a href="lineup.html">Line-up Tweets</a>
// </div>
// </nav>
// <nav>
// <div class="container-2">
//   <div class="navBar2">
//     <a class="active" href="lineup.html">Line-up Tweets</a>
//     <a href="index.html">Starting Goalies</a>
//   </div>
//   </nav>`;

export default (links) => `
<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  ${links
    .map(
      (link) => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
  </ul>
</nav>`;
