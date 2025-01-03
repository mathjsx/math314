'use client';

import { callMenuSuggestionFlow } from '@/app/genkit';
import { useState } from 'react';

export default function Home() {
  const [menuItem, setMenuItem] = useState<string>('');

  async function getMenuItem(formData: FormData) {
    const theme = formData.get('theme')?.toString() ?? '';
    const suggestion = await callMenuSuggestionFlow(theme);
    setMenuItem(suggestion);
  }

  return (
    <main>
      <form action={getMenuItem}>
        <label htmlFor="theme">
          Saya siswa smk kelas x ingin tahu tentang matematika dengan tema:{' '}
        </label>
        <input type="text" name="theme" id="theme" />
        <br />
        <br />
        <button type="submit">Generate</button>
      </form>
      <br />
      <pre>{menuItem}</pre>
    </main>
  );
}
