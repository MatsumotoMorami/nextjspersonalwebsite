export function Background({ isMute, visible }: { isMute: boolean, visible: string }) {
    // function getRandomInt(min: number, max: number): number {
    //     const minCeiled = Math.ceil(min);
    //     const maxFloored = Math.floor(max);
    //     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    // }
    return (
        <div className="absolute top-0 w-[100vw] h-full ">
            {visible == "v" ? <video
                className="relative top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                playsInline
                muted={isMute}
                style={{ zIndex: -100 }}
            >
                <source src="/bg-videos/pepe_1.mp4" type="video/mp4" />
                您的浏览器不支持视频标签。
            </video> : undefined}
            {visible == "v" ? <div className="-z-10 fixed top-0 left-0 w-[100vw] h-full bg-black opacity-50" /> : undefined}
            {visible == "v" ? <div className="-z-10 fixed top-0 left-0 w-[100vw] h-full bg-white opacity-60" /> : undefined}
            <div className="-z-10 fixed top-0 left-0 w-[100vw] h-full" style={{
                backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)',
                backgroundSize: '10px 10px',
                opacity: 0.5
            }} />
        </div>
    );
}