import HomeHeader from "./HomeHeader";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput"
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-12">
          <img src={Logo} className="w-[172px] md:w-[272px] mb-8" />
          <SearchInput/>
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#F8F9FA] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">Google Search</button>
            <button className="h-9 px-4 bg-[#F8F9FA] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                I&apos;m Feeling Lucky
            </button>
          </div>
          <div className="flex gap-2 text-[#3c4043] mt-8">
             <h4 className="text-[13px] font-extralight">Google offered in: <span>
             <a href="#" className="text-blue-700 px-1">اردو</a>
             <a href="#" className="text-blue-700 px-1">پښتو</a>
             <a href="#" className="text-blue-700 px-1">سنڌي</a>
             </span></h4>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
