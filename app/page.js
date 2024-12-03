import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">The best URL shortner in the market</p>
          <p className="md:px-52 text-center">We are the most straight forward URL shortner in the world. Most of the 
            URL shortners will track you or ask you to give your details for login. We understand
            your needs and hence we have created this URL shortner          </p>
            <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 text-white shadow-lg font-semibold rounded-md px-2 py-1'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 text-white shadow-lg font-semibold rounded-md px-2 py-1'>GitHub</button></Link>
            </div>

        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}/>

        </div>

      </section>
    </main>
  );
}
