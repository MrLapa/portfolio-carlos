'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider as BaseI18nextProvider } from 'react-i18next';
import i18n from '@/src/i18n/config';

interface I18nextProviderProps {
  children: React.ReactNode;
}

const I18nextProvider = ({ children }: I18nextProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <BaseI18nextProvider i18n={i18n}>
      {children}
    </BaseI18nextProvider>
  );
};

export default I18nextProvider;