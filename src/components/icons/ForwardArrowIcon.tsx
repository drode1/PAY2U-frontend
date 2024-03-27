import { type FC } from 'react';

interface Props {
  className?: string;
  fill?: string;
}

const ForwardArrowIcon: FC<Props> = ({ className, fill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    className={className}
    <path d="M15.5858 12L8.29289 4.70711C7.90237 4.31658 
    7.90237 3.68342 8.29289 3.29289C8.68342 2.90237 9.31658
     2.90237 9.70711 3.29289L17.7071 11.2929C18.0976 11.6834
      18.0976 12.3166 17.7071 12.7071L9.70711 20.7071C9.31658
       21.0976 8.68342 21.0976 8.29289 20.7071C7.90237 20.3166
        7.90237 19.6834 8.29289 19.2929L15.5858 12Z"
      fill={fill} />
  </svg>
);


export default ForwardArrowIcon;