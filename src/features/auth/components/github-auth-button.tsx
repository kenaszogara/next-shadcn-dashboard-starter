'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useTranslations } from 'next-intl';

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const t = useTranslations('LoginPage.authForm');

  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={() =>
        signIn('github', { callbackUrl: callbackUrl ?? '/dashboard' })
      }
    >
      <Icons.gitHub className='mr-2 h-4 w-4' />
      {t('continueGithub')}
    </Button>
  );
}
