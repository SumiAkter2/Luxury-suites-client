import React, { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
const BookingList = () => {
  const [booking, setBooking] = useState([]);
  //  const [order, setOrder] = useState([]);
  //  useEffect(() => {
  //    fetch(`https://warm-refuge-78132.herokuapp.com/orders/${user?.email}`)
  //      .then((res) => res.json())
  //      .then((data) => setOrder(data));
  //  }, [user?.email]);

  useEffect(() => {
    fetch("https://luxury-suites-server-production.up.railway.app/bookings")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleDelete = (id) => {
    alert("sure to delete");
    fetch(
      `https://luxury-suites-server-production.up.railway.app/bookings/${id} `,
      {
        method: "DELETE",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const restData = data.filter((o) => o._id !== id);
        setBooking(restData);
        // swal('Are you sure to Delete your order??')
        console.log(data);
      });
    console.log("dlt");
  };
  return (
    <div>
      <h1 className="text-3xl p-6">Your Booking List</h1>
      <div className="w-full px-6 my-6">
        <div className="overflow-x-auto shadow-lg  top-24 mt-4">
          <table className="table table-compact w-full mb-6 ">
            <thead >
              <tr className="text-primary">
                <th>No</th>
                <th>Name</th>
                <th>Bed</th>
                <th>Guest</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((s, index) => (
                <tr className="hover" key={s._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={s.bookingImage} alt="bed pictures" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{s.bookingName}</div>
                        <div className="font-bold ">
                          {s.bookingBalance}/night
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{s.bookingBed}</td>
                  <td>
                    {s.bookingGuest}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {s.bookingSqr}
                    </span>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs h-12">
                      <MdPayment size="20px" className="mr-2 " />
                      Payment
                    </button>
                  </th>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs h-12"
                      onClick={handleDelete}
                    >
                      <MdDeleteOutline size="20px" className="mr-2 " />
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
  );
};

export default BookingList;
