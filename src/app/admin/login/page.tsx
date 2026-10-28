"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAction, { error: "" });
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-mist px-4 sm:px-6">
      <form action={action} className="w-full max-w-md border border-charcoal/10 bg-paper p-6 text-charcoal shadow-card sm:p-8">
        <Logo variant="light" />
        <h1 className="font-display mt-8 text-4xl">Staff sign in</h1>
        <label className="mt-8 grid gap-2 text-[11px] uppercase tracking-[0.18em] text-earth">
          Email
          <input name="email" type="email" required className="h-12 border border-charcoal/10 bg-mist px-3 text-base text-charcoal" />
        </label>
        <label className="mt-4 grid gap-2 text-[11px] uppercase tracking-[0.18em] text-earth">
          Password
          <input name="password" type="password" required className="h-12 border border-charcoal/10 bg-mist px-3 text-base text-charcoal" />
        </label>
        {state.error ? <p className="mt-4 text-sm text-moss">{state.error}</p> : null}
        <Button type="submit" className="mt-8 w-full" disabled={pending}>
          {pending ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
