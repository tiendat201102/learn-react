import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

import { FcPlus } from "react-icons/fc";
import { useState } from "react";

export default function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreatUser] = useState(false)

  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>

      <div className="user-content">
        <div className="btn-add-new">
          
          <button className="btn btn-primary" onClick={() => setShowModalCreatUser(!showModalCreateUser)}> <FcPlus/> Add new user</button>
        </div>

        <div className="table-user-container">Table user:</div>
        <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreatUser}/>
      </div>
    </div>
  );
}
