import React from "react";
import styled from "styled-components";

type BaseProps = {
  id?: string;
  className?: string;
};

const u_Link: React.FunctionComponent<BaseProps & { href?: string }> = ({
  id,
  className,
  href,
  children,
}) => {
  return (
    <a id={id} className={className} href={href}>
      {children}
    </a>
  );
};

export const Link = styled(u_Link)`
  -webkit-transition: color 1s; /* For Safari 3.0 to 6.0 */
  transition: color 1s; /* For modern browsers */
`;
