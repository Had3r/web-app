import type { SocialLinkProps } from './SocialLink.type';

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600"
    aria-label={label}
  >
    <Icon />
  </a>
);
