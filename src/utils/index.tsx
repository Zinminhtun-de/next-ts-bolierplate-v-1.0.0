import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
export const dayjsMMTZ = dayjs().tz('Asia/Yangon');

export const routeFilter = (params: any) => {
  return new URLSearchParams(params);
};

export const maskNumber = (value: number | string, maskValue?: number) => {
  const numberString = value.toString();
  const lastFourDigits = numberString.slice(-4);
  const masked = '*'.repeat(maskValue ?? 4) + lastFourDigits;

  return {
    lastFour: lastFourDigits,
    masked,
  };
};

export const formatAmount = (val: number) => {
  return `${
    val
      ? Number(val)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      : 0
  }`;
};
