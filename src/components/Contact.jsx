import "./Contact.css";

export default function Contact() {
  return (
  <section className="contact-section" id="contact">
    <br />
      <div className="container">
        {/* <h2 className="section-title">Contact Us</h2> */}
        
        {/* Contact Methods Section */}
        <div className="contact-methods-container">
          <div className="contact-intro">
            <h3>You can contact us by</h3>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-info">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/96170688200" target="_blank" rel="noopener noreferrer">
                  +961 70 688 200
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-info">
                <h4>Phone</h4>
                <a href="tel:+96170688200">
                  +961 70 688 200
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <a href="mailto:palapasbeach2004@gmail.com">
                  palapasbeach2004@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="contact-info">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/palapasbeachresortlb?igsh=ZWdyeGl1eTY2aWNt" target="_blank" rel="noopener noreferrer">
                  Account Palapas
                </a>
                <a href="https://www.instagram.com/palapasbeachresortchalets?igsh=MTF1Nnc2cWcybzd0aA==" target="_blank" rel="noopener noreferrer">
                  Account Chalet
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="contact-info">
                <h4>Facebook</h4>
                <a href="https://www.facebook.com/share/16jzUAsQhq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  Visit Facebook Page
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info">
                <h4>Location</h4>
                <a href="https://maps.app.goo.gl/Hc6W1dcm1tCkAbSVA?g_st=ic" target="_blank" rel="noopener noreferrer">
                  Tabarja, Lebanon
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
      <br />
    </section>
  );
}