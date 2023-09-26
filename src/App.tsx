import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from '../src/globalConfig/router'
import { customTheme } from './globalConfig/customTheme'
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<LoadingIndicator />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App
