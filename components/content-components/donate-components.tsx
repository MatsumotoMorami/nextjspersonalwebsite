export default function DonateComponentSet() {
    return (
        <div className="w-[70vw] h-[70vh] mx-auto pt-[20vh]">
            <div className="mx-auto title text-2xl pb-8">Donate</div>
            <div className="w-[70vw] h-[50vh] donate mx-auto">
                <AlipayQRCode></AlipayQRCode>
                <WechatQRCode></WechatQRCode>
            </div>
        </div>
    );
}

function AlipayQRCode() {
    return (
        <div className="alipay">
            <img src="/qrcode/a1.png" className="mx-auto w-[30vh] h-[30vh]"></img>
            <div className="introtext pt-6 text-xl">Alipay</div>
        </div>
    )
}

function WechatQRCode() {
    return (
        <div className="wechat">
            <img src="/qrcode/w1.png" className="mx-auto w-[30vh] h-[30vh]"></img>
            <div className="introtext pt-6 text-xl">Wechat</div>
        </div>
    )
}

