import env from "../assets/pics/enva-removebg-preview.png";
import as1 from "../assets/inpiru.png";
const Header = () => {
  return (
    <div>
      <div className="bg-[#191919] w-full h-[15vh] text-white flex justify-center items-center fixed z-40 backdrop-blur-3xl">
        <div className="w-[95%] h-[10vh] flex justify-between items-center">
          <div className="flex gap-4">
            <div className="w-[15vw] h-[15vh] flex items-center">
              <img src={env} alt="djw" className="w-[12vw] h-[12vh]" />
            </div>
            <div className="flex items-center w-[55vw]">
              <img
                src={as1}
                alt=""
                className="cursor-pointer scale-105 hover:cursor-text"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-3 rounded-md bg-lime-400 text-black font-semibold hover:scale-105 duration-1000">
              Get unlimited downloads
            </button>
            <div className="font-normal text-slate-400 text-[16px]">
              Sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
