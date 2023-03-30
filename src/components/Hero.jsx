import profile from "../assets/profile.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Stanley Balmores, at your service!</h1>
          <p>Aspiring Full stack WEB Developer!</p>
          <div className="hero-buttons">
            {/* <button className="cta">EXPLORE</button> */}
            <button className="noncta">HIRE ME</button>
          </div>
        </div>
        <img id="profilepic" src={profile} alt="" />
      </div>
    </div>
  )
}

export default Hero