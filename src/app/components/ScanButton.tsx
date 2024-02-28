"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

const ScanButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
        <div>       
            <Link href="././scan">Scannez ici !</Link>
        </div>
    );
  }
  return (
    <div>
        
    </div>
  );
};

export default ScanButton;