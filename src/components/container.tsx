"use client";

import Link from "next/link";

interface ConProps {
  children: React.ReactNode;
  currentPage: "home" | "result";
}

export default function Container({ children, currentPage }: ConProps) {
  return (
    <div className="m-2 font-[family-name:var(--font-noto-sans)]">
      <nav className="flex justify-end mt-3 mb-8">
        {currentPage === "home" ? (
          <Link href="/result" className="text-lg font-semibold">
            통계 결과 ➡️
          </Link>
        ) : (
          <Link href="/" className="text-lg font-semibold">
            ⬅️ 통계 입력
          </Link>
        )}
      </nav>
      {children}
    </div>
  );
}
