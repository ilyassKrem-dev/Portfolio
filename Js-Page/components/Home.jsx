import line from "../Images/line-white.png"




function Home() {


    return (
        <>
            <main className="main-bg h-screen bg-center flex flex-col justify-center items-center">
                <h2 className="text-white text-[1.563rem] font-['Advent_Pro'] text-center sm:text-[2rem]">my name is Ilyass</h2>
                <h1 className="text-white text-[1.5rem] font-['Montserrat'] font-[600] text-center sm:text-[3rem]">I’M A DEVELOPER</h1>
                <img className="my-3.5 sm:w-50" src={line} alt="" />
                <div className="flex flex-row mt-6">
                    <a className="mr-8" href="https://mail.google.com/" target={"_blank"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                            <g clipPath="url(#clip0_6_39)">
                                <path d="M13.5164 5.70462C15.6541 5.70462 17.6683 6.58456 19.1444 7.96012V7.96418C19.1444 7.30362 19.6231 6.80393 20.2846 6.80393H20.4526C21.4964 6.80393 21.7056 7.71799 21.7056 8.00643L21.7099 18.2724C21.6373 18.9451 22.4581 19.2929 22.9139 18.8606C24.6858 17.1682 26.8094 10.1514 21.8106 6.08893C17.1486 2.29699 10.8914 2.92343 7.56468 5.05218C4.0288 7.32068 1.76868 12.3314 3.96406 17.0406C6.36155 22.1748 13.2154 23.7064 17.2947 22.1789C19.3597 21.4046 20.3117 23.9932 18.1653 24.8406C14.9304 26.1219 5.9153 25.9911 1.70481 19.2206C-1.13982 14.647 -0.98932 6.60162 6.55843 2.43349C12.3273 -0.757194 19.9389 0.126807 24.5274 4.57524C29.3224 9.23006 29.0451 17.9392 24.3638 21.3249C22.2437 22.8646 19.0954 21.3672 19.1182 19.1239L19.0946 18.3926C17.6184 19.7503 15.6541 20.5466 13.5164 20.5466C9.28755 20.5466 5.56443 17.0886 5.56443 13.1658C5.56443 9.20081 9.28755 5.70624 13.5164 5.70624V5.70462ZM18.8356 12.8822C18.6754 10.0084 16.3786 8.27781 13.6031 8.27781H13.4981C10.2991 8.27781 8.52193 10.6178 8.52193 13.2706C8.52193 16.2452 10.6683 18.1237 13.4849 18.1237C16.6288 18.1237 18.6929 15.9876 18.8434 13.4607L18.8356 12.8822Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_39">
                                <rect width="28" height="26" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a className="mr-8" href="https://github.com/" target={"_blank"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M14.4887 2.16089C7.48506 2.15806 1.8125 7.82779 1.8125 14.8257C1.8125 20.3595 5.36103 25.0635 10.3029 26.7911C10.9685 26.9582 10.8665 26.4852 10.8665 26.1624V23.9675C7.02344 24.4178 6.86768 21.8747 6.60996 21.4499C6.08887 20.5606 4.85693 20.334 5.2251 19.9092C6.10019 19.459 6.99228 20.0225 8.02598 21.549C8.77363 22.6563 10.2321 22.4694 10.9713 22.2853C11.1327 21.6198 11.4782 21.0251 11.954 20.5634C7.97217 19.8498 6.3126 17.4199 6.3126 14.5312C6.3126 13.1294 6.77422 11.8408 7.68047 10.8014C7.10273 9.08804 7.73428 7.62105 7.81924 7.40298C9.46465 7.25572 11.1752 8.58111 11.3083 8.6859C12.2429 8.43384 13.3105 8.30074 14.5057 8.30074C15.7064 8.30074 16.777 8.43951 17.72 8.69439C18.04 8.45084 19.626 7.31236 21.1553 7.45113C21.2374 7.6692 21.8548 9.1022 21.311 10.7929C22.2286 11.8351 22.6959 13.135 22.6959 14.5397C22.6959 17.434 21.025 19.8668 17.0318 20.5691C17.3739 20.9055 17.6454 21.3066 17.8307 21.7491C18.016 22.1916 18.1112 22.6666 18.1108 23.1463V26.3323C18.1335 26.5872 18.1108 26.8392 18.5356 26.8392C23.5512 25.1485 27.162 20.4105 27.162 14.8286C27.162 7.82779 21.4866 2.16089 14.4887 2.16089Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target={"_blank"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                            <g clipPath="url(#clip0_6_37)">
                                <path d="M15.0001 0.580078C7.0471 0.580078 0.600098 6.81221 0.600098 14.5001C0.600098 22.1881 7.0471 28.4202 15.0001 28.4202C22.9531 28.4202 29.4001 22.1881 29.4001 14.5001C29.4001 6.81221 22.9531 0.580078 15.0001 0.580078ZM11.4751 20.2697H8.5591V11.1985H11.4751V20.2697ZM9.9991 10.0849C9.0781 10.0849 8.4826 9.45412 8.4826 8.67402C8.4826 7.87796 9.0961 7.26606 10.0366 7.26606C10.9771 7.26606 11.5531 7.87796 11.5711 8.67402C11.5711 9.45412 10.9771 10.0849 9.9991 10.0849ZM22.1251 20.2697H19.2091V15.2425C19.2091 14.0724 18.7861 13.2778 17.7316 13.2778C16.9261 13.2778 16.4476 13.8157 16.2361 14.3334C16.1581 14.5175 16.1386 14.7785 16.1386 15.0381V20.2683H13.2211V14.0912C13.2211 12.9588 13.1836 12.0119 13.1446 11.197H15.6781L15.8116 12.4571H15.8701C16.2541 11.8655 17.1946 10.9926 18.7681 10.9926C20.6866 10.9926 22.1251 12.2352 22.1251 14.9061V20.2697Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_37">
                                <rect width="30" height="29" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </main>
        </>
    )
}

export default Home