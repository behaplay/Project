export const Hero = () => {
  return (
    <section className="m-auto max-w-[1520px] py-24 px-[50px] sm:px-[100px] bg-cover lg:px-[200px] w-[100%] h-[800px]  bg-[url('https://prium.github.io/elixir/v3.0.0/assets/img/header-6.jpg')]">
       <div className="flex flex-col pt-48 w-[100%] lg:w-[560px]">
        <h1 className="text-[50px] sm:text-[67px] text-siniy font-bold w-[100%] text-center sm:text-start">Helping Leaders</h1>
        <p className="font-opens text-[20px] sm:text-[28px] text-siniy w-[100%] mt-4 text-center sm:text-start">We look forward to help you in taking your company to new height.</p>
        <div className="flex sm:flex-row flex-col justify-center sm:justify-start items-center gap-1">
            <button className="px-8 py-3 bg-siniy rounded-md text-white text-[14px] font-moon mr-2 mt-6 w-[150px] h-[45px]">Read more</button>
            <button className="px-8 py-3 bg-orange-400 rounded-md text-[14px] font-moon mt-1 sm:mt-6 w-[150px] h-[45px]">Contact us</button>
        </div>
       </div>
    </section>
  )
}
