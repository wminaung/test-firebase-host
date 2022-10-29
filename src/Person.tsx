import React from "react";
interface Props {
  name: string;
  age: number;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

const Person = (props: Props) => {
  return (
    <div>
      <h3>name : {props.name} </h3>
      <h3>age : {props.age} </h3>
      <h3>country: {props.country} </h3>
      {props.friends.map((friend: string, key: number) => {
        return (
          <h4 key={key}>
            friend{key + 1}: {friend}
          </h4>
        );
      })}
    </div>
  );
};

export default Person;
