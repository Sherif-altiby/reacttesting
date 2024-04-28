 
const Application = () => {
  return (
    <div>
        <div>
            <h1> The page heading </h1>
            <h2> The section heading </h2>
            <p>All Field Are Mandatory</p>
        </div>
        <span title="close" > X </span>
        <img src={"img"} alt="img" />
        <div data-testid = "custome-element" >Custom Html Element</div>
      <form>
        <div>
          <label htmlFor="name"> Name </label>
          <input type="text" id="name" placeholder="full name" value="Sherif altiby" onChange={() => console.log("first")} />
        </div>
        <div>
            <label htmlFor="bio"> Bio </label>
            <textarea id="bio" name="bio" ></textarea>
        </div>
        <div>
          <label htmlFor="job"> Your Job </label>
          <select name="" id="job">
            <option value=""> Select a job </option>
            <option value="FE"> Frontend </option>
            <option value="BE"> DackEnd </option>
            <option value="UI"> UI / UX </option>
            <option value="FL"> Flutter </option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions.
          </label>
        </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Application;
