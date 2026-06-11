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
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      toast.success("Message sent!", {
        description: "We'll get back to you within 1–2 business days.",
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
      className="border-border/70 bg-card flex flex-col gap-5 rounded-2xl border p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-name">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input id="c-name" placeholder="Your name" {...register("name")} />
          {errors.name ? (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="c-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-phone">Phone / WhatsApp</Label>
          <Input
            id="c-phone"
            type="tel"
            placeholder="+62 812 0000 0000"
            {...register("phone")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-company">Company</Label>
          <Input
            id="c-company"
            placeholder="Your company (optional)"
            {...register("company")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="c-message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="c-message"
          rows={5}
          placeholder="Tell us about your project or what you need help with..."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-destructive text-xs">{errors.message.message}</p>
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
            Send message
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
