import { ReactNode, useState } from "react";
import { Background } from "./background-video";
import { Header } from "./header";

export function Page({ showVideo, showBgPictures, children, hoverVisible }: { showVideo: boolean, showBgPictures: boolean, children: ReactNode, hoverVisible: boolean }) {
    const [isMute, setIsMute] = useState(true);
    return (
        <>
            {children}
            <div className="flex w-[100vw] h-full relative">
                <div className=" top-0 left-0 w-[100vw] h-full flex flex-col">
                    <Background isMute={isMute} visible={showVideo ? showBgPictures ? "p" : "v" : "c"} />
                    <Header setIsMute={setIsMute} isMute={isMute} haveVolumeControl={showVideo} hoverVisible={hoverVisible} />
                </div>
            </div>
        </>
    );
}