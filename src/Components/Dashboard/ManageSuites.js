import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../Button/Button";
import useSuites from "../Hooks/useSuites";

const ManageSuites = () => {
  const [suites] = useSuites();
  return (
    <div>
      <div>
        <p className="font-bold pl-6 mt-6">Manage All Suites:</p>

        <div className="w-full px-6 ">
          <div className="overflow-x-auto shadow-lg  top-24 mt-4">
            <table className="table table-compact w-full mb-6">
              <thead>
                <tr className="text-primary">
                  <th>No</th>

                  <th>Name</th>
                  <th>Bed</th>
                  <th>Guest</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {suites.map((s, index) => (
                  <tr className="hover" key={s._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={s.picture} alt="bed pictures" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{s.name}</div>
                          <div className="font-bold ">{s.balance}/night</div>
                        </div>
                      </div>
                    </td>
                    <td>{s.bed}</td>
                    <td>
                      {s.guest}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {s.sqr}
                      </span>
                    </td>

                    <th className="flex flex-col">
                      <button className="btn btn-primary btn-xs btn-outline mb-2">
                        <FontAwesomeIcon className="mr-2" icon={faAdd} />
                        Add
                      </button>
                      <button className="btn btn-primary  btn-xs ">
                        <FontAwesomeIcon className="mr-2" icon={faTrash} />
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSuites;
