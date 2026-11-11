import Image from "next/image";
import darkLogo from "@/content/icons/icon-theme-dark.svg";
import lightLogo from "@/content/icons/icon-theme-light.svg";

export function ThemeLogo({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <span className={`theme-logo ${className}`} aria-hidden="true">
      <Image
        className="theme-logo__light"
        src={lightLogo}
        alt=""
        loading={eager ? "eager" : "lazy"}
      />
      <Image
        className="theme-logo__dark"
        src={darkLogo}
        alt=""
        loading={eager ? "eager" : "lazy"}
      />
    </span>
  );
}
