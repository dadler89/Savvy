export default links => `<nav class="nav"><div class="navBar">
<a class="active" href="index.html">Starting Goalies</a>
<a href="lineup.html">Line-up Tweets</a>
</div>
</nav>
<nav>
<div class="container-2">
  <div class="navBar2">
  ${links
    .map(
      link => `<li><a href="/${links.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
  </div>
  </nav>`;
