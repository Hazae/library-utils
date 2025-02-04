import Counter from "@/components/counter";
import React from "react";

interface ArchiveProps {
  place: string;
}

function Archive(props: ArchiveProps) {
  return (
    <div>
      <h2 className="text-xl font-bold my-7 text-center">{props.place}</h2>
      <Counter />
    </div>
  );
}

export default Archive;
