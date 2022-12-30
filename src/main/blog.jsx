import { camelCase } from "jquery";
import { BlogBuilder } from "../blogs/BlogBuilder";
const bloglist = [];

const irotate = new BlogBuilder({
  title: "Active SLAM",
  image: require("../img/1.jpg"),
  description:
    "Robots capable to help humans in everyday tasks, either in workplaces or homes, are becoming rapidly popular. \
    To be fully functional companions, robots should be able to navigate and map unknown environments in a seamless and efficient way, understanding both where they are and where they need to go. \
    That is why simultaneous localization and mapping, popularly called SLAM, has been developed since the beginning of mobile robotics. \
    This has been done mainly as a passive process where robots are only required to follow external control inputs, given directly by humans, or where previous knowledge of the environment is exploited. \
    Active SLAM, on the other hand, refers to an approach in which robots exploit their sensors measurements. Based on that information the system makes decisions to increase map information, while simultaneously maximing an objective, in an energy-efficient and fully-autonomous way.\
    The goal of Active SLAM is to autonomously map an environment -- quickly, using low energy and without wandering around unnecessarily."
}).addHeading("Starting Point")
  .addParagraph(
    ["Active SLAM is necessary to deploy robots in different environments without any prior knowledge or need of specialized personnel for setup and tuning.\
    Historically, this has been done following three main strategies: i) frontier exploration, ii) next-best-view planners, iii) receding horizon techniques.\
    However, all of them are somehow shortsighted, in that they only focus long or short term objective.\
    Instead, in this work, we address the problem by introducing a three-layered framework that continuously actively controls the camera heading to maximize the environment coverage.\
    The focus is both on the exploration of unknown parts of the environment and on the re-observation of already mapped areas for a better overall map quality and lower entropy.\
    The aim is to fuly exploit the movement of the robot along the exploration paths to simultaneously reduce the entropy of the map and explore the environment. \
    This is done both in the long term, by assigning a frontier goal and pre-optimizing the path towards it, and in the short term, by both optimizing the next viewpoint heading and with an online refinement mechanism. \
    By combining ideas from Next-Best-View planners, Receiding-Horizon techniques, feature following methods, and frontier exploration approaches we explore an environment with paths that are up to ",<b>39%</b>," shorter with respect to classical approaches."]
  )
  .addSubHeading("Setup")
  .addParagraph("We employ a three-wheeled omnidirectional ground robot based on the Festo's Robotino. The goal is to explore an environment without any previous knowledge. The robot is equipped with an RGBD camera that is used to build the 3D map of the environment. \
  This map is then projected in a 2D occupancy grid that is finally used for navigation. \
  We evaluate our approach based on the explored area per meter travelled, absolute trajectory error, wheel rotation per meter travelled, and accuracy and entropy of the final map.\
  The utility used is based on the Shannon entropy definition. Different utility function have been also explored and will be presented in a different blogpost.\
  We exploit the mobility of the omnidirectional platform to continuosly control the camera heading. We expand this method to different platforms in a subsequent work.")
  .addHeading("Our approach --- in brief")
  .addParagraph(
    "The classical active SLAM procedure consists of three steps: selection of candidate actions (goals), computation of utilities, and execution of the chosen action. \
    The procedure is then repeated endlessly until either a stop condition is met (e.g. no more goals available) or a certain amount of time has passed.\
    In this work, we want to actively influence every step of the pipeline. Firstly, for every path, we pre-compute the optimal hedings (for every path's waypoint) based on the chosen utility function (NBV). \
    NOTE that the final utility of every path is _already_ based on the optimized headings. We call this our first active level. \
    Then, we select the best path and start moving the robot. By doing this we recognize that the map gets updated in real time with the newly gathered information while the robot is moving around.\
    We can then use this information to refine the next waypoint's heading every time we reach one (RH). This is our second active level. \
    NOTE that we do NOT change the long term goal, that is kept fixed until reached. \
    Finally, in our third active level, we utilize the real time features distribution to influence the heading with a weighting function."
  )
  .addSubHeading("First level of activeness - Goal selection")
  .addParagraph("Generally, a set of possible goals is extracted and the best among them is then chosen. \
  To do so, different approaches are possible. The simplest one, which is also one of the most used, is to use a set of frontier points. This gives a long term objective in which the utility is either the one of the final point or the one of the whole path without ANY optimization.  \
  Next best view (NBV) planners, instead, sample (usually nearby random) locations and orientations and compute the respective utilities. Sometimes, the heading for each one of these goals is optimized. This is true especially in drone-based scenarios where reaching a desired orientation is not constrained by the platform itself. These approaches are usually (sub-)optimal with regard to the utility but risk falling in local minima. \
  In some works, combinations between the two are explored. The system switch between frontier and NBV planning during exploration to avoid the local-minima problem. \
  In this work we utilize also a combined approach that is, however, more integrated. \
  Firstly, we generate paths toward the exploration point, i.e. a frontier point. Those paths are then subdivided in 1-m-apart waypoints and, for every one of those, we compute the optimal heading. \
  The optimal heading is computed with a raytracing technique by taking into account the frustum overlap between subsequent waypoints. \
  Additionally, we do not only sum the utility of the path's waypoints but, to better capture the average contribution along a path, we use a weighted average.")
  .addImage("./irotate1.gif")
  .addSubHeading("Second level of activeness - Updating the heading")
  .addParagraph("Once the path is chosen the robot starts moving. Taking inspiration from RH techniques, we apply an update procedure every time a waypoint is reached. \
  The idea is that, since the robot is continuosuly gathering data while it moves, there might be a better point of view located on the next waypoint position. However, differently to RH techniques we do not change the global goal every time the sub-goal is reached, nor we recompute the global path, or we change objective. \
  Therefore, we are able to keep the same long term goal even while this is being influenced in a RH-fashion. \
  \
  At this point we are effectively combining the benefits of RH (next viewpoint optimization), NBV planners (path's heading optimization), and frontier based exploration (long term goal).")
  .addImage("./irotate2.gif")
  .addSubHeading("Third level of activeness - Balancing the features")
  .addParagraph("Visual (graph) SLAM has its core component on the loop closure event that is triggered when the robot recognize a previously seen place. \
  This can be achieved by comparing images' features. Therefore, keeping those in the field of view of the camera could bring benefits. \
  Anyway, since the goal of the robot in the end is to explore the environment, we do not directly include them in the utility funciton.\
  Despite that, we recognize that this is indeed useful information especially for relocalization events and for the stability of the system. \
  Therefore, between waypoints we actively influence the rotation of the robot based on the real-time features distribution. \
  Indeed, we use a dynamic weighting function to balance the desire of following features and keep them in the FOV and the necessity to reach the computed optimal orientation. \n\
  Next you can see an example of the weighting in action as a function of the current robot distance to the next waypoint going from -60 degrees (the best angle to follow features) to 60 degrees (the best angle to reduce entropy).")
  .addImage("./weighting.gif")
  .addHeading("Results")
  .addParagraph(["We tested our approach both in simulation and with a real robot. \
  In simulation we employed an augmented gazebo-based 'Cafè' environment and the AWS RoboMaker Small House World ROS package, while in the real world we recreated a office like environment in a big dedicated room.\
  Using our three-layered active SLAM system we are capable of exploring an environment with paths that are ",<b>39%</b>," shorter with respect to the state of the art, while keeping the same accuracy of the map.\
  Despite the continuos rotational movement of the robot the wheels' total rotation is not badly influenced. We also succesfully demonstrate that, by using the third level of activeness, we are able to increse the number of loop closures.\
  Moreover, our approach show a general reduction of the absolute trajectory error among all the tries and the final entropy of the map is also reduced. "])
  .addImage("./maps.png")
  .addHeading("Code, resources, and citation")
  .addCode("https://eliabntt.github.io/irotate_active_slam/")
  .addParagraph("You can look at the paper for further details on the method")
  .addPaper("https://doi.org/10.1016/j.robot.2022.104102")
  .addParagraph("If you find this work useful please cite us")
  .addCitation("@article{BONETTO2022104102, \n\
    title = {iRotate: Active visual SLAM for omnidirectional robots}, \n\
    journal = {Robotics and Autonomous Systems}, \n\
    pages = {104102}, \n\
    year = {2022},\n\
    issn = {0921-8890},\n\
    doi = {https://doi.org/10.1016/j.robot.2022.104102},\n\
    url = {https://www.sciencedirect.com/science/article/pii/S0921889022000550},\n\
    author = {Elia Bonetto and Pascal Goldschmid and Michael Pabst and Michael J. Black and Aamir Ahmad},\n\
    keywords = {View planning for SLAM, Vision-based navigation, SLAM}\n\
    }")
  .addSubHeading("Video")
  .addVideo("https://www.youtube.com/embed/YFD80TxXghk","iRotate")
  ;

const independentcamera = new BlogBuilder({
  title: "An Independent Camera Joint",
  image: require("../img/cam.png"),
  description:
  "We introduce an independent camera joint to extend iRotate. With this we want to lift the omnidirectional requirement of the robot and apply our active SLAM approach to different platforms. \
  Moreover, to address the additional noise that this joint introduce in the system we propose a novel state estimation method for a SLAM system by jointly considering the robot and the camera orientation directly into the system.",
})
.addHeading("The Problem")
.addParagraph(
  ["Our previous work 'iRotate: Active Visual SLAM for Omnidirectional Robots' (check it out ",<a href='https://eliabntt.github.io/#/blog/0#top'>here</a>,") was purely based on the rototranslation capabilities of our omnidirectional robot. \
  However, as good as omnidirectional platforms are, this was a huge limitation as it was restricting our method to that specific (more costly) robots. \
  Indeed, for our method to be applicable, we need a continuous camera rotational movement. This movement can be performed either by the robot itself, as it is the case with the omnidirectional platform, or by the camera itself. \
  We introduce such movement in this work. However, an independent joint attached to the camera introduces state estimation issues, unless high-end encoders are used. \
  That is why we needed to introduce a novel joint state estimate system to address the increased noise in the orientation component."]
)
.addHeading("Our independent camera")
.addParagraph(
  "To let the camera rotate independently we introduce a rotational joint between the robot base and the camera. This joint is being controlled by an Arduino and a simple motor. \
  The motor is controlled by an Arduino, with a low-res encoder. Our Intel Realsense D435i camera is equipped with an IMU. However, we can not directly use its readings. \
  Clearly, if the base rotates, the IMU attached to the camera will be affected. That is why we introduce an additional IMU attached to the base of the robot. \
  In a subsequent step, by making use of the ROS's time synchronization package, we subtract the two IMUs obtaining a relative orientation estimate. \
  This estimate is then used, within an EKF, with the encoder readings to estimate the camera relative orientation with respect to the base of the robot. "
)
.addHeading("The state estimate")
.addParagraph(
  "At this point we have two sources of error: i) the robot moving and rotating, ii) the camera that we cannot control precisely due to frictions and unprecise readings. \
  What we could do is perform SLAM directly in the reference frame of the camera, instead of the one of the robot frame. However, in our opinion, this will in any case be affected by the robots' own movement. \
  Therefore, we introduced a novel state estimate for the SLAM framework itself. In this work, we propose to show to the SLAM backend always an omnidirectional robot. \
  Indeed, we proceed to fuse the state estimates of the robot's base and of the camera orientation in a single joint state. This fused state is then streamed to the SLAM system that performs the mapping, reconstruction and the localization."
)
.addHeading("Testing and Results")
.addParagraph(
  ["Relying on the previous iRotate code, we proceeded by modifying our NMPC formulation to constrain the omnidirectional base to semi-holonomic (no rotational movement of the base, ever) and non-holonomic settings. \
  This is possible by simply adding velocity constraint to the NMPC formulation. Moreover, we tested a setting in which the robot kept its omnidirectional capabilities while the camera was \
  still able to rotate (while keeping the same maximum combined rotational speed). \
  First of all, in our tests we showed how the combined state estimate was ininfluent if the camera was still but helped in reducing the absolute trajectory error when both the robot and the camera rotate. \
  Moreover, we proved how iRotate shows comparable performance in semi and non-holonomic platforms, therefore proving its benefits like with did with our previous work. \
  Also, we showed how this is an incredible opportunity to further reduce the energy consumption. \
  Indeed, we reduced of ", <b>20%</b>," the overall total rotation of the wheels, at the expense of rotating the camera, reduced of up to ", <b>50%</b>, " the ATE and up to ", <b>10%</b>, " the overall entropy of the generated map. \
  Finally, we show that the more stable merged state estimate also helps in detecting more loop closures."]
)
.addHeading("Video")
.addVideo("https://www.youtube-nocookie.com/embed/MmAn7CMcRGA","independentCamera")
.addParagraph("")
.addHeading("Code, resources, and citation")
.addCode("https://eliabntt.github.io/active_v_slam/")
.addParagraph("If you find this work useful please cite us")
.addCitation("@INPROCEEDINGS{9568791, \n\
  author={Bonetto, Elia and Goldschmid, Pascal and Black, Michael J. and Ahmad, Aamir}, \n\
  booktitle={2021 European Conference on Mobile Robots (ECMR)},  \n\
  title={Active Visual SLAM with Independently Rotating Camera}, \n\
  year={2021}, \n\
  volume={}, \n\
  number={}, \n\
  pages={1-8}, \n\
  doi={10.1109/ECMR50962.2021.9568791}}");

const airPose = new BlogBuilder({
  title: "AirPose",
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

const isaacSim = new BlogBuilder({
  title: "AirPose",
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


// bloglist.push(independentcamera);
bloglist.push(independentcamera);
bloglist.push(irotate);

export default bloglist;
