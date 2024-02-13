import { Typography } from '@components/ui';
import { Link } from 'react-router-dom';

export const AccountSuccess = () => (
  <div className="flex flex-col items-center justify-center mx-auto">
    <Typography variant="h2" className="text-2xl font-bold mb-4">
      Account Created Successfully!
    </Typography>
    <Typography>
      Your account has been created. You can now manage your account.
    </Typography>
    <div className="m-2 space-x-2">
      <Link to="/" className="mt-4 text-blue-500">
        Go to Dashboard
      </Link>
      <span>or</span>
      <Link to="/view-accounts" className="mt-4 text-blue-500">
        manage accounts.
      </Link>
    </div>
  </div>
);
