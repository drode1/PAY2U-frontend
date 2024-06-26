import { type FC } from 'react';

interface HeartProps {
  isLiked?: boolean;
}

const HeartButton: FC<HeartProps> = ({ isLiked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <g filter="url(#filter0_d_580_7430)">
        <path
          d="M14.6842 24.4513L14.6812 24.4529C14.6247 24.4841
         14.5625 24.5 14.5 24.5C14.4375 24.5 14.3753 24.4841 14.3188
          24.4529L14.3158 24.4513C14.0864 24.3266 11.1047 22.6576 8.18786
           20.0344C5.24696 17.3896 2.50013 13.8889 2.5 10.1061C2.502 8.35048
            3.18215 6.66992 4.38722 5.43243C5.59184 4.19539 7.22222 3.50204 8.91994
             3.5C10.9741 3.50015 12.8617 5.13023 14.0964 6.81887L14.5 7.3709L14.9036
              6.81887C16.1383 5.13023 18.0259 3.50015 20.0801 3.5C21.7778 3.50204
               23.4082 4.19539 24.6128 5.43243C25.8179 6.66998 26.4981 8.35066 26.5 10.1064C26.4997
                13.8891 23.753 17.3896 20.8121 20.0344C17.8953 22.6576 14.9136 24.3266 14.6842 24.4513Z"
          fill={isLiked ? 'rgba(255, 75, 107, 1)' : 'none'}
          stroke={isLiked ? 'rgba(255, 75, 107, 1)' : 'rgba(255, 255, 255, 1)'}
        />
      </g>
    </svg>
  );
};

export default HeartButton;
