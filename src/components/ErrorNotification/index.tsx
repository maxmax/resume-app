import React from 'react';
import { Alert } from '@mui/material';

interface Error {
  message?: string;
  status?: string | number;
}

interface ErrorNotificationProps {
  error: Error;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ error }) => {

  const getError = (error: Error) => {
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
