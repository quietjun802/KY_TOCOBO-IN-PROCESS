import React from "react";
import { headerData } from "../util/header";

const Util = ({ position }) => {
  let utilData = headerData.utils || [];

  if (position === "left") utilData = utilData.slice(0, 1);
  if (position === "right") utilData = utilData.slice(1);

  return (
    <ul className={`util-menu ${position}`}>
      {utilData.map((item) => (
        <li key={item.id}>
          <a href={item.href} aria-label={item.label}>
            <img src={item.icon} alt={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Util;
