import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <section className="services-section px-2 py-5 " id='Service'>
      <h2 className="text-center mb-5">
        <span className="fw-bold" style={{ color: 'white' }}>My </span>
        <span className="fw-bold" style={{ color: '#999' }}>Services</span>
      </h2>

      <div className="row g-4">
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="service-card p-4 text-center rounded-3">
            <div className="service-icon mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg></div>
            <h5 className="fw-bold">Web Development</h5>
            <p className="text-muted text-white-50">
              I’m here to create a website that not only looks great but works perfectly for you and your visitors.
            </p>
            <button className="btn btn-outline-light">Read More</button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div className="service-card p-4 text-center rounded-3">
            <div className="service-icon mb-3">✒️</div>
            <h5 className="fw-bold">Front-end Development</h5>
            <p className="text-muted text-white-50">
              Bringing your vision to life with user-friendly interfaces that ensure a seamless experience.
            </p>
            <button className="btn btn-outline-light">Read More</button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div className="service-card p-4 text-center rounded-3">
            <div className="service-icon mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
</svg></div>
            <h5 className="fw-bold">MERN Stack Development</h5>
            <p className="text-muted text-white-50">
              Specializing in MERN stack development to build scalable, dynamic web applications.
            </p>
            <button className="btn btn-outline-light">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
