import Image from "next/image"
import { ReactNode } from "react"

export default function IntroPageComponentSet() {
    return (
        <div className="fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 ipcs items-center">
            <LeftCard></LeftCard>
            <RightCard></RightCard>
        </div>
    )
}

function LeftCard() {
    return (
        <div className="w-[35vh] h-[35vh] flex justify-center items-center mx-[3vw]">
            <Avatar></Avatar>
        </div>
    )
}

function RightCard() {
    return (
        <div>
            <div className="title w-[50vw] introduction-title text-3xl">INTRODUCTION</div>
            <IntroInfo></IntroInfo>
        </div>
    )
}

function Avatar() {
    return (
        <img className="h-max w-max rounded-full m-5" src="/avatar/ava.jpg"></img>
    )
}
function IntroLine({ children }: { children: ReactNode }) {
    return <div className="introtext">{children}</div>
}

function IntroInfo() {
    return (
        <div className="IntroInfo">
            <IntroLine>这里是忆梦，来自上海，大学就读中，对象<div className="text-green-500 inline">@迷途面谈</div>。</IntroLine>
            <IntroLine>工作重心在Web开发，主要使用Next.JS+TailwindCSS</IntroLine>
            <IntroLine>主坑：明日方舟/FFXIV/舞萌/オンゲキ/东方非想天则</IntroLine>
            <IntroLine>マイRating16100 撃Rating16.75 姆Q相对一</IntroLine>
        </div>
    )
}