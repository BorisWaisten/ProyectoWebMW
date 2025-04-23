// theme.js
'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fa8072', // salmon (var(--color-primary))
    },
    secondary: {
      main: '#e9967a', // peach (var(--color-secondary))
    },
    coral: {
      main: '#e37c7e', // color extraído del branding
    },
    mint: {
      main: '#aecb83',
    },
    blush: {
      main: '#fae4e1',
    },
    lightmint: {
      main: '#bfdcc7',
    },
    dark: {
      main: '#030304',
    },
    background: {
      default: '#fffaf9', // fondo muy claro y suave
      paper: '#ffffff',   // tarjetas blancas
    },
    text: {
      primary: '#333333',   // texto principal gris oscuro
      secondary: '#7a5753', // acentos suaves
    },
  },
  typography: {
    fontFamily: `'Cormorant Garamond', serif`,
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.25rem',
    },
    body1: {
      fontSize: '1.125rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          textTransform: 'none',
          padding: '0.5rem 1.5rem',
        },
      },
    },
  },
})

export default theme
