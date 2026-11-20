import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image src="/globe.svg" alt="An Image of a web" width={50} height={50} className='' />
        <p className={`${lusitana.className} text-5xl`}>Acme</p>

      </div>
      <div className='flex flex-col justify-center h-70 text-xl'>
        <div className='mx-10 p-2 '><b>Welcome to Acme</b> This is an example<br></br> for the <a href="https://nextjs.org/learn/" className="text-blue-500">Next.js Learn Course</a>, brought to<br></br> you by vercel</div>
        <button className='flex mx-10 px-3 py-2 bg-blue-600 w-fit rounded-xl'>Login Page-{'>'}</button>
      </div> 
    </main>
  )
}
