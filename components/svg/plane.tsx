import React, { Fragment } from 'react'

const PlaneIcon = ({
  height,
  width,
  color,
}: {
  height: string
  width: string
  color: string
}) => {
  return (
    <Fragment>
      <svg height={height} width={width} fill={color} viewBox="0 0 24 24">
        <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    </Fragment>
  )
}

export default PlaneIcon
