import { SocialLink } from '@components/ui';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-light-gray py-5 px-4">
    <div className="container mx-auto min-[560px]:items-center flex flex-col md:flex-row md:justify-between gap-4 px-4">
      <div className="hidden md:block" />
      <p>© {new Date().getFullYear()} BankApp. All rights reserved.</p>
      <nav className="flex gap-4">
        <SocialLink
          href="https://github.com/Had3r/web-app"
          icon={FaGithub}
          label="GitHub"
        />
        <SocialLink
          href="https://www.linkedin.com/in/adrian-zawadzki/"
          icon={FaLinkedin}
          label="LinkedIn"
        />
        <SocialLink
          href="mailto:adrian.zawadzki1624@gmail.com"
          icon={FaEnvelope}
          label="Email"
        />
      </nav>
    </div>
  </footer>
);
