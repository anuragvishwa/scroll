import React from 'react'
import ReactDOM from 'react-dom'
import { useSprings, a } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import './styles1.css'

export const Cards = function Cards() {
  const mass = i => ({ mass: 1 + i * 2, tension: 700 - i * 100, friction: 30 + i * 20 })
  const [springs, set] = useSprings(3, i => ({ translate3d: [0, -i * 30, 0], rotateZ: 0, config: mass(i) }))
  const bind = useDrag(({ local: [x, y], down }) =>
    set(i => ({ translate3d: [x + down * i * 20, y - i * 30 - down * i * 120, 0], rotateZ: down * i * 10 }))
  )
  return springs.map((props, i) => <a.div key={i} {...bind()} style={{ zIndex: springs.length - i - 1, ...props }} />)
}
