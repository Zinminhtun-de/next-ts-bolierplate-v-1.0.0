import localFont from 'next/font/local';

const quickSand = localFont({
  src: [
    {
      path: '../components/fonts/Quicksand-Light.ttf',
      weight: '400',
    },
    {
      path: '../components/fonts/Quicksand-Regular.ttf',
      weight: '500',
    },
    {
      path: '../components/fonts/Quicksand-Medium.ttf',
      weight: '600',
    },
    {
      path: '../components/fonts/Quicksand-SemiBold.ttf',
      weight: '700',
    },
    {
      path: '../components/fonts/Quicksand-Bold.ttf',
      weight: '800',
    },
  ],
});

export default quickSand;
