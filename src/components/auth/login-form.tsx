"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { Button } from "@/components/ui/button";
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
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { login } from "../../actions/login";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
interface LoginFormProps {
  signinLabel: string;
  signinUrl: string;
  registerUrl: string;
}

const LoginForm = ({ signinLabel, registerUrl, signinUrl }: LoginFormProps) => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };
  return (
    <Wrapper className="text-white font-sora flex justify-center gap-60 mt-20 z-10">
      {/* text */}
      {!showTwoFactor && (
        <>
          <div className="flex flex-col gap-20">
            <div>
              <h3 className="font-semibold mb-1 text-xl font-sora">
                PlinkSol Presale
              </h3>
              <p className="w-[450px] text-white/80 font-sora">
                Discover the future of online gaming with PlinkoSol – the
                platform that brings the excitement of Plinko to the blockchain.
              </p>
            </div>
          </div>
        </>
      )}
      {/* form */}
      <CardWrapper
        headerLabel="Sign In"
        backButtonAction="Sign Up"
        backButtonLabel="Don't have an account?"
        backButtonHref={registerUrl}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="-mt-2">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                        className="bg-[#222222] text-[18px] border-[#222222]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormControl>
                        <div className="flex pl-3 items-center bg-[#262A3A] border border-[#353950] rounded-lg">
                          <div className="relative w-6 h-6">
                            <Image fill src="/img/at.svg" alt="Email" />
                          </div>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Email address"
                            type="email"
                            className="bg-[#262A3A] text-[18px] border-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormControl>
                        <div className="flex pl-3 items-center bg-[#262A3A] border border-[#353950] rounded-lg">
                          <div className="relative w-6 h-6">
                            <Image fill src="/img/lock.svg" alt="Password" />
                          </div>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Password"
                            type="password"
                            className="bg-[#262A3A] text-[18px] border-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row-reverse justify-between w-full items-center">
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-normal md:font-normal text-white"
                  >
                    <Link href="/auth/reset">Forgot password?</Link>
                  </Button>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-base font-sora font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </>
            )}
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <div className="my-6" />
            <Button
              disabled={isPending}
              className="bg-gradient-to-r from-[#6AD035] to-[#3BA901] hover:opacity-80 transition-all ease-in-out duration-200 w-full py-6 text-[18px] text-black"
            >
              {showTwoFactor ? "Confirm" : "Sign in to account"}
            </Button>
          </form>
        </Form>

        <div className="w-full flex items-center justify-between mt-6">
          <Separator className="w-[180px]" />
          <div className=" text-[#7A84A9] font-light px-4 py-1 rounded-full bg-[#262A3A] text-base font-sora">
            OR
          </div>
          <Separator className="w-[180px]" />
        </div>

        <Button className="bg-[#262A3A] text-white font-sora font-light md:font-light w-full hover:bg-[#353950] mt-6 mb-2 py-6">
          <div className="relative w-6 h-6 mr-8">
            <Image
              fill
              src="/img/phantom-wallet-logo.svg"
              alt="Phantom Wallet"
            />
          </div>
          Continue with Phantom Wallet
        </Button>
      </CardWrapper>
    </Wrapper>
  );
};

export default LoginForm;
