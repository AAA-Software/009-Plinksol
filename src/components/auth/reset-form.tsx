"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { reset } from "@/actions/reset";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Wrapper className="z-10 flex justify-center items-center">
      <CardWrapper
        headerLabel="Forgot your password?"
        backButtonLabel="Back to"
        backButtonAction="Sign In"
        backButtonHref="/auth/signin"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 md:-mt-6 mb-4 md:mb-2"
          >
            <div className="space-y-4 mt-2 md:mt-0">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex pl-3 items-center bg-[#262A3A] border border-[#353950] rounded-lg">
                        <div className="relative w-6 h-6">
                          <Image fill src="/img/at.svg" alt="Email" />
                        </div>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="example@gmail.com"
                          type="email"
                          className="bg-[#262A3A] text-[18px] border-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="mt-4 bg-gradient-to-r from-[#6AD035] to-[#3BA901] hover:opacity-80 transition-all ease-in-out duration-200 w-full py-6 text-[18px] text-black"
            >
              {isPending ? (
                <BeatLoader color="#000" size={8} />
              ) : (
                "Send reset email"
              )}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </Wrapper>
  );
};
