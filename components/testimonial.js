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
                                <!-- <img src="images/smiling.jpeg" alt=""> -->
                            </div>
                            <div class="testimony"> 
                                <p> <i class="fas fa-quote-left quote r"></i>This is due to their excellent work, services and customer support. Its thoroughly refreshing to get such a personal touch. The tutors are very approachable and available to answer any question at any time.
                                <i class="fas fa-quote-right quote r"></i></p>
                                <div class="name">
                                    <h1>John Doe</h1>
                                    <p>Student</p>
                                </div>
                            </div>
                        </div>
                        <div class="select-icon">
                            <i class="fas fa-angle-left next l"></i>
                            <i class="fas fa-angle-right next r"></i>
                        </div>

                        <div class="dots-container">
                            <div class="dots active-dots"></div>
                            <div class="dots"></div>
                            <div class="dots"></div>
                            <div class="dots"></div>
                        </div>
                    </div>
                    
            </div>
        `
    }
}
customElements.define('testimonial-component', Testimonial)
