import React from 'react';
import ReactTooltip from "react-tooltip";

import SEO from "./seo";


const Wrapper = ({ children }) => {

  return (
    <div>
      <SEO />

      <div className="mx-8 lg:mx-16 grid grid-cols-1 gap-24">{children}</div>
      <ReactTooltip />
    </div>
  );
};


export default Wrapper;
