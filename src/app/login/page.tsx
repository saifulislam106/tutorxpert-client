import LoginForm from "@/components/auth/login/LoginForm";
import { Suspense } from "react";


const LoginPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900'>
     <Suspense fallback={<>loading ....</>}>
     <LoginForm></LoginForm>
     </Suspense>
    </div>
  );
};

export default LoginPage;