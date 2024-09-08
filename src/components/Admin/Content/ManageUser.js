import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

import { FcPlus } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import TableUser from "./TableUser";

export default function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreatUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUser();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>

      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreatUser(!showModalCreateUser)}
          >
            {" "}
            <FcPlus /> Add new user
          </button>
        </div>

        <div className="table-user-container">
          <TableUser listUsers={listUsers}/>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreatUser}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
}
