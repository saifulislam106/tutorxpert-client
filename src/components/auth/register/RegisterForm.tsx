'use client';


import { zodResolver } from '@hookform/resolvers/zod';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GiTeacher } from 'react-icons/gi';
import { PiStudentBold } from 'react-icons/pi';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, MoveLeft } from 'lucide-react';
import { registrationSchema } from '../authValidation/registerValidation';
import { registerUser } from '@/services/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
// import { Calendar } from '../ui/calendar';
import { DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';

const RegisterFrom = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [signUp, setSignUp] = useState(false);
  const [uploading, setUploading] = useState(false);
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;
  // image upload
  // const uploadImage = async (file: File) => {
  //   setUploading(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', 'my_preset'); // 🔹 Replace with your Cloudinary preset

  //     const response = await axios.post(
  //       'https://api.cloudinary.com/v1_1/demnpqwx3/image/upload',
  //       formData,
  //     );
  //     setUploading(false);
  //     return response.data.secure_url; // ✅ Get the uploaded image URL
  //   } catch (error) {
  //     console.error('Image upload failed', error);
  //     setUploading(false);
  //     return null;
  //   }
  // };
  //  Handle file input change
  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files?.[0]) {
  //     const imageUrl = await uploadImage(e.target.files[0]);
  //     if (imageUrl) {
  //       form.setValue('profilePicture', imageUrl);
  //     }
  //   }
  // };
  // password part
  const password = form.watch('password');
  const passwordConfirm = form.watch('passwordConfirm');

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.role === 'Tutor') {
      const formattedData = {
        ...data,
        availability: {
          from: new Date(data.availability.from), // Ensure from is a Date object
          to: data.availability.to ? new Date(data.availability.to) : undefined, // Convert to if present
        },
      };

      try {
        const res = await registerUser(formattedData);
        if (res?.success) {
          toast.success(res?.message);
          router.push('/login');
        } else {
          toast.error(res?.message);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
      }
    } else {
      try {
        const res = await registerUser(data);
        if (res?.success) {
          toast.success(res?.message);
          router.push('/');
        } else {
          toast.error(res?.message);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
      }
    }
  };

  return (
    <div className="md:w-[530px] w-[350px] shadow-[0px_0px_20px_theme(colors.blue.600)]  overflow-hidden rounded-lg border border-[#066ccb] p-4 bg-gray-200 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center  *:shadow-inner *:outline-none dark:border-[#066ccb]  *:dark:border-[#066ccb]">
        <button
          onClick={() => setSignUp(false)}
          className={`${
            !signUp
              ? 'bg-[#066ccb] text-white flex justify-center items-center gap-2'
              : 'bg-white text-[#066ccb] border-[#066ccb] flex justify-center items-center gap-2'
          }`}
        >
          {' '}
          <PiStudentBold size={'2rem'} />
          Register as Student
        </button>
        <button
          onClick={() => setSignUp(true)}
          className={`${
            signUp
              ? 'bg-[#066ccb] text-white flex justify-center items-center gap-2'
              : 'bg-white text-[#066ccb] border-[#066ccb] flex justify-center items-center gap-2'
          }`}
        >
          <GiTeacher size={'2rem'} />
          Register as Tutor
        </button>
      </div>
      <div className="w-full flex-col items-center overflow-hidden sm:p-4">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={`${
                signUp ? 'h-full duration-300' : 'invisible h-0 opacity-0'
              } space-y-3 sm:space-y-3`}
            >
              <div className=" flex flex-wrap justify-between ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="name"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="email"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-wrap justify-between">
                {/* <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Address</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="Address"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Phone</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="01XXXXXXXXX"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>

              <div className="flex flex-wrap justify-between">
                <FormField
                  control={form.control}
                  name="subjects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="Enter subjects separated by commas"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Grade Level</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="Enter grade levels"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className=" flex flex-wrap justify-between">
                {/* <div className="">
                  <Label className=" text-base ">User Image</Label>
                  <Input
                    className=" border-[#066ccb]"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div> */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" border-[#066ccb] w-full">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Tutor">Tutor</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" ">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none border-[#066ccb]"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* {uploading && <p className="text-blue-500">Uploading image...</p>} */}
              </div>
              <div className=" flex flex-wrap justify-between">
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Availability</FormLabel>
                      <FormControl className="">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start bg-gray-200 text-left font-normal border-[#066ccb]"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dateRange?.from ? (
                                dateRange.to ? (
                                  <>
                                    {format(dateRange.from, 'LLL dd, y')} -{' '}
                                    {format(dateRange.to, 'LLL dd, y')}
                                  </>
                                ) : (
                                  format(dateRange.from, 'LLL dd, y')
                                )
                              ) : (
                                <span>Pick a date range</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="range"
                              selected={dateRange}
                              onSelect={(range) => {
                                setDateRange(range);
                                field.onChange(range); // Update form value
                              }}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Hourly Rate (Price)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="p-5 border-[#066ccb]"
                          placeholder="Enter hourly rate"
                          required
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value) || 0)
                          } // 🔹 Convert to number
                          value={field.value ?? ''} // Ensures empty state is handled correctly
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-wrap justify-between ">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          className=" border-[#066ccb]"
                          type="password"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          className=" border-[#066ccb] "
                          type="password"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>

                      {passwordConfirm && password !== passwordConfirm ? (
                        <FormMessage> Password does not match </FormMessage>
                      ) : (
                        <FormMessage />
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className=" w-full bg-[#066ccb] hover:bg-blue-600/40 hover:text-[#066ccb] text-lg hover:border-[#066ccb]"
                disabled={uploading}
              >
                {isSubmitting ? 'Registering....' : 'Register'}
              </Button>
            </form>
          </Form>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={`${
                signUp ? ' invisible h-0 opacity-0' : 'h-full duration-300'
              } space-y-3 sm:space-y-3`}
            >
              <div className=" flex flex-wrap justify-between ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="name"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="email"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" flex flex-wrap justify-between  ">
                {/* <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Address</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="Address"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Phone</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="01XXXXXXXXX"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>

              {/* <div className="">
                <Label className=" text-base ">User Image</Label>
                <Input
                  className=" border-[#066ccb]"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div> */}
              <div className=" ">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" border-[#066ccb] w-full">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className=" flex flex-wrap justify-between ">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          className=" border-[#066ccb]"
                          type="password"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-base">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          className=" border-[#066ccb] "
                          type="password"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>

                      {passwordConfirm && password !== passwordConfirm ? (
                        <FormMessage> Password does not match </FormMessage>
                      ) : (
                        <FormMessage />
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className=" w-full bg-[#066ccb] hover:bg-blue-600/40 hover:text-[#066ccb] text-lg hover:border-[#066ccb]"
                disabled={uploading}
              >
                {isSubmitting ? 'Registering....' : 'Register'}
              </Button>
            </form>
          </Form>
          <p className=" text-base mt-6">
            Already have an account?{' '}
            <Link
              href="/login"
              className=" text-lg font-semibold text-[#066ccb] hover:underline "
            >
              Login
            </Link>
          </p>
        </div>

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

export default RegisterFrom;