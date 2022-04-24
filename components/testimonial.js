class Testimonial extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
           <div class="testimonials">
        <div class="test-box shadow">
            <h1>Testimonials</h1>
            <p class="heading-p">Here's what people have to say</p>
            <div class="profile-message">
                <div class="profile">
                     <img src="images/smiling.jpeg" alt="" id="img" >
                </div>
                <div class="testimony">
                    <p> <i class="fas fa-quote-left quote r"></i>
                        <span id="testimony">This is the testimony.</span>
                        <i class="fas fa-quote-right quote r"></i>
                    </p>
                    <div class="name">
                        <h1 id="name">John Doe</h1>
                        <p id="title">------</p>
                    </div>
                </div>
            </div>
            <div class="select-icon">
                <i class="fas fa-angle-left next l" id="prev"></i>
                <i class="fas fa-angle-right next r" id="nxt"></i>
                 
                
            </div>
    
            <div class="dots-container">
                <div class="dots active-dots" id="one"></div>
                <div class="dots" id="two"></div>
                <div class="dots" id="three"></div>
                <div class="dots" id="four"></div>
            </div>
        </div>
    
    </div>
        `
    }
}
customElements.define('testimonial-component', Testimonial)
