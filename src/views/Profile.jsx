import devchallenges from "../assets/devchallenges.svg";

function Profile() {
  return (
    <div>
      <div className="navbar">
        <a href="https://devchallenges.io">
          <img src={devchallenges} alt="devchallenges" />
        </a>
        <img src="" alt="profile-pic" />
        <p>name</p>
      </div>

      <div className="title">
        <h1>Personal info</h1>
        <p>Basic info, like your name and photo</p>
      </div>

      <div className="profile-container">
        <div className="profile-text-container">
          <div className="text">
            <h3>Profile</h3>
            <small>Some info may be visible to other people</small>
          </div>
          <button>Edit</button>
        </div>

        <div className="table">
          <div className="row">
            <p>Photo</p>
            <img src="" alt="profile" />
          </div>

          <div className="row">
            <p className="cell">Name</p>

            <input type="text" name="name" value="Xanthe Neal" disabled />
          </div>

          <div className="row">
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              value="I am software developer and a big fan of devchallenges..."
              disabled
            />
          </div>

          <div className="row">
            <p>Phone</p>
            <input type="number" name="phone" value="2908249274292" disabled />
          </div>

          <div className="row">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value="xanthe.neal@gmail.com"
              disabled
            />
          </div>

          <div className="row">
            <p>Password</p>
            <input type="password" name="password" value="******" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
