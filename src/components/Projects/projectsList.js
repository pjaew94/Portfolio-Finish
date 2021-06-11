import jlcServes1 from "../../media/jlcservesImg1.png";
import jlcServes2 from "../../media/jlcservesImg2.png";
import jlcAcademy from "../../media/jlcacademyImg1.png";

export const projectList = [
  {
    class: "non-profit",
    roman: "I",
    name: "JLC Serves",
    route: "jlc-serves",
    type: "Non-Profit",
    link: "https://https://www.jlcserves.org/",
    github: "https://github.com/pjaew94/JLC-Serves-v2-FrontEnd",
    img1: jlcServes1,
    img2: jlcServes2,
    problem: [
      "Jesus Love Church is a small church located in Lansdale, PA. Despite it's size, the congregation is involved in numerous charities and missions.",
      "These include building/funding 3 schools in Haiti, feeding 100-150 homeless in Philadelphia weekly, and funding missionaries in North Korea.",
      "While most of the funds used are from the people within the church, there are outsiders who are willing to contribute. However, the only way to accept donations were through cash and checks delivered by hand or mail.",
    ],

    solution: [
      "In hopes of reducing friction for people who were willing to donate, jlcserves.org was built. The full stack application is able to accept payments via. Stripe and Paypal to cover all types of payments.",
      "Since launch, the church received thousands in donations and gained recognition from locals. Through the extra donations, the church was able to fund tens of teachers in haiti and increase weekly food donations from 100 bags to 150 bags.",
    ],

    learned: [
      "Implementation of payment methods was a brain-picker. Setting up the dashboards for Stripe and Paypal, and integrating working code for smooth transactions for optimal user experience required countless trials and errors.",
      "Additionally, instead of opting for SCSS for styling, Styled-Components was utilized to reduce redundancy and to produce cleaner code.",
      "Data of donators were stored in MongoDB with the help of ExpressJS for backend. Lastly, the front end and back end are hosted on Netlify and Heroku respectively. Separation of the two was necessary to avoid heroku's varying IP addresses as well as unloading issue, which causes slow loading.",
    ],

    technologies: [
      "React",
      "Redux",
      "ExpressJS",
      "NodeJS",
      "ExpressJS",
      "Mongoose",
      "jQuery",
      "Amazon S3",
      "MongoDB",
      "Stripe",
      "Paypal Dev.",
      "Styled-Components",
      "REST",
      "Heroku",
    ],
  },
  {
    class: "jlc",
    roman: "II",
    name: "JLC Studies",
    route: "jlc-studies",
    type: "Education",
    link: "https://www.jlcacademy.com/",
    github: "https://github.com/pjaew94/JLC-Tutor-FrontEnd",
    img1: jlcAcademy,
    problem: [
      "In the summer of 2019, Jesus Love Church began hosting Saturday school program for students in middle to high school. The program assisted students excel in school curriculums as well as help prepare for standardized tests.",
      "Problem arose when teachers quickly realized there was no system to remind the students of homework and upcoming tests. This issue took a toll on the student's performances, in which impacted the classroom's experiences negatively.",
    ],

    solution: [
      "In order to combat this issue, jlcacademy.com was developed. The site is a simple web application, which gives the teachers the tools to upload reminders for the students. The students can also post questions or comments on the reminders for teacher to student interaction.",
      "The web application increased homework completion from merely 45% to astounding 96% in a span of few weeks.",
    ],

    learned: [],
    technologies: [
      "React",
      "Redux",
      "ExpressJS",
      "NodeJS",
      "Mongoose",
      "jQuery",
      "MongoDB",
      "APIs",
      "SCSS",
      " REST",
      "Heroku",
      "",
    ],
  },
];
