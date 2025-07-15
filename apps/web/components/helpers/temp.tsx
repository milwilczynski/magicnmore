"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function Temp() {
  const { data, status, update } = useSession();
  return <div>{JSON.stringify({ data, status, update })}</div>;
}
