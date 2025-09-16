'use client'
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/navigation";

export default function DefaultPage() {
    const {push}=useRouter()
  return (
    <div className="space-y-24">
       <Loader onFinish={() =>push('/home')} />


    </div>
  );
}
