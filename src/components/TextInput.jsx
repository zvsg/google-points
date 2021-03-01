import React from 'react'

export default function SubmitButton({ className, ...props }) {
  const classes =
    'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' +
    className

  return <input type="text" className={classes} {...props} />
}
