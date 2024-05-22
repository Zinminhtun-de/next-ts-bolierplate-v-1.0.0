'use client';

import Layout from '@/components/layout';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Layout title="Notice !!">
          <button onClick={() => reset()}>Try again</button>
        </Layout>
      </body>
    </html>
  );
}
