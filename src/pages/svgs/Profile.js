import * as React from "react"

const Profile = (props) => (
  <svg
    width={49}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.397 42.293A11.253 11.253 0 0 1 21.5 36h6c4.43 0 8.268 2.572 10.103 6.293M24.5 31.5a8.25 8.25 0 0 1-8.25-8.25V21a8.25 8.25 0 0 1 16.5 0v2.25a8.25 8.25 0 0 1-8.25 8.25ZM47 24c0 12.426-10.074 22.5-22.5 22.5S2 36.426 2 24 12.074 1.5 24.5 1.5 47 11.574 47 24Z"
      stroke="url(#a)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={24.5}
        y1={1.5}
        x2={24.5}
        y2={46.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00D18F" />
        <stop offset={1} stopColor="#40FA84" />
      </linearGradient>
    </defs>
  </svg>
)

export default Profile
