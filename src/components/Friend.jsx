import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img
        src={friend.image}
        alt={friend.name}
      />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Jesteś winien {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} jest winien {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p className="black">Ty i {friend.name} jesteście wyrównani.</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Zamknij" : "Wybierz"}
      </Button>
    </li>
  );
};

export default Friend;
