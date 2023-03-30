import prof from "../assets/siklab.jpg"

const Projects = () => {
   return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="maincontainer">
          <div className="container">       
            <div className="project">
            <img src={prof} alt="" />
              <div className="project-overlay">
                <h3>Project 1</h3>
              </div>        
            </div>
          </div>

          <div className="container">
            <div className="project">
            <img src={prof} alt="" />
              <div className="project-overlay">
                <h3>Project 2</h3>
              </div>        
            </div>
          </div>
          <div className="container">
            <div className="project">
            <img src={prof} alt="" />
              <div className="project-overlay">
                <h3>Project 3</h3>
              </div>        
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects