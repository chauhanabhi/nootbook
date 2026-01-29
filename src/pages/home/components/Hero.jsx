
export const Hero = () => {
  return (
 <section className="container mx-auto px-4 flex flex-col lg:flex-row items-center dark:text-slate-100">
  <div className="my-5">
    <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>

    <p className="text-2xl my-7 px-1 dark:text-slate-300">
      CodeBook is the world's most popular and authoritative source for computer
      science ebooks. Find ratings and access to the newest books digitally.
    </p>

    <a
      href="#"
      className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-5 py-2.5"
    >
      Explore eBooks
    </a>
  </div>

  <div className="my-5 lg:max-w-xl">
    <img
      className="rounded-lg w-full"
      src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1470&q=60"
      alt="CodeBook Hero Section"
    />
  </div>
</section>


  )
}
