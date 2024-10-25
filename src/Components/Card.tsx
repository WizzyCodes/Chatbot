const Card = ({ header, content, image }: any) => {
  return (
    <div className="flex flex-col gap-6 mb-5 overflow-visible relative z-0 hover:scale-105 duration-700 cursor-pointer">
      <div className="border border-black rounded-xl p-4">
        <div className="font-semibold text-2xl mb-1 ml-1">{header}</div>
        <div className="text-slate-500 mb-1 ml-1 font-medium">{content}</div>
        <div>
          {image && <img src={image} alt="ds" className="rounded-2xl " />}
        </div>
      </div>
    </div>
  );
};

export default Card;
