'use client';

import { Button } from '@/components/ui/button';
import { setUserLocale } from '@/services/locale';

export default function LanguageButton() {
  return (
    <div className='absolute top-10 right-10 flex gap-2'>
      <Button
        onClick={() => {
          setUserLocale('en');
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => {
          setUserLocale('de');
        }}
      >
        DE
      </Button>
    </div>
  );
}
