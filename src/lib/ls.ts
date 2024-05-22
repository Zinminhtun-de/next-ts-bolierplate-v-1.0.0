import CryptoJS from 'crypto-js';

export const DecryptLocalStorage = (key: string) => {
  return (
    localStorage.getItem(key) &&
    JSON.parse(
      CryptoJS.AES.decrypt(
        localStorage.getItem(key) as string,
        `${process.env.NEXT_PUBLIC_CRYTO_TOKEN}`
      )?.toString(CryptoJS.enc.Utf8)
    )
  );
};

export const EncryptLocalStorage = (data: any, LSKey: string) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    `${process.env.NEXT_PUBLIC_CRYTO_TOKEN}`
  ).toString();

  localStorage.setItem(LSKey, encrypted);
};
