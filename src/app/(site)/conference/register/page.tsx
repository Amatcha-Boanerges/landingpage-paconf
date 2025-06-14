'use client'; // Enables client-side rendering in Next.js (required for interactivity)
import RSVPForm from '../../../components/forms/RSVPForm';

export default function RegisterPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Register for the Conference</h1>
      <RSVPForm />
    </div>
  );
} 