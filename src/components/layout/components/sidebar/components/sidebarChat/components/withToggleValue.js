import React, { useState } from 'react';

const withToggleValue = (Component) => (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return <Component {...props} isOpen={open} toggle={handleOpen} />;
};

export default withToggleValue;
