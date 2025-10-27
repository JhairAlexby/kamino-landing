'use client'

import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const people = [
  {
    id: 1,
    name: 'JhairAlexby',
    designation: 'Software developer',
    image: '/images/team_images/astro.png',
  },
  {
    id: 2,
    name: 'Christian Josep',
    designation: 'UX/UI',
    image: '/images/team_images/bueno.png',
  },
  {
    id: 3,
    name: 'Adrián Espinoza',
    designation: 'Data Scientist',
    image: '/images/team_images/roboto.png',
  }
]

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  )
}