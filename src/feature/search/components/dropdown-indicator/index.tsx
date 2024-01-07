// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { DropdownIndicatorProps, components } from 'react-select';

// library.add(faCaretDown);

//   const CaretDownIcon = () => {
//     return (
//       <FontAwesomeIcon icon="caret-down" className=" text-xl text-[#161B22]" />
//     );
//   };
//   const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
//     return (
//       <components.DropdownIndicator {...props}>
//         <CaretDownIcon />
//       </components.DropdownIndicator>
//     );
//   };

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { components, DropdownIndicatorProps } from 'react-select';

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  library.add(faCaretDown);

  const CaretDownIcon = () => {
    return (
      <FontAwesomeIcon icon="caret-down" className="text-xl text-[#161B22]" />
    );
  };

  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
