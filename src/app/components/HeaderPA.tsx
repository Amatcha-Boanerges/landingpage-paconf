import Link from 'next/link';

export default function HeaderPA() {
  return (
    <header className="bg-primary p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/conference" className="text-xl font-bold">
          PA Conference
        </Link>
        <div className="space-x-4">
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
      </nav>
    </header>
  );
}
