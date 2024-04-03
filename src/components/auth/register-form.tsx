"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper/wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { Button } from "@/components/ui/button";
import { register } from "../../actions/register";
import { RegisterSchema } from "../../schemas";

interface RegisterFormProps {
  registerLabel: string;
  registerUrl: string;
  signinUrl: string;
}

const RegisterForm = ({
  registerLabel,
  registerUrl,
  signinUrl,
}: RegisterFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      company: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log("submit");
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <Wrapper className="text-white flex justify-center gap-40 mt-20 z-10">
      {/* text */}
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="font-semibold mb-1.5 text-xl">
            Hire a hire1.ai Expert
          </h3>
          <p className="w-[380px] text-white/80">
            Hire a pre-vetted, top 1% MarTech expert within 24 hours.
            Compliance, benefits, and payroll on us.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5 text-xl">Onboard Talent</h3>
          <p className="w-[380px] text-white/80">
            Any talent you&apos;ve sourced yourself, use Hire1.ai to handle
            compliance, payroll, benefits at a fee.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5 text-xl">Vet Talent</h3>
          <p className="w-[380px] text-white/80">
            Use Artificial Intelligence, the best technical vetting tool, to
            pre-screen your candidates.
          </p>
        </div>
      </div>
      {/* form */}
      <CardWrapper
        headerLabel="Register"
        backButtonLabel="Already have an account?"
        backButtonHref={signinUrl}
        backButtonAction="Sign In"
        showSocial
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 -mt-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Fullname</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Firstname and lastname"
                      type="text"
                      className="bg-[#04192B] text-[18px] border-[#072844]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Company Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your company's name"
                      type="text"
                      className="bg-[#04192B] text-[18px] border-[#072844]"
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
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="name@gmail.com"
                      type="email"
                      className="bg-[#04192B] text-[18px] border-[#072844]"
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
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter password"
                      type="password"
                      className="bg-[#04192B] text-[18px] border-[#072844]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Checkbox id="terms" />
                      <FormLabel className="ml-3" htmlFor="terms">
                        I accept terms & conditions
                      </FormLabel>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              className="bg-[#1BC5E1] hover:bg-[#1BC5E1]/80 w-full py-6 text-[18px] text-black"
            >
              Register
            </Button>
            {/* <p className="text-center">
              {registerLabel}{" "}
              <Link href={registerUrl} className="text-[#1BC5E1]">
                Register here
              </Link>
            </p> */}
          </form>
        </Form>
      </CardWrapper>
    </Wrapper>
  );
};

export default RegisterForm;
