import React, { forwardRef } from "react";

const Usecase = forwardRef((props, ref) => (
  <div ref={ref} className="page content-page">
    <h2>Use Case</h2>
  </div>
));

export default Usecase;
