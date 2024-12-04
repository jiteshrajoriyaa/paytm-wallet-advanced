import Link from "next/link"

export const Section = () => {
    return (
        <div className="flex justify-center items-center pt-20 pb-20">
            <div className="flex flex-col gap-8">
                <img
                    className="w-28 h-28"
                    src="/images/Rectangle.svg" alt="paytmIMG" />
                <div className="flex flex-col gap-4 w-1/2">
                    <p className="font-bold text-5xl ">India's Most-loved Payments App</p>
                    <p className="font-semibold text-lg">Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                </div>
                <Link href={"https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&pli=1"}><img 
                className="w-56"
                src="/images/Frame.svg" alt="PaytmIMG" />
                </Link>
            </div>
            <div>
                <img src="/images/image-2.svg" alt="payTMIMG" />
            </div>
        </div>
    )
}