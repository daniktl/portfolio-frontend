import { Link } from 'react-router-dom';
import ScrollAnimation from '../../components/ui/ScrollAnimation/ScrollAnimation';

import globalClasses from "../../index.module.scss";

import image1 from "../../img/image-1.jpeg";
import image2 from "../../img/image-2.jpeg";

function Main() {
  return (
    <>
      <div className={globalClasses.pageSection}>
        <div className={globalClasses.pageSectionContent}>
          <h1>
            hi, i'm daniel.
            <br />
            developer, minimalist, and husband.
            <br />
          </h1>
          <p>
            and all you have to know is that i love what calls minimalism and
            writing clean code.
          </p>
        </div>
        <div className={globalClasses.pageSectionMedia}>
        <ScrollAnimation animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
          <img src={image1} alt="image1"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
          <img src={image2} alt="image2"/>
          </ScrollAnimation>
        </div>
      </div>
      <div className={globalClasses.pageSection}>
        <div className={globalClasses.pageSectionContent}>
          <h2>
            some of my projects could be posted here.
          </h2>
          <p>
            to find them, look at the <Link to='/projects'>projects</Link> page.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
