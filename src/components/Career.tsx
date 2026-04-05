import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering - BE, CSE (DS)</h4>
                <h5>University of Mumbai / Vidyavardhini's College of Engineering and Technology</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              Grade: CGPA - 8.55
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC, Computer Science</h4>
                <h5>Thakur College of Science & Commerce</h5>
              </div>
              <h3>2022-2024</h3>
            </div>
            <p>
              Grade: 72%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC</h4>
                <h5>Seven Square Academy</h5>
              </div>
              <h3>2013-2022</h3>
            </div>
            <p>
              Grade: 83%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
