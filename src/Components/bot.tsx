import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdClose, MdPerson, MdRefresh } from "react-icons/md";

interface iChat {
  id: string;
  message: string;
  user: string;
  createdAt: Date;
}

const bot = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [text, setText] = useState<string>("");
  const [data, setData] = useState<Array<iChat | []>>(
    JSON.parse(localStorage.getItem("chat")!) || []
  );

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const chat: iChat = {
      id: Math.random().toString(36).substr(2, 9),
      message: text,
      user: "user",
      createdAt: new Date(),
    };

    localStorage.setItem("chat", JSON.stringify([...data, chat]));

    const options = {
      method: "POST",
      url: "https://infinite-gpt.p.rapidapi.com/infinite-gpt",
      headers: {
        "x-rapidapi-key": "f257ea6fbemshb12750acdad6480p1a8404jsn78e55c48f762",
        "x-rapidapi-host": "infinite-gpt.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        query: text,
        sysMsg: text,
      },
    };

    setText("");
    try {
      const response = await axios.request(options);

      let botChat = {
        id: Math.random().toString(36).substr(2, 9),
        message: response?.data?.msg,
        user: "bot",
        createdAt: new Date(),
      };

      let result = JSON.parse(localStorage.getItem("chat")!);
      localStorage.setItem("chat", JSON.stringify([...result, botChat]));
      setData([...result, botChat]);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {}, [data]);

  return (
    <div className="absolute right-0 bottom-0 m-2 ">
      {toggle ? (
        <div className="rounded-full p-2 text-[35px] bg-stone-100 cursor-pointer">
          <div className=" mb-[2px] ml-[1px]">
            <FaRobot onClick={() => setToggle(!toggle)} />
          </div>
        </div>
      ) : (
        <div className=" sm:w-[450px] md:w-[450px] lg:w-[450px] bg-white  h-[500px] border rounded-md overflow-hidden flex flex-col">
          <div className="h-[60px] bg-neutral-950 w-full text-white flex justify-end items-center px-2 text-[30px] gap-4 ">
            <MdRefresh
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("chat");
                window.location.reload();
              }}
            />

            <MdClose
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className="h-[495px] overflow-auto p-2 rounded-md">
            <div className="text-[12px]">
              {JSON.parse(localStorage.getItem("chat")!)?.map(
                (props: iChat) => (
                  <div key={props?.id}>
                    {props.user === "user" ? (
                      <div className="flex flex-col my-2 p-2 bg-green-50 rounded-md ">
                        <div className="flex justify-end items-center mb-2">
                          <MdPerson className="text-[30px] mr-[5px]" />
                          <span>You</span>
                        </div>
                        <div>
                          <div>{props?.message}</div>
                        </div>{" "}
                      </div>
                    ) : (
                      <div className="rounded-md font-[300] italic flex flex-col mb-2 p-2 bg-red-50">
                        <div className="flex items-center mb-2">
                          <FaRobot className="text-[30px] mr-[5px]" />
                          <span>Chatbot</span>
                        </div>
                        <div>
                          <div>{props?.message}</div>
                        </div>{" "}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex-1" />

          <form
            onSubmit={handleSubmit}
            className="m-2 border rounded-md h-[45px] flex items-center"
          >
            {loading ? (
              <div className="pl-2 flex gap-2 items-center w-full">
                {" "}
                <AiOutlineLoading3Quarters className="animate-spin" />{" "}
                Loading... <div className="flex-1" />
              </div>
            ) : (
              <input
                placeholder="type your search"
                className="h-[96%] w-[90%] outline-none bg-transparent pl-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            )}
            <IoSendSharp className="text-[30px] text-slate-400 " />
            <button
              type="submit"
              className="hidden w-[150px] text-[12px] text-white bg-blue-500 rounded-md cursor-pointer"
              onClick={() => {}}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default bot;
