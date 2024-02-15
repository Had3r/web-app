import type { ErrorAlertProps } from './ErrorAlert.type';

export const ErrorAlert = ({ message }: ErrorAlertProps) => (
  <div className="mx-auto flex justify-center items-center">
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold mr-1">Error!</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  </div>
);
