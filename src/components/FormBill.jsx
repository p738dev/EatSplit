import React, { useState } from "react";
import Button from "./Button";

const FormBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByMe, setPaidByMe] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByMe : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByMe) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByMe);
  };

  return (
    <form
      className="form-bill"
      onSubmit={handleSubmit}
    >
      <h2>Podział rachunku z {selectedFriend.name}</h2>

      <label>Wartość rachunku</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Twoja wartość</label>
      <input
        type="text"
        value={paidByMe}
        onChange={(e) =>
          setPaidByMe(
            Number(e.target.value) > bill ? paidByMe : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s wartość</label>
      <input
        type="text"
        value={paidByFriend}
        disabled
      />

      <label>Kto płaci rachunek?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Ty</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Podziel rachunek</Button>
    </form>
  );
};

export default FormBill;
