import React from "react";
import Card from "../../../components/Card/card";

const Cards = () => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td style={{ width: "25%", padding: "10px" }}>
            <Card
              description={"this is a card component"}
              title={"Title"}
              key={1}
            />
          </td>
          <td style={{ width: "25%", padding: "10px" }}>
            <Card
              description={"That is card"}
              title={"New Title"}
              key={1}
              image="https://images.unsplash.com/photo-1511974035430-5de47d3b95da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhcmR8ZW58MHx8fHwxNjYwMDQxMTg5&ixlib=rb-1.2.1&q=80&w=400
"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cards;
