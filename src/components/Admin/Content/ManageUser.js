import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

import { FcPlus } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";

export default function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState("");

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

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>

      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(!showModalCreateUser)}
          >
            {" "}
            <FcPlus /> Add new user
          </button>
        </div>

        <div className="table-user-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />

        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
}
