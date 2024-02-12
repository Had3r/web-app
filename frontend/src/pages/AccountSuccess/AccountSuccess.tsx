import { Link } from 'react-router-dom';

export const AccountSuccess = () => (
  <div className="flex flex-col items-center justify-center ">
    <h2 className="text-2xl font-bold mb-4">Account Created Successfully!</h2>
    <p>Your account has been created. You can now manage your account.</p>
    <Link to="/" className="mt-4 text-blue-500">
      Go to Dashboard
    </Link>
  </div>
);
