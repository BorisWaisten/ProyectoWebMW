
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Analytics } from '@mui/icons-material'
import theme from '@/theme/theme'
import './globals.css'
import { AppProvider } from '@/context/app-context'
import Navbar from '@/components/nav-bar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Estudio de Diseño',
  description: 'Web oficial del estudio de diseño gráfico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppProvider>
              <Navbar />
              {children}
              <Footer />
              <Analytics />
            </AppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
