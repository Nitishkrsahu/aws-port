import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-1" style={{
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <div className="container">
        <SectionTitle title="Contact" subtitle="Get in touch" />

        <div className="row animate__animated animate__fadeIn">
          <div className="col-lg-5 mb-2 mb-lg-0">
            <h3 className="mb-3" style={{
              color: '#FE0087'
            }}>Let's talk about your project</h3>
            <p className="mb-3">
              Feel free to reach out for collaboration or just a friendly hello
            </p>
            <div className="contact-details">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img src="/contact/email.svg" alt="whatsapp-icon" width={25} />
                </div>
                <div>
                  <p className="mb-0 btn btn-dark text-info">nitishkrsahu123@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div>
                  <img src="/contact/telephone.svg" alt="whatsapp-icon" width={25} />
                </div>
                <div>
                  <p className="mb-0 btn btn-dark text-info">+91 8651295487</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div>
                  <img src="/contact/whatsapp.svg" alt="whatsapp-icon" width={25} />
                </div>
                <div>
                  <p className="mb-0 btn btn-dark text-info">+91 8651295487</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" >
            <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm border border-1" style={{
              backgroundColor: '#000'
            }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{
                    backgroundColor: '#000',
                    color: '#fff'
                  }}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  style={{
                    backgroundColor: '#000',
                    color: '#fff'
                  }}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  style={{
                    backgroundColor: '#000',
                    color: '#fff'
                  }}
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;