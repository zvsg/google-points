import React from 'react'

export default function SubmitButton({ loading, className, ...props }) {
  const disabled = loading ? 'disabled ' : ''

  const classes =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex mt-5 ' +
    disabled +
    className

  return (
    <button type="submit" className={classes} {...props} disabled={loading}>
      Submit
    </button>
  )
}
