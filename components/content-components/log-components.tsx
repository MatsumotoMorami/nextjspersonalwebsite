export default function LogComponentSet() {
    const logs = [
        {
            title: "更新日志",
            content:
                "发布了V1.0.0版本\n主要更新内容有:\n啥也没有",
            date: "2024/10/01 12:34:56"
        }, {
            title: "更新日志",
            content:
                "发布了V1.0.0版本\n主要更新内容有:\n啥也没有",
            date: "2024/10/01 12:34:56"
        }, {
            title: "更新日志",
            content:
                "发布了V1.0.0版本\n主要更新内容有:\n啥也没有",
            date: "2024/10/01 12:34:56"
        }, {
            title: "更新日志",
            content:
                "发布了V1.0.0版本\n主要更新内容有:\n啥也没有",
            date: "2024/10/01 12:34:56"
        }, {
            title: "更新日志",
            content:
                "发布了V1.0.0版本\n主要更新内容有:\n啥也没有",
            date: "2024/10/01 12:34:56"
        }
    ]
    return (
        <div>
            {logs.map(log => (
                <LogCard log={log}></LogCard>
            ))}
        </div>
    )
}

export function LogCard({ log }: { log: { title: string, content: string, date: string } }) {
    return (
        <div>
            {log.title}
            {log.content}
            {log.date}
        </div>
    )
}