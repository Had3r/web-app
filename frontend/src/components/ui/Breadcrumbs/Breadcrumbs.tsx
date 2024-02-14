import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import type { BreadcrumbsProps } from './Breadcrumbs.type';

export const Breadcrumbs = ({ className, breadcrumbs }: BreadcrumbsProps) => {
  const linkStyles =
    'flex items-center hover:bg-bright-green hover:text-deep-gray transition-colors duration-300 rounded-md p-1';

  return (
    <div
      className={twMerge('flex items-center text-sm text-gray-800', className)}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const isFirst = index === 0;
        return (
          <React.Fragment key={breadcrumb.label}>
            {index > 0 && <span className="mx-2"> / </span>}
            {isFirst ? (
              <Link to={breadcrumb.link || '#'} className={twMerge(linkStyles)}>
                <AiOutlineHome className="mr-1" />
                {breadcrumb.label}
              </Link>
            ) : isLast ? (
              <span className="breadcrumb-active font-semibold">
                {breadcrumb.label}
              </span>
            ) : (
              <Link to={breadcrumb.link || '#'} className={twMerge(linkStyles)}>
                {breadcrumb.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
