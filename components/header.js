class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `
      
      <div class="top_nav">
                    <div class="logo">
                        <a href="https://fabulousedutainment.com"><img src="images/FE-logo.png" alt=""></a>
                    </div>
                    <ul class="navigation a">
                      <li class="nav_item"><a href="https://fabulousedutainment.com" class="active">Home</a></li>
                    <li class="nav_item"><a href="about.html">About</a></li>
                      <li class="nav_item"><a href="#">Talent School</a></li>
                      <li class="nav_item"><a href="#">Goat9ja</a></li>
                      <li class="nav_item"><a href="#">Blog</a></li>
                      <li class="nav_item"><a href="#">Contact</a></li>
                    </ul>
                </div>
      `
  }
}


customElements.define('header-component', Header)

// .htaccess rewrite for url.
//   RewriteEngine On
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule ^([^\.]+)$ $1.html [NC,L] 