import React from 'react';
import { Alert } from '@mui/material';

interface ErrorNotificationProps {
  error: any;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ error }) => {

	console.log('error', error);

  const getError = (error: any) => {
    if (error) {
      if ('message' in error) {
        return error.message;
      } else {
        return JSON.stringify(error.status);
      }
    }
    return '';
  };

  const errorMessage = getError(error);

  return (
    <Alert severity="error">
      {errorMessage}
    </Alert>
  );
};

export default ErrorNotification;
