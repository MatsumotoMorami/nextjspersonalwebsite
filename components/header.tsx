import Link from "next/link";
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

function NavigatorText({ text, path, hoverVisible }: { text: string, path: string, hoverVisible: boolean }) {
    return (
        <a href={path}>
            <header className="flex flex-row text-gray-800 items-center lg:p-2 p-0 w-full">
                <div className="font-bold cursor-pointer lg:text-[1rem] md:text-sm text-[0.6rem] headerTextAnimation fontGlobal">{text}</div>
            </header>
        </a>
    );
}

function NavigatorIcon({ svg, onClick }: { svg: ReactNode, onClick: MouseEventHandler<HTMLDivElement> }) {
    return (
        <div className="cursor-pointer hover:text-white duration-200 pr-2" onClick={onClick}>
            {svg}
        </div>
    );
}

export function Header({ setIsMute, isMute, haveVolumeControl, hoverVisible }: { setIsMute: Dispatch<SetStateAction<boolean>>, isMute: boolean, haveVolumeControl: boolean, hoverVisible: boolean }) {
    return (
        <div className="">
            <header className={hoverVisible
                ? "fixed cardbackground top-3 flex flex-row md:h-16 h-12 duration-300 text-gray-800 items-center md:p-4 p-3 w-[96%] mx-[2%] rounded-3xl Header-extra opacity-0 hover:opacity-50 headerE"
                : "fixed cardbackground top-3 flex flex-row md:h-16 h-12 duration-300 text-gray-800 items-center md:p-4 p-3 w-[96%] mx-[2%] rounded-3xl Header-extra opacity-50"}>
                <div className="flex items-center md:p-3 sm:p-2 p-1">
                    <div className="fontGlobal font-bold lg:p-3 sm:p-1.5 p-0 lg:text-2xl md:text-lg sm:text-sm text-[0rem] text-gray-800 duration-100">Morami</div>
                </div>
                <div className="ml-auto flex space-x-4 place-items-center">
                    <NavigatorText text="首页" path='/' hoverVisible={hoverVisible} />
                    <NavigatorText text="简介" path='/intro' hoverVisible={hoverVisible} />
                    <NavigatorText text="博客" path='/blog' hoverVisible={hoverVisible} />
                    <NavigatorText text="日志" path='/logs' hoverVisible={hoverVisible} />
                    <NavigatorText text="赞助" path='/donate' hoverVisible={hoverVisible} />
                    <NavigatorText text="关于" path='/about' hoverVisible={hoverVisible} />
                    <NavigatorIcon onClick={linkOnClick} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-5 size-3">
                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                    </svg>} />
                    {<NavigatorIcon onClick={serverOnClick} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:size-5 size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    </svg>} />}
                    {haveVolumeControl ? <NavigatorIcon onClick={() => muteOnClick(setIsMute)} svg={isMute ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-5 size-3">
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-5 size-3">
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                    </svg>
                    } /> : undefined}
                </div>
            </header>
        </div>
    );
}

function linkOnClick() {

}

function muteOnClick(setIsMute: Dispatch<SetStateAction<boolean>>) {
    setIsMute((prevIsMute: boolean) => {
        const newMuteState = !prevIsMute;
        return newMuteState;
    });
}

function serverOnClick() {

}