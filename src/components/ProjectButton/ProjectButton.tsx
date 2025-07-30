import React, { ReactNode } from "react";

type ProjectButtonProps = {
  name: string;
  dateString: string;
  endContent?: ReactNode;
  href?: string;
  disabled?: boolean;
};

const ProjectButton = ({
  name,
  dateString,
  endContent,
  href,
  disabled,
}: ProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "flex flex-col w-full px-4 py-2 outline outline-transparent transition-all ease-in-out border-b border-base-100" +
        (!disabled ? " hover:outline-1 hover:outline-base-100" : " opacity-50")
      }
      aria-disabled={disabled}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs">{dateString}</p>
        </div>
        <div className="flex gap-1 flex-wrap justify-end">{endContent}</div>
      </div>
    </a>
  );
};

export default ProjectButton;
