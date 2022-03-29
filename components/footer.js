class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `
       <div class="footer">
            <div class="footer-contents">
                <div class="footer-logo">
                    <img src="images/FE-logo.png" alt="">
                    <p>Fabulous Edutainment is a fuelled by an immeasurable passion to restructure the education
                        and entertainment sectors in africa through creation of diverse opportunities for purposeful talents.</p>
                </div>
                <div class="quick-links">
                    <h2 class="footer-heading">Important Links</h2>
                    <ul class="lists">
                        <a href="about.html"><li>About</li></a>
                        <a href="#"><li>Talent School</li></a>
                        <a href="#"><li>Goat9ja</li></a>
                        <a href="#"><li>Our Services</li></a>
                       <a href="#"><li>Blog/ Community</li></a>
                        <a href="contact.html"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div class="company-details">
                    <h2 class="footer-heading">Contact </h2>
                    <ul class="lists">
                        <!-- <li> <i class="fa fa-map-marker-alt" aria-hidden="true"></i></i>~ Street View, Enugu - Nigeria</li> -->
                        <li> <i class="fas fa-envelope"><a href="mailto:www.fabulousedu@gmail.com"></i>www.fabulousedu@gmail.com</a></li>
                        <li><i class="fas fa-phone"></i> <a href="tel:+2348051045094">+2348051045094 </a></li>
                    </ul>
                    <div class="mail-list">
                   <!--     <form action="" method="post"> -->
                            <input type="email" name="" id="" placeholder="Enter Email">
                            <input type="button" value="Submit">
                     <!-- </form> -->
                    </div>
                </div>
                <div class="socials">
                    <i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    

                </div>
            </div>
            <div class="copyright">
                <div class="copyright-session">
                  <p> Copyright &copy2022 fabulousedutainment.com</p>
                </div>
                <div class="dim">
                   <p> Privacy Policy </p>
                   <p>Terms of Use</p>
                </div>
            </div>
        </div>    

      `
  }
}


customElements.define('footer-component', Footer)