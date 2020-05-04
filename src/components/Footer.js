import React from "react"

const Footer = () => {
  const data = [
    "Licensed under MIT.",
    `Copyright ${new Date().getFullYear()} Jake Admire.`,
    "Made with love in Fort Collins, CO.",
  ]

  const renderString = str => {
    return <p className="opacity-50 text-sm font-medium">{str}</p>
  }

  return (
    <footer className="flex flex-col my-8">
      {data.map(str => renderString(str))}
    </footer>
  )
}

export default Footer
