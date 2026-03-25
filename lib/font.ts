import localFont from 'next/font/local';

export const interFont = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-VariableFont_opsz,wght.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--inter-font',
  display: 'swap',
});
