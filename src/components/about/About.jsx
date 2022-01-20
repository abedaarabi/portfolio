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
    <div className="about-container">
      <div className="top">
        <div className="stuff">
          <div className="about-me">
            <h1>About Myself:</h1>
            <p>
              I'm passionate about Web Development with React, Typescript, and
              other modern technologies. I am currently working with BIM and
              digital transformation to build innovative web applications and
              solutions for MOE. At the same time, I'm interested in the digital
              and green transition. Recently, I built a solution for MOE, which
              organizes complex data into simple visual representations that
              provide decision-makers with key environmental information about
              project materials. The tool will help cut carbon emissions and
              improve sustainability. brining energy .... I work in a bar
              sometimes cuz I love fun ..... love to learn.....collaborative ...
              love cooking
            </p>
          </div>
          <div className="random-stuff">
            <h1>Random Stuff</h1>

            <div>
              <ul>
                <li>
                  <p>
                    I've lived and worked in São Paulo, New York, Miami, and now
                    in Denmark.
                  </p>
                </li>
                <li>
                  While living in Miami, I worked as a Banker, Financial
                  Advisor, and Professional Photographer in that order.
                </li>
                <li>
                  I've lived and worked in São Paulo, New York, Miami, and now
                  in Denmark.
                </li>
                <li>
                  I've lived and worked in São Paulo, New York, Miami, and now
                  in Denmark.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>

      {/* <div className="image-container">
          {imageData.map((image) => (
            <div className="skills-image">
              <ImageCom key={image.id} image={image.image} />
            </div>
          ))}
        </div> */}
    </div>
  );
};
