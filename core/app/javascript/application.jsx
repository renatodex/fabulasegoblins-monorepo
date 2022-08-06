import React from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './app/routes'

const root = createRoot(document.getElementById('app'))
root.render(<Routes />)