import { AuthForm } from '../../components/AuthForm';

const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Sign In / Sign Up</h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
