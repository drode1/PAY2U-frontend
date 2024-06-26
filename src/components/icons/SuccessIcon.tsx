import { type FC } from 'react';
import { useTheme } from '@mui/material/styles';

interface Props {
  width: number;
  height: number;
}

const SuccessIcon: FC<Props> = ({ width, height }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.2803 8.78033C13.5732 8.48744 13.5732 8.01256 13.2803
       7.71967C12.9874 7.42678 12.5126 7.42678 12.2197 7.71967L9 10.9393L7.78033
        9.71967C7.48744 9.42678 7.01256 9.42678 6.71967 9.71967C6.42678 10.0126 6.42678
         10.4874 6.71967 10.7803L8.46967 12.5303C8.76256 12.8232
          9.23744 12.8232 9.53033 12.5303L13.2803 8.78033Z"
        fill={theme.palette.success.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5
       10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10ZM17 10C17
        13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10
         3C13.866 3 17 6.13401 17 10Z"
        fill={theme.palette.success.main}
      />
    </svg>
  );
};

export default SuccessIcon;
