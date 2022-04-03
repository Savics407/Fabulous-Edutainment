class Features extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `
       <div class="features">
                   <div class="sec-header">
                       <h1 class="heading">Best <span class="span">Edutainment </span>Platform</h1> 
                       <p class="heading-p">Providing Services and opportunities Scalable for the entire globe</p>
                    </div>
                    <div class="featured-blocks">
                        <div class="featured feat-bg1">
                            <div class="feat-content">
                                <p> <span class="feat-title"> Talent Mining</span></p>
                                <p>We can help you discover the talent buried within you.</p>
                                <a href="about.html"><button>Learn More &nbsp<i class="fas fa-angle-right "></i></button></a>
                            </div>
                           
                        </div>
                        <div class="featured feat-bg2">
                            <div class="feat-content">
                                <p> <span class="feat-title"> Talent Refining</span></p>
                                <p>We help reform your talents</p>
                                <a href="about.html"><button>Learn More &nbsp<i class="fas fa-angle-right "></i></button></a>
                            </div>
                        </div>
                        <div class="featured feat-bg3">
                            <div class="feat-content">
                                <p> <span class="feat-title"> Talent Projection</span></p>
                                <p>We create an enabling environment to showcase your talent and get it to the spotlight</p>
                                <a href="about.html"><button>Learn More &nbsp<i class="fas fa-angle-right "></i></button></a>           
                            </div>
                           
                        </div>
                    </div>
                </div>

      `
  }
}


customElements.define('features-component', Features)