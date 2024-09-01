"use client";

import Image from "next/image";
import { useGetBooks } from "@/app/books/api/use-get-books";
export default function Home() {
  const { data, isLoading, isError } = useGetBooks();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
    </main>
  );
}
