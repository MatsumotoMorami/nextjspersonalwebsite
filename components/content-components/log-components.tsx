import { ReactNode } from "react";

export default function LogComponentSet() {
    const logs = [
        {
            id: 1,
            title: "更新日志",
            content:
                <div>
                    <div>发布了V1.0.0版本</div>
                    <div>主要更新内容有:啥也没有</div>
                </div>,
            date: "2024/10/01 12:34:56"
        }, {
            id: 2,
            title: "更新日志",
            content:
                <div>
                    <div>发布了V1.0.0版本</div>
                    <div>主要更新内容有:啥也没有</div>
                </div>,
            date: "2024/10/01 12:34:56"
        }, {
            id: 3,
            title: "更新日志",
            content:
                <div>
                    <div>发布了V1.0.0版本</div>
                    <div>主要更新内容有:啥也没有</div>
                </div>,
            date: "2024/10/01 12:34:56"
        }, {
            id: 4,
            title: "更新日志",
            content:
                <div>
                    <div>发布了V1.0.0版本</div>
                    <div>主要更新内容有:啥也没有</div>
                </div>,
            date: "2024/10/01 12:34:56"
        }, {
            id: 5,
            title: "更新日志",
            content:
                <div>
                    <div>发布了V1.0.0版本</div>
                    <div>主要更新内容有:啥也没有</div>
                </div>,
            date: "2024/10/01 12:34:56"
        }
    ]
    return (
        <div className="my-[20vh] rounded-3xl bg-opacity-50 bg-blue-200 w-[70vw] mx-auto logborde fontGlobal">
            {logs.map(log => (
                <LogCard log={log} key={log.id}></LogCard>
            ))}
        </div>
    )
}

export function LogCard({ log }: { log: { title: string, content: ReactNode, date: string, id: number } }) {
    return (
        <div id={log.id.toString()} className="relative h-[30vh] w-[70vw] mx-auto hover:shadow-xl duration-300 text-gray-700">
            <div className="pl-5 pt-[3vh] pb-[3vh] text-3xl">{log.title}</div>
            <div className="pl-5 pb-3">{log.content}</div>
            <div className="absolute bottom-2 pl-5">
                <text className="pr-6">ID:{log.id}</text>
                <text>{log.date}</text>
            </div>
        </div>
    )
}