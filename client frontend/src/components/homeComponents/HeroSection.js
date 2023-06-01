import React from "react";

import Helmet from "./Helmet";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../../assets/images/heroimg.png";
import "../styles/hero-section.css";

import { Link } from "react-scroll";

import "../styles/home-hero.css";

const HeroSection = () => {
  return (
    <Helmet title="Home">
      <section className="heroes__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="heroes__content  ">
                <h5 className="mb-3">Authentic Bangka Culinary Restaurant</h5>
                <h1 className="mb-4 heroes__title">
                  <span>Nikmati Menu Harian</span>Yang Otentik <br /> Khas Kota Bangka
                  <span> Setiap Harinya!</span>
                </h1>

                <h5>
                  Hosit-Hosit Bangka Kuliner akan membuat lidah kalian merasakan cita rasa
                  kuliner tradisional yang unik khas kota Bangka!
                </h5>

                <div className="heroes__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="services">Pesan Sekarang </Link>
                    <i class="ri-arrow-right-s-line"></i>
                  </button>

                  {/* <button className="all__foods-btn">
                    <Link to="about" classname="about__btn">
                      <a href="btn_2">Tentang Kami</a>
                    </Link>
                  </button> */}
                </div>

                <div className=" heroes__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-time-line"></i>
                    </span>
                    Buka 08:00-19:00
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-map-pin-line"></i>
                    </span>{" "}
                    Taman Sari, Jakarta Pusat
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="heroes__img">
                <img src={heroImg} alt="heroimg" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HeroSection;
