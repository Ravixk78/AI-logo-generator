import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4'>
       <Image src={'/logo.svg'} alt='Logo' width={180} height={100} />
       <Button>Get Started</Button>
    </div>
  );
}
