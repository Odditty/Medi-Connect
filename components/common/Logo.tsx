import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="283"
      height="64"
      viewBox="0 0 283 64"
    >
      <g fill="#000000" stroke="none">
        <path
          d="M0 1295 l0 -1295 1080 0 1080 0 0 1295 0 1295 -1080 0 -1080 0 0
-1295z m1745 -79 l0 -667 -135 0 -135 0 -3 265 -2 266 -131 0 -130 0 1 -267 2
-267 -137 1 -138 1 2 265 2 265 -129 1 -129 1 5 -105 c2 -58 1 -178 -3 -268
l-7 -162 -135 0 -135 1 -2 667 -1 667 140 0 140 0 0 -265 0 -265 128 0 127 0
0 265 0 265 141 0 c121 0 140 -2 135 -15 -3 -8 -6 -126 -6 -262 l-1 -248 131
0 131 0 0 262 0 262 127 3 c70 2 132 3 137 2 7 0 10 -230 10 -668z"
        />
      </g>
    </svg>
  );
}

export default Logo;
