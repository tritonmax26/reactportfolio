import gradpic from "../assets/gradpic.jpg"
const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="container">
        <img src={gradpic} alt="" />
        <div className="about-text">
          <h3>Why Hire Me?</h3>
          <p>I have all the skills and experience listed in the job description, and I'm confident that I can make an immediate impact on you.</p>
          <h3>The best thing about me.</h3>
          <p>My skills and qualifications can prove that you've got the best web developer,the skills that you are looking for in a candidate. </p>
        </div>
      </div>
    </section>
  )
}

export default About