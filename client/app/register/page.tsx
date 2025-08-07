import AuthForm from '@/components/AuthForm';

const RegisterPage = () => (
  <main className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
    <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6">
      <h1 className="text-3xl font-extrabold text-center text-white">
        Create your account
      </h1>
      <p className="text-sm text-center text-gray-400">
        Enter your email and password to get started
      </p>
      <AuthForm type="register" />
    </div>
  </main>
);

export default RegisterPage;
