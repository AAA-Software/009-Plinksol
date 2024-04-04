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
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

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
    <Wrapper className="text-white font-sora flex justify-center lg:gap-24 xl:gap-60 mt-4 md:mt-20 z-10">
      {/* text */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-semibold mb-1 text-xl font-sora">
              PlinkSol Presale
            </h3>
            <p className="w-[450px] text-white/80 font-sora">
              Discover the future of online gaming with PlinkoSol – the platform
              that brings the excitement of Plinko to the blockchain.
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <CardWrapper
        headerLabel="Sign Up"
        backButtonLabel="Already have an account?"
        backButtonHref={signinUrl}
        backButtonAction="Sign In"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="md:-mt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormControl>
                    <div className="flex pl-3 items-center bg-[#262A3A] border border-[#353950] rounded-lg">
                      <div className="relative w-6 h-6">
                        <Image fill src="/img/name.svg" alt="Name" />
                      </div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Name"
                        type="text"
                        className="bg-transparent rounded-none text-[18px] border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                        className="bg-transparent rounded-none text-[18px] border-none"
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

            <div className="flex items-center space-x-2 py-2">
              <Checkbox checked id="terms" />
              <label
                htmlFor="terms"
                className="text-base font-sora font-light text-[#7A84A9] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept{" "}
                <Link href="/legals/terms-of-service">
                  <span className="underline underline-offset-4 text-[#64CB2E]">
                    Terms of use
                  </span>{" "}
                </Link>
                and{" "}
                <Link href="/legals/privacy-policy">
                  <span className="underline underline-offset-4 text-[#64CB2E]">
                    Privacy policy{" "}
                  </span>
                </Link>
              </label>
            </div>

            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              className="mt-4 bg-gradient-to-r from-[#6AD035] to-[#3BA901] hover:opacity-80 transition-all ease-in-out duration-200 w-full py-6 text-[18px] text-black"
            >
              {isPending ? <BeatLoader color="#000" size={8} /> : "Sign Up"}
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

export default RegisterForm;
