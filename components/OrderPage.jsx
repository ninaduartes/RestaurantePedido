import React, { useState } from "react";
import axios from "axios";
import Order from "./Order";

const SearchOrders = () => {
  const [cpf, setCpf] = useState("");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/orders?cpf=${cpf}`);
      setOrders(response.data);
      setError(null);
    } catch (error) {
      setError("An error occurred while searching for orders.");
      setOrders([]);
    }
  };

  return (
    <div>
      <h2>Search Orders</h2>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {orders.length > 0 ? (
        orders.map((order) => <Order key={order._id} order={order} />)
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default SearchOrders;
