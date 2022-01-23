import { Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const variants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 5,
            delay: 2,
            ease: 'easeInOut'
        }
    }
}

const SVG = () => {
    return (
        <svg width="100vw" height="100vh" viewBox="0 0 950 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M0.600001 2.99999H46.6C63.9333 2.99999 76.6 7.13333 84.6 15.4C92.6 23.6667 96.6 36.8667 96.6 55V91C96.6 109.133 92.6 122.333 84.6 130.6C76.6 138.867 63.9333 143 46.6 143H0.600001V127.2H12.6V18.6H0.600001V2.99999ZM44.2 127.4C50.3333 127.4 55.6 126.8 60 125.6C64.5333 124.4 68.2667 122.4 71.2 119.6C74.1333 116.667 76.2667 112.8 77.6 108C79.0667 103.2 79.8 97.1333 79.8 89.8V56.2C79.8 48.8667 79.0667 42.8 77.6 38C76.2667 33.2 74.1333 29.4 71.2 26.6C68.2667 23.6667 64.5333 21.6 60 20.4C55.6 19.2 50.3333 18.6 44.2 18.6H29.4V127.4H44.2ZM137.261 98.2C137.661 108.067 140.728 116 146.461 122C152.194 128 160.194 131 170.461 131C175.128 131 179.194 130.467 182.661 129.4C186.128 128.333 189.061 126.867 191.461 125C193.994 123.133 195.994 121 197.461 118.6C199.061 116.067 200.328 113.4 201.261 110.6L216.061 114.6C213.261 123.8 208.061 131.333 200.461 137.2C192.994 142.933 182.861 145.8 170.061 145.8C162.994 145.8 156.461 144.6 150.461 142.2C144.594 139.667 139.528 136.133 135.261 131.6C130.994 127.067 127.661 121.667 125.261 115.4C122.861 109.133 121.661 102.2 121.661 94.6V89.8C121.661 82.8667 122.861 76.4 125.261 70.4C127.794 64.4 131.261 59.2667 135.661 55C140.061 50.6 145.194 47.2 151.061 44.8C157.061 42.2667 163.528 41 170.461 41C178.594 41 185.594 42.5333 191.461 45.6C197.461 48.5333 202.328 52.2 206.061 56.6C209.928 61 212.728 65.8 214.461 71C216.328 76.2 217.261 81 217.261 85.4V98.2H137.261ZM170.461 55.8C166.061 55.8 161.928 56.5333 158.061 58C154.328 59.3333 150.994 61.2667 148.061 63.8C145.261 66.3333 142.928 69.3333 141.061 72.8C139.328 76.1333 138.194 79.8 137.661 83.8H201.661C201.394 79.5333 200.328 75.6667 198.461 72.2C196.728 68.7333 194.394 65.8 191.461 63.4C188.661 61 185.394 59.1333 181.661 57.8C178.061 56.4667 174.328 55.8 170.461 55.8ZM307.322 143H276.522L241.922 43.8H260.322L290.722 135.8H293.122L323.522 43.8H341.922L307.322 143ZM447.583 43.4C447.583 38.8667 446.649 34.8667 444.783 31.4C443.049 27.9333 440.649 25.0667 437.583 22.8C434.516 20.5333 430.983 18.8 426.983 17.6C422.983 16.4 418.783 15.8 414.383 15.8C410.516 15.8 406.849 16.3333 403.383 17.4C399.916 18.3333 396.783 19.7333 393.983 21.6C391.316 23.4667 389.183 25.8 387.583 28.6C385.983 31.2667 385.183 34.4 385.183 38V39.2C385.183 43.0667 385.983 46.4 387.583 49.2C389.183 51.8667 391.516 54.2 394.583 56.2C397.783 58.0667 401.716 59.6667 406.383 61C411.049 62.2 416.516 63.2667 422.783 64.2C437.449 66.4667 448.249 70.8 455.183 77.2C462.116 83.4667 465.583 91.9333 465.583 102.6V105C465.583 111 464.516 116.533 462.383 121.6C460.383 126.533 457.316 130.8 453.183 134.4C449.183 138 444.183 140.8 438.183 142.8C432.183 144.8 425.249 145.8 417.383 145.8C408.449 145.8 400.516 144.533 393.583 142C386.783 139.333 381.049 135.733 376.383 131.2C371.849 126.533 368.383 121.133 365.983 115C363.583 108.733 362.383 101.933 362.383 94.6V88.6H379.183V93.4C379.183 105.667 382.516 114.867 389.183 121C395.983 127.133 405.383 130.2 417.383 130.2C427.783 130.2 435.583 127.933 440.783 123.4C446.116 118.733 448.783 112.6 448.783 105V103.8C448.783 96.4667 446.049 90.8667 440.583 87C435.249 83.1333 426.516 80.3333 414.383 78.6C407.316 77.6667 400.916 76.2667 395.183 74.4C389.583 72.4 384.783 69.8667 380.783 66.8C376.783 63.6 373.716 59.8 371.583 55.4C369.449 51 368.383 45.8 368.383 39.8V37.4C368.383 31.9333 369.516 26.9333 371.783 22.4C374.049 17.8667 377.183 13.9333 381.183 10.6C385.316 7.26666 390.183 4.73333 395.783 2.99999C401.516 1.13332 407.783 0.199991 414.583 0.199991C422.449 0.199991 429.449 1.33333 435.583 3.59999C441.849 5.86666 447.116 8.93333 451.383 12.8C455.649 16.5333 458.849 21 460.983 26.2C463.249 31.2667 464.383 36.6 464.383 42.2V50.6H447.583V43.4ZM489.844 43.8H521.044V2.99999H536.644V43.8H575.044V58.2H536.644V122.6C536.644 126.6 538.444 128.6 542.044 128.6H570.244V143H536.444C531.91 143 528.177 141.533 525.244 138.6C522.444 135.667 521.044 131.933 521.044 127.4V58.2H489.844V43.8ZM686.505 43.8H702.105V143H686.505V125H684.105C680.905 131.4 676.705 136.467 671.505 140.2C666.305 143.933 659.705 145.8 651.705 145.8C646.238 145.8 641.171 144.867 636.505 143C631.971 141.267 628.038 138.6 624.705 135C621.505 131.4 618.971 126.933 617.105 121.6C615.371 116.267 614.505 110.067 614.505 103V43.8H630.105V101C630.105 111.4 632.238 119 636.505 123.8C640.771 128.6 647.305 131 656.105 131C665.571 131 672.971 127.8 678.305 121.4C683.771 114.867 686.505 106.2 686.505 95.4V43.8ZM737.166 43.8H767.766V18.6C767.766 14.0667 769.166 10.3333 771.966 7.39999C774.899 4.46666 778.632 2.99999 783.166 2.99999H822.366V17.4H788.766C785.166 17.4 783.366 19.4 783.366 23.4V43.8H824.766V58.2H783.366V143H767.766V58.2H737.166V43.8ZM859.627 43.8H890.227V18.6C890.227 14.0667 891.627 10.3333 894.427 7.39999C897.36 4.46666 901.093 2.99999 905.627 2.99999H944.827V17.4H911.227C907.627 17.4 905.827 19.4 905.827 23.4V43.8H947.227V58.2H905.827V143H890.227V58.2H859.627V43.8Z" fill="transparent" strokeWidth={2} stroke={'white'} animate={{ pathLength: [0, 0.5, 1, 1], scale: [0.75, 0.75, 0.75, 2.5], opacity: [1, 1, 1, 0] }} transition={{ times: [0.1, 0.8, 0.8, 0.99], duration: 5 }} />
        </svg>
    )
}
    
function Loader() {
    return (
        <Center height={'100vh'} width={"100%"}>
            <SVG />
        </Center>
    )
}

export default Loader