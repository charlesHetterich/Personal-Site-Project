import React from "react";
export const Emoji: React.FunctionComponent<{
  symbol: string;
  label?: string;
}> = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
export default Emoji;
