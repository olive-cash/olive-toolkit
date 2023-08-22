import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <svg width="160" height="26" viewBox="0 0 160 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.2417 18H28.0217L31.2617 5.5H37.4417L40.6817 18H36.4617L36.0017 16.02H32.7017L32.2417 18ZM34.2417 9.34L33.4217 12.84H35.2617L34.4617 9.34H34.2417ZM48.7892 15L49.0292 17.88C48.3359 18.16 47.4426 18.3 46.3492 18.3C44.4826 18.3 43.1292 17.8667 42.2892 17C41.4626 16.12 41.0492 14.7867 41.0492 13C41.0492 11.2133 41.4626 9.88667 42.2892 9.02C43.1292 8.14 44.4826 7.7 46.3492 7.7C47.5092 7.7 48.4026 7.84 49.0292 8.12L48.5492 10.84C47.8426 10.6933 47.2826 10.62 46.8692 10.62C45.8559 10.62 45.3492 10.9733 45.3492 11.68V15.26C45.7359 15.34 46.2292 15.38 46.8292 15.38C47.4426 15.38 48.0959 15.2533 48.7892 15ZM54.5289 14.6V15.3C54.9289 15.34 55.3289 15.36 55.7289 15.36C56.9689 15.36 58.2222 15.16 59.4889 14.76L59.9689 17.7C58.4756 18.1 56.9956 18.3 55.5289 18.3C53.6622 18.3 52.3089 17.8667 51.4689 17C50.6422 16.12 50.2289 14.7867 50.2289 13C50.2289 11.2133 50.6422 9.88667 51.4689 9.02C52.3089 8.14 53.6556 7.7 55.5089 7.7C57.3756 7.7 58.6622 7.95333 59.3689 8.46C60.0756 8.96667 60.4289 9.91333 60.4289 11.3C60.4289 12.4733 60.0022 13.32 59.1489 13.84C58.3089 14.3467 56.7689 14.6 54.5289 14.6ZM54.5289 11.46V12.28H55.3489C55.8289 12.28 56.1756 12.2333 56.3889 12.14C56.6156 12.0333 56.7289 11.8 56.7289 11.44V10.62H55.9089C55.4289 10.62 55.0756 10.6733 54.8489 10.78C54.6356 10.8733 54.5289 11.1 54.5289 11.46ZM64.3453 11.76C64.3453 9.48 64.772 7.82 65.6253 6.78C66.4786 5.72667 68.0186 5.2 70.2453 5.2C72.472 5.2 74.012 5.72667 74.8653 6.78C75.7186 7.82 76.1453 9.48 76.1453 11.76C76.1453 12.8933 76.052 13.8467 75.8653 14.62C75.692 15.3933 75.3853 16.0667 74.9453 16.64C74.5053 17.2133 73.8986 17.6333 73.1253 17.9C72.352 18.1667 71.392 18.3 70.2453 18.3C69.0986 18.3 68.1386 18.1667 67.3653 17.9C66.592 17.6333 65.9853 17.2133 65.5453 16.64C65.1053 16.0667 64.792 15.3933 64.6053 14.62C64.432 13.8467 64.3453 12.8933 64.3453 11.76ZM68.6453 9.68V14.88H70.3053C70.852 14.88 71.2453 14.82 71.4853 14.7C71.7386 14.5667 71.8653 14.2733 71.8653 13.82V8.62H70.1853C69.652 8.62 69.2586 8.68667 69.0053 8.82C68.7653 8.94 68.6453 9.22667 68.6453 9.68ZM82.143 7.16V8H83.343V10.6H82.143V18H78.143V10.6H77.143V8H78.143L78.283 6.8C78.4696 5.26667 79.643 4.5 81.803 4.5C82.363 4.5 83.0963 4.56667 84.003 4.7L83.783 7.32L82.143 7.16ZM87.7188 18V5.5H94.1988C95.3988 5.5 96.2521 5.73333 96.7588 6.2C97.2788 6.66667 97.5388 7.34667 97.5388 8.24C97.5388 9.13333 97.3721 9.82667 97.0388 10.32C96.7188 10.8 96.2854 11.1133 95.7388 11.26V11.38C97.3521 11.66 98.1588 12.76 98.1588 14.68C98.1588 15.68 97.8921 16.4867 97.3588 17.1C96.8254 17.7 96.0054 18 94.8988 18H87.7188ZM93.2788 13.02H91.7188V15.06H93.2588C93.8188 15.06 94.0988 14.72 94.0988 14.04C94.0988 13.36 93.8254 13.02 93.2788 13.02ZM92.9788 8.24H91.7188V10.1H92.9588C93.4654 10.1 93.7188 9.79333 93.7188 9.18C93.7188 8.55333 93.4721 8.24 92.9788 8.24ZM104.295 7.7C107.495 7.7 109.095 8.8 109.095 11V18H107.095L105.955 16.86C105.568 17.3133 105.041 17.6667 104.375 17.92C103.708 18.1733 103.075 18.3 102.475 18.3C101.888 18.3 101.415 18.2533 101.055 18.16C100.695 18.0667 100.341 17.9067 99.9947 17.68C99.2347 17.2 98.8547 16.3067 98.8547 15C98.8547 12.6 100.668 11.4 104.295 11.4H105.095V10.68C104.668 10.6533 104.315 10.64 104.035 10.64C102.528 10.64 101.235 10.82 100.155 11.18L99.6747 8.32C101.008 7.90667 102.548 7.7 104.295 7.7ZM102.895 14.56V15.38H103.715C104.301 15.38 104.675 15.3133 104.835 15.18C105.008 15.0467 105.095 14.8733 105.095 14.66V13.72H104.275C103.795 13.72 103.441 13.7733 103.215 13.88C103.001 13.9733 102.895 14.2 102.895 14.56ZM111.842 8.4C112.709 7.93333 113.889 7.7 115.382 7.7C116.876 7.7 118.249 7.90667 119.502 8.32L119.042 11.04C118.002 10.7467 116.962 10.6 115.922 10.6C115.602 10.6 115.149 10.6267 114.562 10.68V11.32C116.722 11.32 118.189 11.64 118.962 12.28C119.349 12.6 119.622 12.9533 119.782 13.34C119.942 13.7133 120.022 14.1733 120.022 14.72C120.022 15.2533 119.956 15.7333 119.822 16.16C119.702 16.5867 119.509 16.9267 119.242 17.18C118.989 17.4333 118.722 17.64 118.442 17.8C118.162 17.96 117.796 18.0733 117.342 18.14C116.636 18.2467 115.816 18.3 114.882 18.3C113.229 18.3 111.736 18.1067 110.402 17.72L110.902 14.88C112.022 15.2267 113.236 15.4 114.542 15.4C115.142 15.4 115.689 15.3733 116.182 15.32V14.68C114.049 14.68 112.576 14.4 111.762 13.84C110.962 13.28 110.562 12.3533 110.562 11.06C110.562 9.75333 110.989 8.86667 111.842 8.4ZM125.33 14.6V15.3C125.73 15.34 126.13 15.36 126.53 15.36C127.77 15.36 129.023 15.16 130.29 14.76L130.77 17.7C129.276 18.1 127.796 18.3 126.33 18.3C124.463 18.3 123.11 17.8667 122.27 17C121.443 16.12 121.03 14.7867 121.03 13C121.03 11.2133 121.443 9.88667 122.27 9.02C123.11 8.14 124.456 7.7 126.31 7.7C128.176 7.7 129.463 7.95333 130.17 8.46C130.876 8.96667 131.23 9.91333 131.23 11.3C131.23 12.4733 130.803 13.32 129.95 13.84C129.11 14.3467 127.57 14.6 125.33 14.6ZM125.33 11.46V12.28H126.15C126.63 12.28 126.976 12.2333 127.19 12.14C127.416 12.0333 127.53 11.8 127.53 11.44V10.62H126.71C126.23 10.62 125.876 10.6733 125.65 10.78C125.436 10.8733 125.33 11.1 125.33 11.46Z" fill="#0133FE"/>
      <path d="M32.2417 18V19H33.036L33.2158 18.2263L32.2417 18ZM28.0217 18L27.0537 17.7491L26.7295 19H28.0217V18ZM31.2617 5.5V4.5H30.4879L30.2937 5.24909L31.2617 5.5ZM37.4417 5.5L38.4097 5.24909L38.2156 4.5H37.4417V5.5ZM40.6817 18V19H41.974L41.6497 17.7491L40.6817 18ZM36.4617 18L35.4877 18.2263L35.6674 19H36.4617V18ZM36.0017 16.02L36.9758 15.7937L36.796 15.02H36.0017V16.02ZM32.7017 16.02V15.02H31.9074L31.7277 15.7937L32.7017 16.02ZM34.2417 9.34V8.34H33.4489L33.2681 9.11189L34.2417 9.34ZM33.4217 12.84L32.4481 12.6119L32.1604 13.84H33.4217V12.84ZM35.2617 12.84V13.84H36.5161L36.2366 12.6172L35.2617 12.84ZM34.4617 9.34L35.4366 9.11717L35.2589 8.34H34.4617V9.34ZM32.2417 17H28.0217V19H32.2417V17ZM28.9897 18.2509L32.2297 5.75091L30.2937 5.24909L27.0537 17.7491L28.9897 18.2509ZM31.2617 6.5H37.4417V4.5H31.2617V6.5ZM36.4737 5.75091L39.7137 18.2509L41.6497 17.7491L38.4097 5.24909L36.4737 5.75091ZM40.6817 17H36.4617V19H40.6817V17ZM37.4358 17.7737L36.9758 15.7937L35.0277 16.2463L35.4877 18.2263L37.4358 17.7737ZM36.0017 15.02H32.7017V17.02H36.0017V15.02ZM31.7277 15.7937L31.2677 17.7737L33.2158 18.2263L33.6758 16.2463L31.7277 15.7937ZM33.2681 9.11189L32.4481 12.6119L34.3954 13.0681L35.2154 9.56811L33.2681 9.11189ZM33.4217 13.84H35.2617V11.84H33.4217V13.84ZM36.2366 12.6172L35.4366 9.11717L33.4869 9.56282L34.2869 13.0628L36.2366 12.6172ZM34.4617 8.34H34.2417V10.34H34.4617V8.34ZM48.7892 15L49.7858 14.917L49.6769 13.611L48.446 14.0607L48.7892 15ZM49.0292 17.88L49.4037 18.8072L50.087 18.5313L50.0258 17.797L49.0292 17.88ZM42.2892 17L41.5604 17.6847L41.5657 17.6904L41.5712 17.696L42.2892 17ZM42.2892 9.02L41.5659 8.32952L41.5656 8.32979L42.2892 9.02ZM49.0292 8.12L50.014 8.29378L50.1496 7.52532L49.4372 7.20699L49.0292 8.12ZM48.5492 10.84L48.346 11.8191L49.3549 12.0285L49.534 11.0138L48.5492 10.84ZM45.3492 15.26H44.3492V16.0743L45.1466 16.2393L45.3492 15.26ZM47.7927 15.083L48.0327 17.963L50.0258 17.797L49.7858 14.917L47.7927 15.083ZM48.6548 16.9528C48.122 17.1679 47.3684 17.3 46.3492 17.3V19.3C47.5167 19.3 48.5498 19.1521 49.4037 18.8072L48.6548 16.9528ZM46.3492 17.3C44.6081 17.3 43.5775 16.8923 43.0073 16.304L41.5712 17.696C42.6809 18.841 44.357 19.3 46.3492 19.3V17.3ZM43.0181 16.3153C42.4334 15.6929 42.0492 14.6524 42.0492 13H40.0492C40.0492 14.9209 40.4917 16.5471 41.5604 17.6847L43.0181 16.3153ZM42.0492 13C42.0492 11.3461 42.434 10.3171 43.0128 9.71021L41.5656 8.32979C40.4911 9.45626 40.0492 11.0806 40.0492 13H42.0492ZM43.0126 9.71048C43.5834 9.11251 44.6118 8.7 46.3492 8.7V6.7C44.3533 6.7 42.6751 7.16749 41.5659 8.32952L43.0126 9.71048ZM46.3492 8.7C47.4526 8.7 48.1822 8.83684 48.6213 9.03301L49.4372 7.20699C48.6229 6.84316 47.5658 6.7 46.3492 6.7V8.7ZM48.0444 7.94621L47.5644 10.6662L49.534 11.0138L50.014 8.29378L48.0444 7.94621ZM48.7524 9.86087C48.0205 9.70895 47.3831 9.62 46.8692 9.62V11.62C47.182 11.62 47.6646 11.6777 48.346 11.8191L48.7524 9.86087ZM46.8692 9.62C46.2771 9.62 45.6549 9.71767 45.1572 10.0648C44.5939 10.4576 44.3492 11.0542 44.3492 11.68H46.3492C46.3492 11.6227 46.3592 11.6208 46.3464 11.6475C46.3313 11.6792 46.3088 11.6999 46.3012 11.7052C46.3 11.7061 46.3332 11.6829 46.4306 11.6603C46.5282 11.6376 46.6708 11.62 46.8692 11.62V9.62ZM44.3492 11.68V15.26H46.3492V11.68H44.3492ZM45.1466 16.2393C45.6248 16.3382 46.1924 16.38 46.8292 16.38V14.38C46.2661 14.38 45.847 14.3418 45.5518 14.2807L45.1466 16.2393ZM46.8292 16.38C47.5807 16.38 48.3509 16.2248 49.1324 15.9393L48.446 14.0607C47.8409 14.2818 47.3044 14.38 46.8292 14.38V16.38ZM54.5289 14.6V13.6H53.5289V14.6H54.5289ZM54.5289 15.3H53.5289V16.205L54.4294 16.295L54.5289 15.3ZM59.4889 14.76L60.4758 14.5989L60.2897 13.4585L59.1878 13.8064L59.4889 14.76ZM59.9689 17.7L60.2276 18.6659L61.1016 18.4318L60.9558 17.5389L59.9689 17.7ZM51.4689 17L50.7401 17.6847L50.7454 17.6904L50.7508 17.696L51.4689 17ZM51.4689 9.02L50.7456 8.32952L50.7453 8.32979L51.4689 9.02ZM59.1489 13.84L59.6654 14.6963L59.6693 14.6939L59.1489 13.84ZM54.5289 12.28H53.5289V13.28H54.5289V12.28ZM56.3889 12.14L56.7897 13.0562L56.8023 13.0507L56.8147 13.0448L56.3889 12.14ZM56.7289 10.62H57.7289V9.62H56.7289V10.62ZM54.8489 10.78L55.2497 11.6962L55.2623 11.6907L55.2747 11.6848L54.8489 10.78ZM53.5289 14.6V15.3H55.5289V14.6H53.5289ZM54.4294 16.295C54.8623 16.3383 55.2955 16.36 55.7289 16.36V14.36C55.3623 14.36 54.9955 14.3417 54.6284 14.305L54.4294 16.295ZM55.7289 16.36C57.0781 16.36 58.4329 16.1422 59.79 15.7136L59.1878 13.8064C58.0116 14.1778 56.8597 14.36 55.7289 14.36V16.36ZM58.502 14.9211L58.982 17.8611L60.9558 17.5389L60.4758 14.5989L58.502 14.9211ZM59.7102 16.7341C58.2967 17.1127 56.9036 17.3 55.5289 17.3V19.3C57.0875 19.3 58.6545 19.0873 60.2276 18.6659L59.7102 16.7341ZM55.5289 17.3C53.7878 17.3 52.7572 16.8923 52.187 16.304L50.7508 17.696C51.8606 18.841 53.5367 19.3 55.5289 19.3V17.3ZM52.1978 16.3153C51.613 15.6929 51.2289 14.6524 51.2289 13H49.2289C49.2289 14.9209 49.6714 16.5471 50.7401 17.6847L52.1978 16.3153ZM51.2289 13C51.2289 11.3461 51.6137 10.3171 52.1925 9.71021L50.7453 8.32979C49.6708 9.45626 49.2289 11.0806 49.2289 13H51.2289ZM52.1923 9.71048C52.7642 9.1113 53.7874 8.7 55.5089 8.7V6.7C53.5238 6.7 51.8536 7.16869 50.7456 8.32952L52.1923 9.71048ZM55.5089 8.7C57.3591 8.7 58.3578 8.96553 58.7862 9.2727L59.9516 7.6473C58.9667 6.94113 57.3921 6.7 55.5089 6.7V8.7ZM58.7862 9.2727C59.1048 9.50112 59.4289 10.0404 59.4289 11.3H61.4289C61.4289 9.78622 61.0463 8.43221 59.9516 7.6473L58.7862 9.2727ZM59.4289 11.3C59.4289 12.196 59.1277 12.6819 58.6285 12.9861L59.6693 14.6939C60.8768 13.9581 61.4289 12.7507 61.4289 11.3H59.4289ZM58.6324 12.9837C58.3662 13.1443 57.9117 13.3065 57.2016 13.4233C56.5028 13.5382 55.6158 13.6 54.5289 13.6V15.6C55.682 15.6 56.685 15.5351 57.5262 15.3967C58.3561 15.2602 59.0916 15.0424 59.6654 14.6963L58.6324 12.9837ZM53.5289 11.46V12.28H55.5289V11.46H53.5289ZM54.5289 13.28H55.3489V11.28H54.5289V13.28ZM55.3489 13.28C55.8513 13.28 56.3754 13.2374 56.7897 13.0562L55.9881 11.2238C55.9979 11.2196 55.9579 11.2375 55.8355 11.2539C55.7192 11.2696 55.5594 11.28 55.3489 11.28V13.28ZM56.8147 13.0448C57.539 12.704 57.7289 11.9928 57.7289 11.44H55.7289C55.7289 11.5239 55.7144 11.5098 55.7444 11.4481C55.7609 11.4142 55.7883 11.3714 55.8305 11.3291C55.8731 11.2866 55.9197 11.2556 55.9631 11.2352L56.8147 13.0448ZM57.7289 11.44V10.62H55.7289V11.44H57.7289ZM56.7289 9.62H55.9089V11.62H56.7289V9.62ZM55.9089 9.62C55.3924 9.62 54.856 9.67147 54.4231 9.87518L55.2747 11.6848C55.2719 11.6861 55.3151 11.6666 55.4332 11.6488C55.547 11.6316 55.7031 11.62 55.9089 11.62V9.62ZM54.4481 9.86384C53.6897 10.1957 53.5289 10.9476 53.5289 11.46H55.5289C55.5289 11.3676 55.5443 11.3809 55.5137 11.4458C55.4965 11.4825 55.4659 11.5322 55.416 11.5821C55.3653 11.6329 55.3072 11.671 55.2497 11.6962L54.4481 9.86384ZM65.6253 6.78L66.3984 7.41433L66.4023 7.40948L65.6253 6.78ZM74.8653 6.78L74.0883 7.40949L74.0922 7.41432L74.8653 6.78ZM75.8653 14.62L74.8932 14.3854L74.8913 14.3933L74.8895 14.4013L75.8653 14.62ZM74.9453 16.64L75.7386 17.2488L75.7386 17.2488L74.9453 16.64ZM73.1253 17.9L72.7993 16.9546L73.1253 17.9ZM67.3653 17.9L67.0393 18.8454L67.0393 18.8454L67.3653 17.9ZM65.5453 16.64L66.3386 16.0312L66.3386 16.0312L65.5453 16.64ZM64.6053 14.62L63.6295 14.8387L63.6313 14.8467L63.6332 14.8546L64.6053 14.62ZM68.6453 14.88H67.6453V15.88H68.6453V14.88ZM71.4853 14.7L71.9325 15.5944L71.9418 15.5898L71.9511 15.5849L71.4853 14.7ZM71.8653 8.62H72.8653V7.62H71.8653V8.62ZM69.0053 8.82L69.4525 9.71443L69.4618 9.70977L69.4711 9.70492L69.0053 8.82ZM65.3453 11.76C65.3453 9.56452 65.7637 8.18787 66.3984 7.41432L64.8522 6.14568C63.7803 7.45213 63.3453 9.39548 63.3453 11.76H65.3453ZM66.4023 7.40948C66.9717 6.7067 68.1295 6.2 70.2453 6.2V4.2C67.9078 4.2 65.9856 4.74663 64.8483 6.15052L66.4023 7.40948ZM70.2453 6.2C72.3611 6.2 73.519 6.7067 74.0883 7.40948L75.6423 6.15052C74.505 4.74663 72.5829 4.2 70.2453 4.2V6.2ZM74.0922 7.41432C74.727 8.18787 75.1453 9.56452 75.1453 11.76H77.1453C77.1453 9.39548 76.7103 7.45213 75.6384 6.14568L74.0922 7.41432ZM75.1453 11.76C75.1453 12.8447 75.0554 13.7137 74.8932 14.3854L76.8374 14.8546C77.0486 13.9797 77.1453 12.942 77.1453 11.76H75.1453ZM74.8895 14.4013C74.7449 15.0467 74.4953 15.5838 74.152 16.0312L75.7386 17.2488C76.2753 16.5495 76.6391 15.7399 76.8411 14.8387L74.8895 14.4013ZM74.152 16.0312C73.8467 16.429 73.4125 16.7432 72.7993 16.9546L73.4513 18.8454C74.3848 18.5235 75.1639 17.9976 75.7386 17.2488L74.152 16.0312ZM72.7993 16.9546C72.1637 17.1738 71.3221 17.3 70.2453 17.3V19.3C71.4619 19.3 72.5403 19.1595 73.4513 18.8454L72.7993 16.9546ZM70.2453 17.3C69.1685 17.3 68.3269 17.1738 67.6913 16.9546L67.0393 18.8454C67.9504 19.1595 69.0288 19.3 70.2453 19.3V17.3ZM67.6913 16.9546C67.0781 16.7432 66.6439 16.429 66.3386 16.0312L64.752 17.2488C65.3267 17.9976 66.1058 18.5235 67.0393 18.8454L67.6913 16.9546ZM66.3386 16.0312C65.9919 15.5794 65.7346 15.0366 65.5774 14.3854L63.6332 14.8546C63.8494 15.75 64.2187 16.5539 64.752 17.2488L66.3386 16.0312ZM65.5811 14.4013C65.4291 13.7231 65.3453 12.8484 65.3453 11.76H63.3453C63.3453 12.9383 63.4349 13.9702 63.6295 14.8387L65.5811 14.4013ZM67.6453 9.68V14.88H69.6453V9.68H67.6453ZM68.6453 15.88H70.3053V13.88H68.6453V15.88ZM70.3053 15.88C70.8784 15.88 71.472 15.8247 71.9325 15.5944L71.0381 13.8056C71.0447 13.8023 70.9979 13.8253 70.8595 13.8464C70.7273 13.8666 70.5454 13.88 70.3053 13.88V15.88ZM71.9511 15.5849C72.6982 15.1917 72.8653 14.4105 72.8653 13.82H70.8653C70.8653 13.8879 70.8605 13.9342 70.8556 13.9627C70.8508 13.9913 70.847 13.9957 70.8523 13.9836C70.858 13.9703 70.8733 13.9402 70.9048 13.9049C70.9372 13.8685 70.977 13.8375 71.0196 13.8151L71.9511 15.5849ZM72.8653 13.82V8.62H70.8653V13.82H72.8653ZM71.8653 7.62H70.1853V9.62H71.8653V7.62ZM70.1853 7.62C69.6071 7.62 69.0132 7.6858 68.5396 7.93508L69.4711 9.70492C69.4708 9.70504 69.4742 9.70326 69.482 9.70012C69.4897 9.69698 69.5012 9.69274 69.517 9.68785C69.5492 9.67792 69.5951 9.66651 69.6574 9.65594C69.784 9.63448 69.9572 9.62 70.1853 9.62V7.62ZM68.5581 7.92557C67.7879 8.31068 67.6453 9.12442 67.6453 9.68H69.6453C69.6453 9.60959 69.6501 9.56129 69.6549 9.53132C69.6598 9.50111 69.6636 9.49719 69.6578 9.51114C69.6514 9.52624 69.6339 9.56193 69.5966 9.60409C69.5578 9.64784 69.5083 9.68652 69.4525 9.71443L68.5581 7.92557ZM82.143 7.16L82.2401 6.16472L81.143 6.05769V7.16H82.143ZM82.143 8H81.143V9H82.143V8ZM83.343 8H84.343V7H83.343V8ZM83.343 10.6V11.6H84.343V10.6H83.343ZM82.143 10.6V9.6H81.143V10.6H82.143ZM82.143 18V19H83.143V18H82.143ZM78.143 18H77.143V19H78.143V18ZM78.143 10.6H79.143V9.6H78.143V10.6ZM77.143 10.6H76.143V11.6H77.143V10.6ZM77.143 8V7H76.143V8H77.143ZM78.143 8V9H79.0331L79.1362 8.11588L78.143 8ZM78.283 6.8L77.2903 6.67915L77.2897 6.68412L78.283 6.8ZM84.003 4.7L84.9995 4.78367L85.0781 3.84735L84.1485 3.71064L84.003 4.7ZM83.783 7.32L83.6859 8.31527L84.6947 8.41369L84.7795 7.40367L83.783 7.32ZM81.143 7.16V8H83.143V7.16H81.143ZM82.143 9H83.343V7H82.143V9ZM82.343 8V10.6H84.343V8H82.343ZM83.343 9.6H82.143V11.6H83.343V9.6ZM81.143 10.6V18H83.143V10.6H81.143ZM82.143 17H78.143V19H82.143V17ZM79.143 18V10.6H77.143V18H79.143ZM78.143 9.6H77.143V11.6H78.143V9.6ZM78.143 10.6V8H76.143V10.6H78.143ZM77.143 9H78.143V7H77.143V9ZM79.1362 8.11588L79.2762 6.91588L77.2897 6.68412L77.1497 7.88412L79.1362 8.11588ZM79.2756 6.92085C79.3374 6.41322 79.5374 6.1164 79.85 5.91214C80.2081 5.6781 80.8199 5.5 81.803 5.5V3.5C80.6261 3.5 79.5711 3.70523 78.756 4.23786C77.8953 4.80027 77.4152 5.65344 77.2903 6.67915L79.2756 6.92085ZM81.803 5.5C82.2935 5.5 82.9728 5.55926 83.8575 5.68936L84.1485 3.71064C83.2198 3.57407 82.4324 3.5 81.803 3.5V5.5ZM83.0065 4.61632L82.7865 7.23632L84.7795 7.40367L84.9995 4.78367L83.0065 4.61632ZM83.8801 6.32472L82.2401 6.16472L82.0459 8.15527L83.6859 8.31527L83.8801 6.32472ZM87.7188 18H86.7188V19H87.7188V18ZM87.7188 5.5V4.5H86.7188V5.5H87.7188ZM96.7588 6.2L96.0812 6.93561L96.0908 6.94424L96.7588 6.2ZM97.0388 10.32L96.2101 9.76013L96.2067 9.7653L97.0388 10.32ZM95.7388 11.26L95.4796 10.2942L94.7388 10.4929V11.26H95.7388ZM95.7388 11.38H94.7388V12.2214L95.5678 12.3653L95.7388 11.38ZM97.3588 17.1L98.1062 17.7644L98.1134 17.7562L97.3588 17.1ZM91.7188 13.02V12.02H90.7188V13.02H91.7188ZM91.7188 15.06H90.7188V16.06H91.7188V15.06ZM91.7188 8.24V7.24H90.7188V8.24H91.7188ZM91.7188 10.1H90.7188V11.1H91.7188V10.1ZM88.7188 18V5.5H86.7188V18H88.7188ZM87.7188 6.5H94.1988V4.5H87.7188V6.5ZM94.1988 6.5C95.3184 6.5 95.8549 6.72706 96.0813 6.93554L97.4362 5.46445C96.6493 4.73961 95.4791 4.5 94.1988 4.5V6.5ZM96.0908 6.94424C96.3439 7.17136 96.5388 7.54626 96.5388 8.24H98.5388C98.5388 7.14707 98.2136 6.16197 97.4267 5.45576L96.0908 6.94424ZM96.5388 8.24C96.5388 9.0276 96.3888 9.49575 96.2102 9.76014L97.8673 10.8799C98.3554 10.1576 98.5388 9.23906 98.5388 8.24H96.5388ZM96.2067 9.7653C96.0186 10.0475 95.7868 10.2117 95.4796 10.2942L95.9979 12.2258C96.784 12.0149 97.4189 11.5525 97.8708 10.8747L96.2067 9.7653ZM94.7388 11.26V11.38H96.7388V11.26H94.7388ZM95.5678 12.3653C96.174 12.4705 96.5267 12.7055 96.7473 13.0064C96.9829 13.3275 97.1588 13.8485 97.1588 14.68H99.1588C99.1588 13.5915 98.9313 12.6025 98.3602 11.8236C97.7741 11.0245 96.9169 10.5695 95.9097 10.3947L95.5678 12.3653ZM97.1588 14.68C97.1588 15.4966 96.945 16.0518 96.6041 16.4438L98.1134 17.7562C98.8391 16.9215 99.1588 15.8634 99.1588 14.68H97.1588ZM96.6113 16.4356C96.3315 16.7505 95.8323 17 94.8988 17V19C96.1786 19 97.3193 18.6495 98.1062 17.7644L96.6113 16.4356ZM94.8988 17H87.7188V19H94.8988V17ZM93.2788 12.02H91.7188V14.02H93.2788V12.02ZM90.7188 13.02V15.06H92.7188V13.02H90.7188ZM91.7188 16.06H93.2588V14.06H91.7188V16.06ZM93.2588 16.06C93.7496 16.06 94.2811 15.9016 94.6607 15.4407C95.0096 15.017 95.0988 14.492 95.0988 14.04H93.0988C93.0988 14.1446 93.0876 14.2008 93.0819 14.2215C93.0769 14.24 93.0812 14.2126 93.1168 14.1693C93.1344 14.1479 93.1563 14.1269 93.1818 14.1083C93.2071 14.0899 93.2313 14.0773 93.2511 14.0693C93.2898 14.0536 93.2995 14.06 93.2588 14.06V16.06ZM95.0988 14.04C95.0988 13.5923 95.0131 13.0713 94.6731 12.6484C94.2996 12.1839 93.7711 12.02 93.2788 12.02V14.02C93.3135 14.02 93.298 14.0255 93.2545 14.0075C93.2324 13.9983 93.2066 13.9845 93.1803 13.9648C93.1539 13.9451 93.1318 13.9232 93.1144 13.9016C93.0794 13.858 93.076 13.8317 93.0816 13.8526C93.0877 13.8755 93.0988 13.9337 93.0988 14.04H95.0988ZM92.9788 7.24H91.7188V9.24H92.9788V7.24ZM90.7188 8.24V10.1H92.7188V8.24H90.7188ZM91.7188 11.1H92.9588V9.1H91.7188V11.1ZM92.9588 11.1C93.4219 11.1 93.9331 10.9506 94.2997 10.5069C94.6361 10.0997 94.7188 9.59928 94.7188 9.18H92.7188C92.7188 9.26776 92.7093 9.30903 92.7071 9.31702C92.7056 9.32265 92.7152 9.28472 92.7578 9.23312C92.8038 9.17748 92.8625 9.13715 92.9171 9.11515C92.9655 9.09562 92.9865 9.1 92.9588 9.1V11.1ZM94.7188 9.18C94.7188 8.7626 94.6412 8.26507 94.3195 7.85644C93.9619 7.40225 93.4518 7.24 92.9788 7.24V9.24C92.9978 9.24 92.9681 9.24311 92.9126 9.2196C92.851 9.19352 92.7915 9.14881 92.748 9.09356C92.7084 9.04321 92.7018 9.0095 92.7052 9.02257C92.7091 9.03733 92.7188 9.08566 92.7188 9.18H94.7188ZM109.095 18V19H110.095V18H109.095ZM107.095 18L106.388 18.7071L106.68 19H107.095V18ZM105.955 16.86L106.662 16.1529L105.896 15.3874L105.194 16.2111L105.955 16.86ZM104.375 17.92L104.019 16.9852L104.019 16.9852L104.375 17.92ZM101.055 18.16L100.804 19.128L100.804 19.128L101.055 18.16ZM99.9947 17.68L100.542 16.843L100.535 16.8387L100.529 16.8345L99.9947 17.68ZM105.095 11.4V12.4H106.095V11.4H105.095ZM105.095 10.68H106.095V9.74055L105.157 9.68195L105.095 10.68ZM100.155 11.18L99.1685 11.3455L99.362 12.4983L100.471 12.1287L100.155 11.18ZM99.6747 8.32L99.3786 7.36484L98.5438 7.62362L98.6885 8.48552L99.6747 8.32ZM102.895 15.38H101.895V16.38H102.895V15.38ZM104.835 15.18L104.225 14.3874L104.21 14.3993L104.195 14.4118L104.835 15.18ZM105.095 13.72H106.095V12.72H105.095V13.72ZM103.215 13.88L103.616 14.7962L103.628 14.7907L103.64 14.7848L103.215 13.88ZM104.295 8.7C105.811 8.7 106.771 8.96627 107.328 9.34904C107.817 9.68537 108.095 10.1783 108.095 11H110.095C110.095 9.62165 109.572 8.46463 108.461 7.70096C107.418 6.98373 105.978 6.7 104.295 6.7V8.7ZM108.095 11V18H110.095V11H108.095ZM109.095 17H107.095V19H109.095V17ZM107.802 17.2929L106.662 16.1529L105.248 17.5671L106.388 18.7071L107.802 17.2929ZM105.194 16.2111C104.936 16.5136 104.56 16.7798 104.019 16.9852L104.73 18.8548C105.523 18.5535 106.2 18.1131 106.716 17.5089L105.194 16.2111ZM104.019 16.9852C103.445 17.2034 102.933 17.3 102.475 17.3V19.3C103.217 19.3 103.971 19.1433 104.73 18.8548L104.019 16.9852ZM102.475 17.3C101.93 17.3 101.551 17.2555 101.306 17.192L100.804 19.128C101.279 19.2511 101.846 19.3 102.475 19.3V17.3ZM101.306 17.192C101.062 17.1289 100.808 17.0169 100.542 16.843L99.4474 18.517C99.8748 18.7964 100.327 19.0045 100.804 19.128L101.306 17.192ZM100.529 16.8345C100.177 16.6126 99.8547 16.1321 99.8547 15H97.8547C97.8547 16.4812 98.2921 17.7874 99.4607 18.5255L100.529 16.8345ZM99.8547 15C99.8547 14.0945 100.172 13.5272 100.767 13.1339C101.433 12.6928 102.56 12.4 104.295 12.4V10.4C102.403 10.4 100.809 10.7072 99.6628 11.4661C98.4437 12.2728 97.8547 13.5055 97.8547 15H99.8547ZM104.295 12.4H105.095V10.4H104.295V12.4ZM106.095 11.4V10.68H104.095V11.4H106.095ZM105.157 9.68195C104.719 9.65458 104.343 9.64 104.035 9.64V11.64C104.286 11.64 104.617 11.6521 105.032 11.6781L105.157 9.68195ZM104.035 9.64C102.453 9.64 101.047 9.82835 99.8385 10.2313L100.471 12.1287C101.422 11.8116 102.603 11.64 104.035 11.64V9.64ZM101.141 11.0145L100.661 8.15448L98.6885 8.48552L99.1685 11.3455L101.141 11.0145ZM99.9708 9.27516C101.188 8.89792 102.624 8.7 104.295 8.7V6.7C102.472 6.7 100.828 6.91541 99.3786 7.36484L99.9708 9.27516ZM101.895 14.56V15.38H103.895V14.56H101.895ZM102.895 16.38H103.715V14.38H102.895V16.38ZM103.715 16.38C104.039 16.38 104.343 16.3621 104.61 16.3144C104.849 16.2719 105.192 16.1841 105.475 15.9482L104.195 14.4118C104.266 14.3522 104.321 14.3321 104.324 14.3312C104.329 14.3292 104.311 14.3363 104.259 14.3456C104.153 14.3645 103.977 14.38 103.715 14.38V16.38ZM105.444 15.9726C105.857 15.6556 106.095 15.1928 106.095 14.66H104.095C104.095 14.6273 104.102 14.5685 104.135 14.5028C104.168 14.4378 104.207 14.4009 104.225 14.3874L105.444 15.9726ZM106.095 14.66V13.72H104.095V14.66H106.095ZM105.095 12.72H104.275V14.72H105.095V12.72ZM104.275 12.72C103.758 12.72 103.222 12.7715 102.789 12.9752L103.64 14.7848C103.638 14.7861 103.681 14.7666 103.799 14.7488C103.913 14.7316 104.069 14.72 104.275 14.72V12.72ZM102.814 12.9638C102.055 13.2957 101.895 14.0476 101.895 14.56H103.895C103.895 14.4676 103.91 14.4809 103.88 14.5458C103.862 14.5825 103.832 14.6322 103.782 14.6821C103.731 14.7329 103.673 14.771 103.616 14.7962L102.814 12.9638ZM111.842 8.4L111.368 7.51951L111.363 7.52263L111.842 8.4ZM119.502 8.32L120.488 8.48675L120.632 7.63945L119.816 7.37031L119.502 8.32ZM119.042 11.04L118.771 12.0024L119.843 12.3047L120.028 11.2067L119.042 11.04ZM114.562 10.68L114.472 9.68411L113.562 9.76678V10.68H114.562ZM114.562 11.32H113.562V12.32H114.562V11.32ZM118.962 12.28L118.325 13.0504L118.325 13.0504L118.962 12.28ZM119.782 13.34L118.858 13.7224L118.863 13.7339L119.782 13.34ZM119.822 16.16L118.868 15.8617L118.864 15.8754L118.86 15.8893L119.822 16.16ZM119.242 17.18L118.554 16.455L118.544 16.4638L118.535 16.4729L119.242 17.18ZM118.442 17.8L118.938 18.6682L118.442 17.8ZM117.342 18.14L117.197 17.1506L117.193 17.1512L117.342 18.14ZM110.402 17.72L109.417 17.5466L109.262 18.4305L110.124 18.6804L110.402 17.72ZM110.902 14.88L111.198 13.9247L110.114 13.5892L109.917 14.7066L110.902 14.88ZM116.182 15.32L116.29 16.3142L117.182 16.2177V15.32H116.182ZM116.182 14.68H117.182V13.68H116.182V14.68ZM111.762 13.84L111.189 14.6593L111.195 14.6636L111.762 13.84ZM112.316 9.28047C112.981 8.92252 113.976 8.7 115.382 8.7V6.7C113.802 6.7 112.437 6.94414 111.368 7.51953L112.316 9.28047ZM115.382 8.7C116.783 8.7 118.049 8.89375 119.189 9.26969L119.816 7.37031C118.449 6.91959 116.968 6.7 115.382 6.7V8.7ZM118.516 8.15325L118.056 10.8732L120.028 11.2067L120.488 8.48675L118.516 8.15325ZM119.314 10.0775C118.189 9.76028 117.058 9.6 115.922 9.6V11.6C116.867 11.6 117.816 11.7331 118.771 12.0024L119.314 10.0775ZM115.922 9.6C115.557 9.6 115.068 9.6299 114.472 9.68411L114.653 11.6759C115.23 11.6234 115.648 11.6 115.922 11.6V9.6ZM113.562 10.68V11.32H115.562V10.68H113.562ZM114.562 12.32C115.599 12.32 116.429 12.3973 117.069 12.537C117.718 12.6785 118.107 12.8701 118.325 13.0504L119.6 11.5096C119.044 11.0499 118.314 10.7615 117.496 10.583C116.669 10.4027 115.686 10.32 114.562 10.32V12.32ZM118.325 13.0504C118.611 13.287 118.772 13.5138 118.858 13.7224L120.706 12.9576C120.473 12.3929 120.087 11.913 119.6 11.5096L118.325 13.0504ZM118.863 13.7339C118.955 13.9477 119.022 14.2646 119.022 14.72H121.022C121.022 14.0821 120.93 13.4789 120.701 12.9461L118.863 13.7339ZM119.022 14.72C119.022 15.1711 118.966 15.5481 118.868 15.8617L120.777 16.4583C120.945 15.9185 121.022 15.3356 121.022 14.72H119.022ZM118.86 15.8893C118.778 16.1782 118.665 16.3489 118.554 16.455L119.931 17.905C120.353 17.5044 120.626 16.9951 120.785 16.4307L118.86 15.8893ZM118.535 16.4729C118.338 16.6702 118.141 16.8204 117.946 16.9318L118.938 18.6682C119.304 18.4596 119.64 18.1964 119.949 17.8871L118.535 16.4729ZM117.946 16.9318C117.81 17.0097 117.575 17.0951 117.197 17.1506L117.488 19.1294C118.017 19.0516 118.515 18.9103 118.938 18.6682L117.946 16.9318ZM117.193 17.1512C116.548 17.2486 115.78 17.3 114.882 17.3V19.3C115.851 19.3 116.723 19.2448 117.492 19.1288L117.193 17.1512ZM114.882 17.3C113.306 17.3 111.908 17.1155 110.681 16.7596L110.124 18.6804C111.563 19.0978 113.152 19.3 114.882 19.3V17.3ZM111.387 17.8934L111.887 15.0534L109.917 14.7066L109.417 17.5466L111.387 17.8934ZM110.607 15.8353C111.833 16.2148 113.147 16.4 114.542 16.4V14.4C113.325 14.4 112.212 14.2386 111.198 13.9247L110.607 15.8353ZM114.542 16.4C115.171 16.4 115.754 16.3721 116.29 16.3142L116.075 14.3258C115.624 14.3746 115.114 14.4 114.542 14.4V16.4ZM117.182 15.32V14.68H115.182V15.32H117.182ZM116.182 13.68C114.064 13.68 112.869 13.3881 112.329 13.0164L111.195 14.6636C112.282 15.4119 114.034 15.68 116.182 15.68V13.68ZM112.336 13.0208C111.886 12.706 111.562 12.1436 111.562 11.06H109.562C109.562 12.5631 110.039 13.854 111.189 14.6592L112.336 13.0208ZM111.562 11.06C111.562 9.97488 111.899 9.50896 112.322 9.27737L111.363 7.52263C110.079 8.22437 109.562 9.53179 109.562 11.06H111.562ZM125.33 14.6V13.6H124.33V14.6H125.33ZM125.33 15.3H124.33V16.205L125.23 16.295L125.33 15.3ZM130.29 14.76L131.277 14.5989L131.09 13.4585L129.989 13.8064L130.29 14.76ZM130.77 17.7L131.028 18.6659L131.902 18.4318L131.757 17.5389L130.77 17.7ZM122.27 17L121.541 17.6847L121.546 17.6904L121.552 17.696L122.27 17ZM122.27 9.02L121.546 8.32952L121.546 8.32979L122.27 9.02ZM129.95 13.84L130.466 14.6963L130.47 14.6939L129.95 13.84ZM125.33 12.28H124.33V13.28H125.33V12.28ZM127.19 12.14L127.591 13.0562L127.603 13.0507L127.615 13.0448L127.19 12.14ZM127.53 10.62H128.53V9.62H127.53V10.62ZM125.65 10.78L126.051 11.6962L126.063 11.6907L126.075 11.6848L125.65 10.78ZM124.33 14.6V15.3H126.33V14.6H124.33ZM125.23 16.295C125.663 16.3383 126.096 16.36 126.53 16.36V14.36C126.163 14.36 125.796 14.3417 125.429 14.305L125.23 16.295ZM126.53 16.36C127.879 16.36 129.234 16.1422 130.591 15.7136L129.989 13.8064C128.812 14.1778 127.661 14.36 126.53 14.36V16.36ZM129.303 14.9211L129.783 17.8611L131.757 17.5389L131.277 14.5989L129.303 14.9211ZM130.511 16.7341C129.097 17.1127 127.704 17.3 126.33 17.3V19.3C127.888 19.3 129.455 19.0873 131.028 18.6659L130.511 16.7341ZM126.33 17.3C124.589 17.3 123.558 16.8923 122.988 16.304L121.552 17.696C122.661 18.841 124.337 19.3 126.33 19.3V17.3ZM122.999 16.3153C122.414 15.6929 122.03 14.6524 122.03 13H120.03C120.03 14.9209 120.472 16.5471 121.541 17.6847L122.999 16.3153ZM122.03 13C122.03 11.3461 122.414 10.3171 122.993 9.71021L121.546 8.32979C120.472 9.45626 120.03 11.0806 120.03 13H122.03ZM122.993 9.71048C123.565 9.1113 124.588 8.7 126.31 8.7V6.7C124.325 6.7 122.654 7.16869 121.546 8.32952L122.993 9.71048ZM126.31 8.7C128.16 8.7 129.159 8.96553 129.587 9.2727L130.752 7.6473C129.767 6.94113 128.193 6.7 126.31 6.7V8.7ZM129.587 9.2727C129.906 9.50112 130.23 10.0404 130.23 11.3H132.23C132.23 9.78622 131.847 8.43221 130.752 7.6473L129.587 9.2727ZM130.23 11.3C130.23 12.196 129.928 12.6819 129.429 12.9861L130.47 14.6939C131.678 13.9581 132.23 12.7507 132.23 11.3H130.23ZM129.433 12.9837C129.167 13.1443 128.712 13.3065 128.002 13.4233C127.304 13.5382 126.417 13.6 125.33 13.6V15.6C126.483 15.6 127.486 15.5351 128.327 15.3967C129.157 15.2602 129.892 15.0424 130.466 14.6963L129.433 12.9837ZM124.33 11.46V12.28H126.33V11.46H124.33ZM125.33 13.28H126.15V11.28H125.33V13.28ZM126.15 13.28C126.652 13.28 127.176 13.2374 127.591 13.0562L126.789 11.2238C126.799 11.2196 126.759 11.2375 126.636 11.2539C126.52 11.2696 126.36 11.28 126.15 11.28V13.28ZM127.615 13.0448C128.34 12.704 128.53 11.9928 128.53 11.44H126.53C126.53 11.5239 126.515 11.5098 126.545 11.4481C126.562 11.4142 126.589 11.3714 126.631 11.3291C126.674 11.2866 126.721 11.2556 126.764 11.2352L127.615 13.0448ZM128.53 11.44V10.62H126.53V11.44H128.53ZM127.53 9.62H126.71V11.62H127.53V9.62ZM126.71 9.62C126.193 9.62 125.657 9.67147 125.224 9.87518L126.075 11.6848C126.073 11.6861 126.116 11.6666 126.234 11.6488C126.348 11.6316 126.504 11.62 126.71 11.62V9.62ZM125.249 9.86384C124.49 10.1957 124.33 10.9476 124.33 11.46H126.33C126.33 11.3676 126.345 11.3809 126.315 11.4458C126.297 11.4825 126.267 11.5322 126.217 11.5821C126.166 11.6329 126.108 11.671 126.051 11.6962L125.249 9.86384Z" fill="white"/>
    </svg>

  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
