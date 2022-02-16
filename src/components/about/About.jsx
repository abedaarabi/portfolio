import ImageCom from "../imageCom/ImageCom";
import "./about.scss";
// import Award from "../../img/award.png";

const imageData = [
  {
    image: "https://img.icons8.com/color/480/000000/javascript--v1.png",
    id: 1,
  },
  {
    image: "https://img.icons8.com/color/480/000000/typescript.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/color/480/000000/react-native.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/color/480/000000/redux.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/color/480/000000/nodejs.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/ios-filled/500/000000/git.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/ios/500/000000/mysql-logo.png",
    id: 2,
  },
  {
    image: "https://img.icons8.com/color/480/000000/graphql.png",
    id: 2,
  },
];

export const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="top">
        <div className="stuff">
          <div className="about-me">
            <h1>A bit about me:</h1>
            <p>
              I'm Energetic and strongly motivated construction engineer and web
              developer with extended practical experience with React,
              Typescript, and other modern technologies. Currently working with
              BIM and digital transformation to build innovative web
              applications and solutions for MOE. I'm committed to moving
              forward with both digital and green transitions. As an example, I
              recently built a solution for MOE, which organizes complex data
              into simple visual representations that provide decision-makers
              with key environmental information about project materials. The
              tool will help cut carbon emissions and improve sustainability. As
              a team player eager to learn and contribute.
            </p>
            {/* I hope to be taken into consideration for a position as a
            full-stack/front-end developer */}
          </div>
          <div className="random-stuff">
            <h1>Random Stuff</h1>

            <div>
              <ul>
                <li>
                  I have a bachelor's in construction management and facility
                  management.
                </li>
                <li>
                  I work in a bar{" "}
                  <span>
                    <a href="https://www.facebook.com/sortefirkantkbh">
                      (Sorte Firkant)
                    </a>
                  </span>{" "}
                  in my free time for fun. Oh, ofc to do make great cocktails.
                </li>
                <li>
                  I believe that I can improve the environment, there for I
                  created a{" "}
                  <span>
                    <a href="https://forge.autodesk.com/customer-stories/moe ">
                      Tool
                    </a>
                  </span>{" "}
                  at work that helps to cut carbon emissions and improve
                  sustainability.
                </li>
                <li>
                  I am in love with learning and adopting new technologies.
                  Simply that makes me feel happier!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h1>Technologies I know:</h1>
        </div>
        <div className="image-container">
          {imageData.map((image) => (
            <ImageCom key={image.id} image={image.image} />
          ))}
        </div>
      </div>
    </div>
  );
};
