"use client";
import { DefaultButton } from "./components/buttons/defaultButton";

export default function Home() {
  return (
    <DefaultButton contentButton="xxx" onClick={() => console.log("jo")} />
  );
}
