"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button
        type="button"
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 bg-white"
        disabled
      >
        Loading...
      </button>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt={session.user.name ?? "User avatar"}
            className="w-8 h-8 rounded-full border border-gray-200"
          />
        ) : null}
        <div className="hidden md:flex flex-col text-left leading-tight">
          <span className="text-xs text-gray-500">Signed in</span>
          <span className="text-sm font-medium text-gray-800 max-w-[160px] truncate">
            {session.user.name ?? session.user.email}
          </span>
        </div>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google")}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      Sign in with Google
    </button>
  );
}
