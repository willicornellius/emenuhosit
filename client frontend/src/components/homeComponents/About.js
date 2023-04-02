import "../styles/About.css";
import Helmet from "../homeComponents/Helmet";
import heroImg from "../../data/img/hero-img2.png";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion/dist/framer-motion";

import { Link } from "react-scroll";

const About = () => {
  return (
    <Helmet>
      <section className="trending___products">
        <Container id="about">
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Tentang Kami</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="hero__section1">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="hero__content">
                <h2>Tentang Hosit-Hosit Bangka Kuliner</h2>
                <p>
                  PT. Hosit–Hosit Bangka Kuliner merupakan sebuah perusahaan yang didirikan pada tahun 2014 
                  oleh Kong Andy William. Perusahaan ini bergerak dibidang food and beverage (F&B). 
                  PT Hosit–Hosit Bangka Kuliner menjalankan usahanya dengan konsep restoran yang juga menawarkan
                  hasil produk-produk seperti, kerupuk khas kota Bangka, makanan khas Bangka dan lain sebagainya.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-3}
                    duration={100}
                  >
                  Pesan Dan Nikmati!
                  </Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
