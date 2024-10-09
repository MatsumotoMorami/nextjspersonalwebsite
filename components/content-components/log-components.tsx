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
        <div>
            {logs.map(log => (
                <LogCard log={log} key={log.id}></LogCard>
            ))}
        </div>
    )
}

export function LogCard({ log }: { log: { title: string, content: ReactNode, date: string, id: number } }) {
    return (
        <div id={log.id.toString()}>
            <div>{log.title}</div>
            <div>{log.content}</div>
            <div>ID:{log.id}</div>
            <div>{log.date}</div>
        </div>
    )
}