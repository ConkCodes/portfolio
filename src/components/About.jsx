
function About() {
  return(
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <div className="w-[700px] space-y-4">
        <div>
          <h3>
            About Me
          </h3>
        </div>
        <div className="space-y-2">
          <p>
            Hello! I'm a recent graduate from Wilfrid Laurier University's Business Administration and Computer Science double degree program. 
            My educational journey has equipped me with a unique blend of skills that allows me to seamlessly bridge the worlds of business and technology.
          </p>
          <p>
            One thing I've learned is that in the world of technology, learning never stops. 
            I'm on an endless quest to acquire knowledge and stay ahead of the curve. 
            The dynamic nature of technology, from software engineering to machine learning and data analysis, 
            keeps me motivated to expand my skill set and embrace new challenges.
          </p>
        </div>
        <div>
          <h5 className="mb-2">Relvant Course Work</h5>
          <h6>
            Software Dev
            <span>
              : Software Engineering,
              Data Structures II,
              Algorithm Design & Analysis,
              Object-Oriented Programming,
              Operating Systems,
              Computer Security
            </span>
          </h6>
          <h6>
            Data & Analysis
            <span>
              : Machine Learning,
              Artificial Intelligence,
              Databases,
              Managerial Statistics,
              Windows Application Programming
            </span>
          </h6>
          <h6>
            Math
            <span>
              : Calculus I,
              Linear Algebra,
              Mathematical Proofs,
              Discrete Mathematics
            </span>
          </h6>
          <h6>
            Finance
            <span>
              : Financial Management II,
              Options, Futures & Swaps,
              Fixed Income Analysis,
              Advanced Corporate Finance,
              Investment Management
            </span>
          </h6>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;
