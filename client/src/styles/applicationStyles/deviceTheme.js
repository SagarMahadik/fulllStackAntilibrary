import theme from 'styled-theming';

export const width = theme('layout', {
  mobile: '375px',
  tablet: '767px',
  desktop: '1280px'
});

export const height = theme('layout', {
  mobile: '200px',
  tablet: '200px',
  desktop: '200px'
});

export const viewbox = theme('layout', {
  mobile: '0 0 99 52.917',
  tablet: `"0 0 206.375 52.917"`
});

export const transform = theme('layout', {
  mobile: 'matrix(0.93234,0,0,1,0.356, -243.65)',
  tablet: 'matrix(1.94834, .0108, 0, 1.01435, -.16, -248.665)'
});
