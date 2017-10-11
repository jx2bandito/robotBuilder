# Robot Builder/ModulaRobot
 
 A work in progress. This project uses webpack, React, and SCSS. In my opinion, this project is a lot more organized than my previous React project, Joel's Adventure. 
 The robot parts are made with CSS art, although future ones might be made with SVG. Each robot part is a component that will live inside its own folder alongside its accompanying SCSS file. 
 These parts are imported into partsList.js where they're stored and organized using object literals. </br></br>The object partsList in turn is exported to the main app component and the selectBox component. 
 selectBox has stateless children that determine which of the part to preview and select. </br></br>Upon selection, the data passes back all the way to app.js 
 which renders the respective robot part. The robot part is assembled using GSAP. </br></br>The underlying concept is that the parts are modular and as the project grows, 
 multiple parts from different families can be combined to create unique robots. At the moment, the architecture for previewing and selecting parts 
 is already completed. The parts themselves however are currently in progress. 
 
  
### User stories: <br />
* User can preview and rotate through available robot parts (currently limited to a samurai head part, a samurai body part, and placeholders)
* User can select an available robot part, which will assemble via animation. 
* User can assemble multiple parts simultaneously. 


