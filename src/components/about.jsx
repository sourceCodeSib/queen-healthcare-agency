export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Our Mission</h3>
              <p>To find expert talent capable of providing first class healthcare, helping to make sure the community is a safer, healthier place.</p>
              <h3>Our Values</h3>
              <p>Integrity and compassion. Ensuring compassionate, honest care giving is our number one priority.</p>
              <h3>Our Focus</h3>
              <p>Our sole focus is that of the patient. The betterment of their health and wellbeing is our ultimate goal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
