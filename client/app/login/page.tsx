import AuthForm from '@/components/AuthForm';
import Link from 'next/link';

const LoginPage = () => (
  <main className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
    <div className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-2xl rounded-3xl p-10 space-y-6">
      <h1 className="text-3xl font-bold text-center text-white">
        Sign in to your account
      </h1>
      <p className="text-sm text-center text-gray-400">
        Enter your email and password to continue
      </p>
      <AuthForm type="login" />
      <p className="text-center text-sm text-gray-500">
        Don’t have an account?{' '}
        <Link href="/register" className="text-blue-500 hover:underline font-medium">
          Sign up
        </Link>
      </p>
    </div>
  </main>
);

export default LoginPage;
