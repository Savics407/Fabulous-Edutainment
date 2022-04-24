class Mobile extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `
      
<div class="mobile-menu">
    <div class="logo">
        <a href="https://fabulousedutainment.com"><img src="images/FE-logo.png" alt=""></a>

        <div class="close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <ul class="navigation a">
        <li class="nav_item"><a href="https://fabulousedutainment.com" class="active">Home</a></li>
        <li class="nav_item"><a href="about.html">About</a></li>
        <li class="nav_item"><a href="https://fabulousedutainment.com">Talent School</a></li>
        <li class="nav_item"><a href="https://fabulousedutainment.com">Goat9ja</a></li>
        <li class="nav_item"><a href="https://fabulousedutainment.com">Blog</a></li>
        <li class="nav_item"><a href="contact.html">Contact</a></li>
    </ul>
</div>
<div class="mobile-menu-overlay"></div>
      `
  }
}


customElements.define('mobile-component', Mobile)

// .htaccess rewrite for url.
//   RewriteEngine On
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule ^([^\.]+)$ $1.html [NC,L] 