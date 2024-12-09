import Image from "next/image";
import Popular from "@/components/popular"
import Recommend from "@/components/recommend";

export default function Home() {
  return (
    <div>
    <Popular />
    <Recommend />
    </div>
  );
}
