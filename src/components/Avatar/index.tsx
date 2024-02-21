import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

interface AvatarComponentProps extends AvatarProps {}

const AvatarComponent: React.FC<AvatarComponentProps> = (props) => {
  return <Avatar {...props} />;
};

export default AvatarComponent;