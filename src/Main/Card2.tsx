
export const Card2 = () => {
  return (
    <section className="m-auto flex flex-row gap-8 justify-center flex-wrap mt-20">
        <div className="w-[536px] h-[585px] md:w-[379px] md:h-[525px]  rounded-b-2xl flex flex-col gap-4">
            <img src="https://prium.github.io/elixir/v3.0.0/assets/img/9.jpg" className="w-[100%] rounded-t-2xl" alt="" />
            <div className="flex flex-col gap-2 px-12">
                <p className="text-[21px] text-siniy font-extrabold hover:underline cursor-pointer">Tax impacts of lease mean accounting change</p>
                <h5 className="text-[16px] text-gray-500">By Paul O'Sullivan</h5>
                <p className="text-[16px] text-gray-500 mt-4">HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...</p>
                <span className="text-[16px] font-opens hover:underline cursor-pointer">Learn More</span>
            </div>
        </div>
        <div className="w-[536px] h-[585px] md:w-[379px] md:h-[525px]  rounded-b-2xl flex flex-col gap-4">
            <img src="https://prium.github.io/elixir/v3.0.0/assets/img/10.jpg" className="w-[100%] rounded-t-2xl" alt="" />
            <div className="flex flex-col gap-2 px-12">
                <p className="text-[21px] text-siniy font-extrabold hover:underline cursor-pointer">What brexit means for data protection law</p>
                <h5 className="text-[16px] text-gray-500">By Enrico Ambrosi</h5>
                <p className="text-[16px] text-gray-500 mt-4">Assuming that the referendum is not ignored completely, there are two possible futures for the UK...</p>
                <span className="text-[16px] font-opens hover:underline cursor-pointer">Learn More</span>
            </div>
        </div>
        <div className="w-[536px] h-[585px] md:w-[379px] md:h-[525px]  rounded-b-2xl flex flex-col gap-4">
            <img src="https://prium.github.io/elixir/v3.0.0/assets/img/11.jpg" className="w-[100%] rounded-t-2xl" alt="" />
            <div className="flex flex-col gap-2 px-12">
                <p className="text-[21px] text-siniy font-extrabold hover:underline cursor-pointer">The growing meanace of social engineering fraud</p>
                <h5 className="text-[16px] text-gray-500">By Robson</h5>
                <p className="text-[16px] text-gray-500 mt-4">Social engineering involves the collection of information from various sources about a target...</p>
                <span className="text-[16px] font-opens hover:underline cursor-pointer">Learn More</span>
            </div>
        </div>
    </section>
  )
}
