import React from "react";
import MemberItem from "./MemberItem";

export default function MemberList({ items }) {
  return (
    <div className="items">
      {items.length > 0 && items.map((item) => {
        const { id, title, description, endsAt } = item;
        return <MemberItem key={id} id={id} title={title} description={description} endsAt={endsAt}/>;                        
      })}
    </div>
  );
}