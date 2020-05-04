import React from 'react';
import ReactTooltip from "react-tooltip";

import SEO from "./seo";


const Wrapper = ({ children }) => {

  return (
    <div>
      <SEO />

      <div className="mx-8 lg:mx-16">{children}</div>
      <ReactTooltip />
    </div>
  );
};


export default Wrapper;
