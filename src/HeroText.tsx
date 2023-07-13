import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart, reveal } from "./utils/animation";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
      >
        {" "}
        <Compass />
        <span className="flex items-center gap-10px">
          Delivering Educational VR Games to
        </span>
        <span>the world from NCCU（Taiwaan）</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight"
      >
        政大教育系研究團隊，誠摯邀請您遊玩有關數學的小遊戲！
        遊玩此遊戲不需註冊，除非你的老師希望你填寫，以便了解你的學習狀況。
        若不滿意或是有其他顧慮，可在遊戲中刪除帳號。
        本團隊不會儲存任何刪除後的資料！
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
