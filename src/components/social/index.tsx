import Link from "next/link";
import { FC, ReactNode } from "react";
import { FaGithub, FaKeyboard, FaLinkedinIn } from "react-icons/fa";

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

type SocialItem = {
  icon: ReactNode;
  path: string;
};

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/alwanfauzy" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/alwanfauzy" },
  { icon: <FaKeyboard />, path: "https://github.com/alwanfauzy" },
];

const Social: FC = ({ containerStyles = "", iconStyles = "" }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
