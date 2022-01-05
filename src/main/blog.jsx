import { BlogBuilder } from "../blogs/BlogBuilder";
const bloglist = [];

const irotate = new BlogBuilder({
  title: "Active SLAM",
  image: require("../img/1.jpg"),
  description:
    "Robots that are capable to help humans in everyday tasks, either in workplaces or homes, are becoming rapidly popular. \
    To be fully functional companions, robots should be able to navigate and map unknown environments in a seamless and efficient way -- quickly, using less energy and without navigating unnecessarily. \
    Simultaneous localization and mapping, popularly called SLAM, has been developed mainly as a passive process where robots are only required to follow external control inputs, are controlled directly by humans or where previous knowledge is being exploited through predefined waypoints or landmarks. \
    Active SLAM, on the other hand, refers to an approach in which robots exploit their sensors measurements and based on that take control decisions to increase map information, while simultaneously performing other user-defined tasks in an energy-efficient way.",
}).addHeading("Starting Point")
  .addParagraph(
    "We believe that active SLAM is necessary, especially to deploy robots in different environments without any prior knowledge, need for setup by specialized personnel, or tuning.\
    In this work, we want to address the problem by using a three-layered framework that continuously actively controls the camera heading to maximize the environment coverage.\
    This framewor focuses both on the exploration of the unknown parts of the environment and on the re-observation of already mapped areas to improve the so called 'coverage information' for a better overall map quality."
  )
  .addSubHeading("Setup")
  .addParagraph("We employ an three-wheeled omnidirectional ground robot that needs to explore the environment without any previous knowledge. The robot is equipped with an RGBD camera that \
  is used to build the 3D map of the environment. This map is then projected in a 2D occupancy map that is finally used for navigation.\
  We evaluate our approach based on the explored area per meter travelled, absolute trajectory error, wheel rotation per meter travelled, and accuracy and entropy of the final map.\
  The utility used is based on the Shannon entropy definition. Different utility function have been also explored and are presented in a different blogpost.")
  .addHeading("Our approach")
  .addParagraph(
    "The classical active SLAM procedure consists of three steps: selection of candidate actions (goals), computation of utilities, and final execution of the best action. \
    The procedure is then repeated endlessly until either stop condition is met (e.g. no more goals available) or a certain amount of time has passed.\
    In this work, we want to actively influence every step of the pipeline. Firstly, for every path, we pre-compute the optimal hedings (for every path's waypoint) based on the chosen utility function. \
    Then, once the path is selected, we refine the next waypoint's heading based on the updated map information. Finally, during the execution the real time features distribution is used to influence the heading while still reaching the optimal one."
  )
  .addSubHeading("First level of activeness - Goal selection")
  .addParagraph("Generally, a set of possible goals is extracted and the best among them is then chosen. \
  To do so, different approaches are possible. The simplest one, which is also one of the most used, is to use a set of frontier points. This gives a long term horizon in which the utility is either the one of the final point or the one of the whole path without ANY optimization.  \
  Next best view (NBV) planners that sample (usually nearby random) points can also be used. This is usually (sub-)optimal with regard to the utility but risk to fall in local minima. \
  In this work we generate paths toward the exploration point, i.e. a frontier point. Those paths are then subdivided in 1-m-apart waypoints and, for every one of those, we compute the optimal heading. \
  The optimal heading is computed with a raytracing technique by taking into account the frustum overlap between subsequent waypoints. \
  Additionally, we do not only sum the utility of the path's waypoints but, to better capture the average contribution along a path, we use a weighted average.")
  .addImage("./irotate1.gif")
  .addSubHeading("Second level of activeness - Updating the heading")
  .addParagraph("Once the path is chosen the robot starts moving. Taking inspiration from receiding horizon techniques, we apply an update procedure every time a waypoint is reached. \
  The idea is that, since the robot is continuosuly gathering data while it moves, there might be a better point of view located on the next waypoint position. However, differently to RH techniques \
  we do not change the global goal every time the sub-goal is reached, nor we recompute the global path, or we change objective. Therefore, we are able to keep the same long term goal even \
  while this is being influenced in a RH-fashion. Thus, we are effectively combining the benefits of RH (next viewpoint optimization), NBV planners (path's heading optimization), and frontier based exploration (long term goal).")
  .addImage("./irotate2.gif")
  .addSubHeading("Third level of activeness - Balancing the features")
  .addParagraph("Visual (graph) SLAM has its core component on the loop closure event that is triggered when the robot recognize a previously seen place. \
  This can be achieved by comparing images' features. Therefore, keeping those in the field of view of the camera could bring benefits. \
  Anyway, since the goal of the robot in the end is to explore the environment, we do not directly include them in the utility funciton.\
  Despite that, we recognize that this is indeed useful information especially for relocalization events and for the stability of the system. \
  Therefore, between waypoints we actively influence the rotation of the robot based on the real-time features distribution. \
  Indeed, we use a dynamic weighting function to balance the desire of following features and keep them in the FOV and the necessity to reach the computed optimal orientation.")
  .addHeading("Results")
  .addParagraph("We tested our approach both in simulation and with a real robot. \
  Using our three-layered active SLAM system we are capable of exploring an environment with paths that are 39% shorter with respect to the state of the art, while keeping the same accuracy of the map.\
  Despite the continuos rotational movement of the robot the wheels' total rotation is not badly influenced. We also succesfully demonstrate that, by using the third level of activeness, we are able to increse the number of loop closures.\
  Moreover, our approach show a general reduction of the absolute trajectory error among all the tries and the final entropy of the map is also reduced. ")
  .addHeading("Final remarks")
  .addCode("https://eliabntt.github.io/active_v_slam/")
  .addPaper("https://arxiv.org/pdf/2103.11641.pdf")
  .addParagraph("If you find this work useful please cite us")
  .addCitation("@misc{bonetto2021irotate,\n\
      title={iRotate: Active Visual SLAM for Omnidirectional Robots},\n\
      author={Elia Bonetto and Pascal Goldschmid and Michael Pabst and Michael J. Black and Aamir Ahmad},\n\
      year={2021},\n\
      eprint={2103.11641},\n\
      archivePrefix={arXiv},\n\
      primaryClass={cs.RO}\n\
  }")
  .addSubHeading("Video")
  .addVideo("https://www.youtube.com/embed/YFD80TxXghk")
  ;

const independentcamera = new BlogBuilder({
  title: "An Independent Camera Joint",
  image: require("../img/cam.png"),
  description:
  "We introduce an independent camera joint to extend iRotate. With this we want to lift the omnidirectional requirement of the robot and apply our active SLAM approach to different platforms.\
  Moreover, to address the additional noise that this joint introduce in the system we propose a novel state estimation method for a SLAM system by jointly considering the robot and the camera orientation directly into the system.",
})
.addHeading("The Problem")
.addParagraph(
  ""
)
.addHeading("Our Solution")
.addParagraph(
  ""
)
.addCode("https://eliabntt.github.io/active_v_slam/")
.addParagraph("If you find this work useful please cite us")
.addCitation("@misc{bonetto2021active,\n\
  title={Active Visual SLAM with Independently Rotating Camera},\n\
  author={Elia Bonetto and Pascal Goldschmid and Michael J. Black and Aamir Ahmad},\n\
  year={2021},\n\
  eprint={2105.08958},\n\
  archivePrefix={arXiv},\n\
  primaryClass={cs.RO}\n\
}");

const differentUtilities = new BlogBuilder({
  title: "Different Utilities",
  image: "",
  description:
  "",
})
.addHeading("The Starting Point")
.addParagraph(
  ""
)
.addHeading("")
.addParagraph(
  ""
).addHeading("");


const thewebsite = new BlogBuilder({
  title: "Creating this website",
  image: require("../img/me.jpg"),
  description:
  "",
})
.addHeading("The Starting Point")
.addParagraph(
  ""
)
.addHeading("")
.addParagraph(
  ""
).addHeading("");

// bloglist.push(independentcamera);
bloglist.push(irotate);

export default bloglist;
