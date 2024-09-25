export default function IntroPageComponentSet() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`">
            <LeftCard></LeftCard>
        </div>
    )
}

function LeftCard() {
    return (
        <div className="h-24 w-24">
            <Avatar></Avatar>
        </div>
    )
}

function Avatar() {
    return (
        <div className="avatar h-max w-max"></div>
    )
}