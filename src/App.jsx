import React, { useState } from 'react'
import './App.css'
import * as THREE from 'three';

const canvas = document.querySelector("canvas.webgl")

function App() {

  const scene = new THREE.Scene()
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: "red" })
  const mesh = new THREE.Mesh(geometry, material)

  scene.add(mesh)

  const sizes = {
    width: 800,
    height: 600
  }

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  scene.add(camera)

  const renderer = new THREE.WebGLRenderer({ canvas: canvas })
  renderer.setSize(sizes.width, sizes.height)

  return (
    <>
      <p>Hello world</p>
    </>
  )
}

export default App
