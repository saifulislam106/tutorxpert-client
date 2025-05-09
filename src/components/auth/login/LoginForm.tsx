"use client";

import { loginUser } from "@/services/auth";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { loginSchema } from "../authValidation/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setIsLoading ,setUser } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        setUser(res?.data);
        router.push(redirect ?? "/");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-5">
      <div className="md:w-[450px] w-[350px]  rounded-lg border border-purple-600 py-6 px-8 bg-white dark:border-zinc-700" >
        <h2 className="text-3xl font-extrabold text-purple-700  text-center py-5 border-b border-purple-500">
          Login Now
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="pt-6 space-y-7"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold ">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 border border-purple-400 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="email"
                      required
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold ">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 border border-purple-400 focus:ring-purple-500 focus:border-purple-500"
                      type="password"
                      placeholder="password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                className="bg-purple-600 w-full hover:bg-purple-700 text-white text-lg hover:shadow-lg"
                type="submit"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </Form>
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-4 text-gray-500 text-sm font-medium tracking-wide">
            QUICK DEMO ACCESS
          </span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        {/* Demo login buttons (optional) */}
        {/* <div className="mt-4 space-x-4 flex flex-col gap-4">
          <Button
            variant="outline"
            className="bg-purple-600 w-full text-white hover:bg-white hover:text-purple-600 border-purple-600"
            onClick={() => demoLogin("tutor")}
          >
            Demo Login as Tutor
          </Button>
          <Button
            variant="outline"
            className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 border-purple-600"
            onClick={() => demoLogin("student")}
          >
            Demo Login as Student
          </Button>
        </div> */}
        <p className="text-sm pt-4 text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-base font-semibold text-purple-600 hover:underline"
          >
            Register
          </Link>
        </p>
        <p className="flex items-center justify-center mt-6">
          <Link
            href="/"
            className="flex gap-3 items-center text-base font-semibold text-gray-500 hover:text-purple-600"
          >
            <MoveLeft /> Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
