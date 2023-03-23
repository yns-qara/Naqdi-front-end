import * as React from "react"

const Arrow = (props) => (
  <svg
    width={14}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.6 1.5 1 7.5l6.6 6"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.2 1.5-6.6 6 6.6 6"
      stroke="#40FA84"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Arrow
