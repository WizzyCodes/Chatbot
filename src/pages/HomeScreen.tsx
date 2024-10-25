import Card from "../Components/Card";
import pik from "../assets/pics/video-templates-cover_746w-4ff3b42651346d370b0a.jpg";
import pik1 from "../assets/pics/stock-video-cover_746w-023d1386c8391e873f8b.jpg";
import pix from "../assets/pics/photos-cover_746w-0c536314f530377c5e97.jpg";
import pix2 from "../assets/pics/music-cover_746w-0c7810a5ab3340e690a2.jpg";
import pix3 from "../assets/pics/sound-effects-cover_746w-076511fdc5047350c754.jpg";
import pix4 from "../assets/pics/graphic-templates-cover_746w-2e4f40de3eaa64ec27e3.jpg";
import pix5 from "../assets/pics/time1.jpg";
import pix6 from "../assets/pics/graphics-cover_746w-c671e2ee65dc461c849f.jpg";
import pix7 from "../assets/pics/threed-cover_746w-f01145e7619e4383172a.jpg";
import pix8 from "../assets/pics/green.webp";
import pix9 from "../assets/pics/color1.jpg";
import pix10 from "../assets/pics/all-categories-cover_692w-9022a578b31cba08bce8.jpg";
import mic from "../assets/pics/Mic.webp";
import mic2 from "../assets/pics/adobe.jpg";
import mic3 from "../assets/pics/goog.png";
import mic4 from "../assets/pics/net.webp";
import mic5 from "../assets/pics/nike.png";
import mic6 from "../assets/pics/chanel.webp";
import mic7 from "../assets/pics/adidas.webp";
import mic8 from "../assets/pics/puma.jpg";
import com from "../assets/pics/banner.compressed-c1ef8a6a1d9615fd7a88.avif";
import Bot from "../Components/bot";
import as from "../assets/in[put.png";
import CircleFollower from "../Components/CircleFollower";

const HomeScreen = () => {
  const box = [mic, mic2, mic3, mic4, mic5, mic6, mic7, mic8];

  return (
    <div className="pt-[130px] relative min-h-[calc(100vh-15vh)]">
      <div className="">
        <CircleFollower />

        <div className="w-full h-[45vh] flex justify-center items-center">
          <div className="w-[95vw] h-[50vh] flex justify-between">
            <div
              className="w-[60vw] h-[45vh] bg-black rounded-xl flex items-center justify-center mr-10"
              style={{
                backgroundImage: `url(${com})`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-[100vw] h-[43vh] flex items-center justify-center font-[Poppins]]">
                <div className="font-extrabold flex justify-center flex-col">
                  <div className="text-6xl text-white">
                    <span className="text-lime-300">Unlimited assets</span> for
                    the
                    <br /> creatively obsessed
                  </div>
                  <div className="mt-3 text-white text-xl">
                    Access the broadest range of asset categories in one place
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25vw] h-[45vh]  rounded-xl border shadow flex justify-center mr-7 bg-white shadow-slate-400">
              <div className=" w-[90vw] h-[48vh] flex flex-col p-7  ">
                <div
                  style={{
                    backgroundImage: `url(${as})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "100%",
                    height: "100%",
                    // scale: "1.1",
                  }}
                ></div>{" "}
                {/* <img src={as} alt="" className="w-[70vw] scale-105" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1030px] flex justify-center items-start mt-16">
          <div className="w-[95vw] h-[95vh] grid grid-cols-4 gap-8">
            <Card header={"Stock Video"} content={"6.8M+"} image={pik1} />
            <Card header={"Video Templates"} content={"120,000+"} image={pik} />
            <Card header={"Stock Photos"} content={"11.2M+"} image={pix} />
            <Card
              header={"Royalty-Free Music"}
              content={"210,000+"}
              image={pix2}
            />
            <Card header={"Sound Effects"} content={"770,000"} image={pix3} />
            <Card
              header={"Graphic Templates"}
              content={"330,000+"}
              image={pix4}
            />
            <Card header={"Fonts"} content={"56,000+"} image={pix5} />
            <Card header={"Graphics"} content={"210,000+"} image={pix6} />
            <Card header={"3D"} content={"280,000+"} image={pix7} />
            <Card header={"Add-ons"} content={"28,000+"} image={pix8} />
            <Card
              header={"Presentation Templates"}
              content={"150,000+"}
              image={pix9}
            />
            <Card header={"All categories"} content={"20.3M+"} image={pix10} />
          </div>
        </div>
        <div className="w-full h-[60vh] flex justify-center items-start mt-[100px]">
          <div className="w-[95%] h-[57vh] flex flex-col justify-center text-center">
            <div className="font-medium text-3xl">Trusted by top brands</div>
            <div>
              <div className="flex w-full h-12 gap-12 justify-center mt-8">
                {box.map((el: any) => (
                  <img src={el} alt="ee" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" right-2 bottom-0 fixed">
          <Bot />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
