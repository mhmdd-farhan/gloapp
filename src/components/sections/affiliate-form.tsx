"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(6, "Phone number is required"),
  network: z.string().min(10, "Tell us a bit about your network"),
});

type FormValues = z.infer<typeof schema>;

export function AffiliateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch("/api/affiliate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      toast.success("Application received!", {
        description: "We'll be in touch within 1–2 business days.",
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email us directly.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-lg space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="aff-name">Full name</Label>
          <Input
            id="aff-name"
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="aff-email">Email</Label>
          <Input
            id="aff-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="aff-phone">Phone / WhatsApp</Label>
        <Input
          id="aff-phone"
          type="tel"
          placeholder="+62 812 0000 0000"
          {...register("phone")}
        />
        {errors.phone ? (
          <p className="text-destructive text-xs">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="aff-network">About your network</Label>
        <Textarea
          id="aff-network"
          rows={3}
          placeholder="Tell us about who you know and how you'd refer clients..."
          {...register("network")}
        />
        {errors.network ? (
          <p className="text-destructive text-xs">
            {errors.network.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full text-sm"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Submit application
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
