import React from 'react';

import type { NotificationProps } from './Notification.type';

export const Notification = ({
  message,
  isVisible,
  onClose,
  type = 'success',
}: NotificationProps & { type?: 'success' | 'error' }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColorClass = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div
      className={`fixed bottom-5 right-5 ${bgColorClass} text-white p-2 rounded-md shadow-md`}
    >
      {message}
    </div>
  );
};
