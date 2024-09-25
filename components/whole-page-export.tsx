import { ReactNode, useState } from "react";
import { Background } from "./background-video";
import { Header } from "./header";

export function Page({ showVideo, showBgPictures, children }: { showVideo: boolean, showBgPictures: boolean, children: ReactNode }) {
    const [isMute, setIsMute] = useState(true);
    return (
        <>
            {children}
            <div className="flex w-full relative">
                <div className="absolute top-0 left-0 w-full flex flex-col">
                    <Background isMute={isMute} visible={showVideo ? showBgPictures ? "p" : "v" : "c"} />
                    <Header setIsMute={setIsMute} isMute={isMute} haveVolumeControl={showVideo} />
                </div>
            </div>
        </>
    );
}