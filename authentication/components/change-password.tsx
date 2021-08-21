import { useState } from "react";

const ChangePasswordForm = ({ onChangePassword }) => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangePassword({ newPassword, oldPassword });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="oldPassword"> old Password</label>
        <input
          type="password"
          name="oldPassword"
          id="oldPassword"
          required
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};
export default ChangePasswordForm;
