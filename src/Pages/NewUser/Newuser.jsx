import "./newuser.css";

export default function Newuser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Username</label>
          <input type="text" name="" id="" placeholder=" Enter UserName" />
        </div>
        <div className="newUserItem">
          <label> Full Name</label>
          <input type="text" name="" id="" placeholder=" Enter Full Name" />
        </div>
        <div className="newUserItem">
          <label> Email</label>
          <input type="text" name="" id="" placeholder=" Enter Email" />
        </div>
        <div className="newUserItem">
          <label> Password</label>
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label> Phone</label>
          <input type="text" name="" id="" placeholder=" Enter Phone no" />
        </div>
        <div className="newUserItem">
          <label> Address</label>
          <input type="text" name="" id="" placeholder=" Enter Address" />
        </div>
        <div className="newUserItem">
          <label> Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label For="Male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label For="Female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
}
