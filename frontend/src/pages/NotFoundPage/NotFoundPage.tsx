import { Typography } from '@components/ui';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center mx-auto ">
    <Typography variant="h2" className="font-bold mb-4">
      404
    </Typography>
    <Typography>The page was not found</Typography>
    <Link to="/" className="mt-4 text-blue-500">
      Go to Dashboard
    </Link>
  </div>
);
