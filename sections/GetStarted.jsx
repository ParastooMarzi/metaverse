// pages/GetStarted.js
import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import GanttChart from '../starter_repo/components/GanttChart';


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
        style={{ direction: "rtl" }}
      >
        <TypingText title="| مدت زمان اجرا " />
        <TitleText title={<>با توجه به فازهایی که در بالا به آن اشاره شد این پروژه به حداقل 8 الی 10 ماه زمان نیاز دارد </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={` ${index + 1} ${index < 10 ? '0' : ''}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
    <GanttChart />
  </section>
);

export default GetStarted;
