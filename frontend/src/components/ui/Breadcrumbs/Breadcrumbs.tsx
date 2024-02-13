import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);

  const ignoredSegments = ['edit-account'];

  const isIgnoredSegment = (segment: string) =>
    ignoredSegments.includes(segment) || !isNaN(Number(segment));

  return (
    <div
      className={twMerge('flex items-center text-sm text-gray-800', className)}
    >
      <Link
        to="/"
        className={twMerge(
          'flex items-center hover:bg-bright-green hover:text-deep-gray',
          'transition-colors duration-300 rounded-md p-1'
        )}
      >
        <AiOutlineHome className="mr-1" />
        Home
      </Link>
      {pathnames.map((name, index) => {
        if (isIgnoredSegment(name)) {
          return null;
        }
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast =
          index === pathnames.length - 1 ||
          isIgnoredSegment(pathnames[index + 1]);
        return (
          <React.Fragment key={name}>
            <span className="mx-2"> / </span>
            {isLast ? (
              <span className="breadcrumb-active font-semibold">{name}</span>
            ) : (
              <Link to={routeTo} className="hover:text-bright-green">
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
