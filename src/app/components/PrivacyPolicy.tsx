import React from "react";
import RichText from "./RichText";

interface PrivacyPolicyProps {
  data: {
    id: string;
    text: string;
  };
}

export default function PrivacyPolicy({ data }: PrivacyPolicyProps) {
  return (
    <section className="container px-4 mx-auto">
      {data.text && (
        <RichText
          data={{
            body: data.text,
            style: "font-medium font-montserrat text-lg text-black",
          }}
        />
      )}
    </section>
  );
}
