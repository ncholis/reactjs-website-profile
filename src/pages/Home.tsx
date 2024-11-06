import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";

import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";

import parse from "html-react-parser";
import "../styles/Home.css";
import { parnersSection, partnersList } from "../data/PartnersSection";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* course  */}
        <section id="courses">
          <div className="kolom">
            {parse(coursesSection.content)}
          </div>
          <img src={coursesSection.image} />
        </section>

        {/* tutors  */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorsList={tutorsList}/>
            </div>
        </section>

        {/* parners  */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(parnersSection.content)}
                </div>
                <Partners partnersList={partnersList} />
            </div>
        </section>

        <Contact></Contact>

      </div>
      <Footer />
    </>
  );
}

export default Home;
