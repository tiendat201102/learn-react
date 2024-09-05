import ModalCreateUser from "./ModalCreateUser";

export default function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>
          Table user:
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
}
