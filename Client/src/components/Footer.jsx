import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="">
            <div className="">
                <div className="">
                    <Link to = '/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-yellow-700 via-orange-500 to-red-400 rounded-lg text-white'>Blog</span>
                    Space
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                    <Footer.Title title='About' />
                </div>
            </div>
        </div>
    </Footer>
  )
}
