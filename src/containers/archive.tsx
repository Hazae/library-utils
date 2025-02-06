"use client";

import Counter from "@/components/counter";
import React from "react";

interface ArchiveProps {
  place: string;
  onReset?: boolean;
  onSave?: boolean;
}

function Archive({ place, onReset, onSave }: ArchiveProps) {
  return (
    <div className="rounded-lg p-6">
      <h2 className="text-xl font-bold my-7 text-center">{place}</h2>
      <Counter place={place} onReset={onReset} onSave={onSave} />
    </div>
  );
}

export default Archive;
