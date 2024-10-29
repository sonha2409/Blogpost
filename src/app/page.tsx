"use client";

import React from 'react';
import Link from 'next/link';

const Component: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Diary</h1>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Link href="/diary/2023-04-15">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium cursor-pointer">
                April 15, 2023
              </div>
            </Link>
          </div>
          <div className="grid gap-4">
            <Link href="/diary/2023-04-10">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium cursor-pointer">
                April 10, 2023
              </div>
            </Link>
          </div>
          <div className="grid gap-4">
            <Link href="/diary/2023-04-05">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium cursor-pointer">
                April 5, 2023
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
