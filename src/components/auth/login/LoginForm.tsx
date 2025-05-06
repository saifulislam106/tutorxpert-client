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
  // form with react-hook-form and zod
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  // hooks
  const { setIsLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  //   submit handler
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push(redirect ?? "/");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center px-4 py-5">
      <div className="md:w-[450px] w-[350px] shadow-[0px_0px_20px_theme(colors.blue.600)]  overflow-hidden rounded-lg border border-[#066ccb] py-6 px-8 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-3xl font-extrabold text-white text-center py-5 border-b">
          Login Now
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className=" pt-6 space-y-7"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-lg text-gray-200">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 border-[#066ccb]"
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
                  <FormLabel className=" text-lg text-gray-200">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 border-[#066ccb]"
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
            <div className=" flex justify-center">
              <Button
                className="bg-indigo-500 w-full hover:bg-[#066ccb]/40 hover:text-[#066ccb] text-lg hover:border-[#066ccb] "
                type="submit"
              >
                {isSubmitting ? "Logging...." : "Login"}
              </Button>
            </div>
          </form>
        </Form>
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-4 text-gray-300 text-sm font-medium tracking-wide">
            QUICK DEMO ACCESS
          </span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        {/* Demo login buttons */}
        {/* <div className="mt-4 space-x-4 flex flex-col gap-4 ">
          <Button
            variant="outline"
            className="bg-[#066ccb] w-full text-gray-100 hover:bg-gray-100 py-5 hover:text-[#066ccb] border-[#066ccb] flex items-center gap-2 "
            onClick={() => demoLogin("tutor")}
          >
            {" "}
            <GiTeacher size={"2rem"} />
            Demo Login as Tutor
          </Button>
          <Button
            variant="outline"
            className="bg-[#066ccb] text-gray-100 hover:bg-gray-100  py-5  hover:text-[#066ccb] border-[#066ccb] flex items-center gap-2 "
            onClick={() => demoLogin("student")}
          >
            <PiStudentBold size={"2rem"} /> Demo Login as Student
          </Button>
        </div> */}
        <p className=" text-sm pt-4 text-gray-300">
          Don`t have account?{" "}
          <Link
            href="/register"
            className=" text-base font-semibold text-[#066ccb] hover:underline "
          >
            Register
          </Link>
        </p>
        <p className=" flex items-center justify-center mt-6">
          <Link
            href="/"
            className="flex gap-3 items-center text-base font-semibold text-gray-400 hover:text-[#066ccb] "
          >
            <MoveLeft /> Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
