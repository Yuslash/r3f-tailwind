import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Create the root for your WebGL canvas
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

createRoot(document.getElementById('webgl')).render(
  <Canvas
    shadows
    camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}
    gl={{ clearColor: 'lightblue' }}
  >
    <Experience />
  </Canvas>
)