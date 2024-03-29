import React from "react";

import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconTelegram,
} from "@/components/icons";

type IconProps = {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "AppStore":
      return <IconAppStore />;
    case "Bookmark":
      return <IconBookmark />;
    case "Codepen":
      return <IconCodepen />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Fork":
      return <IconFork />;
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Loader":
      return <IconLoader />;
    case "Logo":
      return <IconLogo />;
    case "PlayStore":
      return <IconPlayStore />;
    case "Star":
      return <IconStar />;
    case "Twitter":
      return <IconTwitter />;
    case "Telegram":
      return <IconTelegram />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
