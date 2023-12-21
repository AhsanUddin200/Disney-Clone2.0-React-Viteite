import React from 'react';

const Headeritem = ({ name, Icon }) => {
  const IconComponent = Icon; // Save the icon component reference
  return (
    <div className='text-white flex items-center gap-4 text-[14px] font-bold hover:underline underline-offset-8 mb-3 cursor-pointer'>
      <IconComponent /> {/* Render the icon component */}
      <p className=''>  {name}</p>
    </div>
  );
};

export default Headeritem;


