import Link from "next/link"
export const Stript = () => {
    return <div className=" bg-customGray h-10 mt-1 flex justify-center gap-1 items-center">
        <p className="font-semibold">No wallet KYC reuired</p><img className="max-w-8 max-h-8" src="/images/smilie.png" alt="" /><p>to pay using UPI on Paytm. <Link className="font-semibold" href={"https://support.paytm.com/cst-support/paytm-kyc-frequently-asked-questions-faqs"}>Learn more.</Link></p>
    </div>
}