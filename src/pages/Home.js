import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [Customers, setCustomers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const result = await axios.get("http://localhost:8080/customers");
    setCustomers(result.data);
  };

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:8080/customer/${id}`);
    loadCustomers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-light table-striped table-hover border shadow">
          <thead>
            <tr className="table-dark">
              <th scope="col"> Edit</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">ID Card Number</th>
              <th scope="col"> Delete</th>
            </tr>
          </thead>
          <tbody>
            {Customers.map((customer, index) => (
              <tr>
                <th scope="row" key={index}>
                  <Link
                    className="btn btn-outline-primary"
                    to={`/editCustomer/${customer.id}`}
                  >
                    {index + 1}
                  </Link>
                </th>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.idNumber}</td>
                <td>
                  <button
                    onClick={() => deleteCustomer(customer.id)}
                    className="btn btn-danger mx-2"
                  >
                    &#128465;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link className="btn btn-success" to="/addcustomer">
          {" "}
          Create{" "}
        </Link>
      </div>
    </div>
  );
}
