import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-col lg:justify-center text-snow absolute inset-0 h-screen">
      <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-br from-rich-black from-40% to-onyx z-0" />
      <div className="image-container overflow-hidden fixed inset-0">
        <Image
          src="/circles02.png"
          width={700}
          height={700}
          alt="circles illustration"
          className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
        />
      </div>
      <section id="info" className="w-[90%] md:w-[85%] lg:w-[60%] lg:self-end self-center mt-40 mb-20 relative flex flex-col gap-4">
        <p className="pl-1 font-cutive md:text-lg lg:text-xl leading-4">
          HEY THERE!<br />MY NAME IS
        </p>
        <div className="flex flex-col items-start gap-3 flex-wrap">
          <Image src="/peter.png" width={500} height={500} alt="first name" className="w-auto h-6 md:h-8 lg:h-10" />
          <Image src="/beshara.png" width={500} height={500} alt="last name" className="w-auto h-6 md:h-8 lg:h-10" />
        </div>
        <p className="font-cutive font-bold text-lg md:text-xl lg:text-2xl leading-4 text-aqua/90">
          FULL-STACK WEB DEVELOPER
        </p>
        <p className="max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-rich-black/50 p-2 lg:mr-8 leading-6 font-saira text-lg md:text-xl lg:text-2xl">
          I can help you build a product, a feature, or a full website.<br />
          Look through some of my work and experience! If you like what you see and
          have a project you need coded, don’t hestiate to contact me.
        </p>
      </section>
    </main>
  )
}
