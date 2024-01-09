import { createTheme } from '@mui/system';

// Define breakpoints for media queries
const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Create a Material-UI theme with breakpoints
const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
});

// Media query functions
export const mediaQuery = {
  up: (key) => `@media (min-width: ${theme.breakpoints.values[key]}px)`,
  down: (key) => `@media (max-width: ${theme.breakpoints.values[key] - 1}px)`,
  between: (start, end) =>
    `@media (min-width: ${theme.breakpoints.values[start]}px) and (max-width: ${theme.breakpoints.values[end] - 1}px)`,
};

export default theme;
