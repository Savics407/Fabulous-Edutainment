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
                    <p>Fabulous Edutainment is fuelled by an immeasurable passion to restructure the education
                        and entertainment sectors in africa through creation of diverse opportunities for purposeful talents.</p>
                </div>
                <div class="quick-links">
                    <h2 class="footer-heading">Important Links</h2>
                    <ul class="lists">
                        <a href="about"><li>About</li></a>
                        <a href="https://fabulousedutainment.com/talent-school/"><li>Talent School</li></a>
                        <a href="https://fabulousedutainment.com/talent-school/"><li>Goat9ja</li></a>
                        <!--<a href="#"><li>Our Services</li></a>-->
                       <a href="https://fabulousedutainment.com/talent-school/"><li>Blog/ Community</li></a>
                        <a href="contact"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div class="company-details">
                    <h2 class="footer-heading">Contact </h2>
                    <ul class="lists">
                        <!-- <li> <i class="fa fa-map-marker-alt" aria-hidden="true"></i></i>~ Street View, Enugu - Nigeria</li> -->
                        <li> <i class="fas fa-envelope"><a href="mailto:www.fabulousedu@gmail.com"></i>www.fabulousedu@gmail.com</a></li>
                        <!-- <li><i class="fas fa-phone"></i> <a href="tel:+2348051045094">+2348051045094 </a></li> -->
                    </ul>
                    <div class="mail-list">
                   <!--     <form action="" method="post"> -->
                            <input type="email" name="" id="" placeholder="Enter Email">
                            <input type="button" value="Submit">
                     <!-- </form> -->
                    </div>
                </div>
                <div class="socials">
                    <a href="https://m.facebook.com/fabulousedutainment/"><i class="fab fa-facebook-f"></i></a>
                    
                    <i class="fab fa-twitter"></i>
                    
                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://www.instagram.com/fabulousedutainment/"><i class="fab fa-instagram"></i></a>
                    
                    <a href="https://www.youtube.com/channel/UCk397miD9Llezf3Hl8hdVFw?app=desktop"><i class="fab fa-youtube"></i></a>
                    

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