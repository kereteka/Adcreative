import React from 'react';
import { ParsedText } from 'react-substring-styler';

export const CustomOption: React.FC = React.memo(
  ({
    label,
    data,
    value,
    isSelected,
    innerProps,
    innerRef,
    options,
    isFocused,
  }: any) => {
    const lastIndex = options.findLastIndex(
      (option: { value: number }) => option.value === value
    );
    const isLastOption = lastIndex === options.length - 1;

    const style = {
      alignItems: 'center',
      color: '#475569',
      display: 'flex',
    };

    const className = 'flex h-[80px] overflow-hidden w-full';
    const props = {
      ...innerProps,
      className,
      style,
    };

    return (
      <div {...props} ref={innerRef}>
        <div
          className={`flex items-center border-gray-400  h-[80px]  w-full ${
            !isLastOption && 'border-b'
          } `}
        >
          <div className="flex items-center gap-4 ml-4 my-auto overflow-hidden justify-around">
            <input
              className="w-5 h-5"
              style={{ zIndex: '-999' }}
              type="checkbox"
              checked={isSelected || isFocused}
              onClick={(e) => e.stopPropagation()}
            />
            <img
              src={data.image}
              alt={label}
              style={{
                cursor: 'pointer',
                width: '55px',
                height: '55px',
                // marginRight: '8px',
                // marginTop: '8px',
                borderRadius: 10,
              }}
            />
            <div>
              <ParsedText
                patterns={[
                  {
                    type: 'squareBrackets',
                    style: {
                      fontWeight: 'bold',
                    },
                  },
                ]}
              >
                {data.name}
              </ParsedText>
              <p className=" opacity-80"> {data.episodeLength} episodes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CustomOption;
