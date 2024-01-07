import { StylesConfig } from 'react-select';

export const customStyle: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles) => {
    return {
      ...styles,
      color: 'pink',
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      color: '#475569',
      backgroundColor: '#E2E8F0',
      padding: '5px',
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#475569',
    fontSize: '15px',
  }),
  multiValueRemove: (styles, { isFocused }) => ({
    ...styles,
    color: 'white',
    borderRadius: 5,
    background: !isFocused ? '#94A3B8' : 'primary',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    visibility: 'hidden',
  }),
};
