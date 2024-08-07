import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const addToast = (message, severity = 'info') => {
    setToast({ message, severity });
    setTimeout(() => setToast(null), 3000);
  };

  const handleClose = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {toast && (
          <Alert onClose={handleClose} severity={toast.severity}>
            {toast.message}
          </Alert>
        )}
      </Snackbar>
    </ToastContext.Provider>
  );
};
