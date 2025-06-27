import Link from 'next/link';
import { AuthButton } from './auth/auth-button';

export default function HeaderPA() {
  //updated header design

  return (
    <header className="bg-primary p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <div className="space-x-4">
        <Link href="/conference" className="text-xl font-bold">
          PA Conference
        </Link>
        <Link href="/conference" className="hover:underline">
          Home
        </Link>
        <Link href="/conference/schedule" className="hover:underline">
          Schedule
        </Link>
        <Link href="/conference/speakers" className="hover:underline">
          Speakers
        </Link>
        <Link href="/conference/register" className="hover:underline">
          Register
        </Link>
        </div>
        <div className="space-x-4">

          <AuthButton />
        </div>
      </nav>
    </header>
  );
}
