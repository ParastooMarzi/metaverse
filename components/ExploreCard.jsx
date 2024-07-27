'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, desc, content, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11 }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-vazirmatn font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
      style={{background:"rgba(0,0,0,0.5)", border: "1px solid black", borderRadius:"15px", padding:"1rem", direction:"rtl"}}
 >
      {title}
  </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-center w-full h-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]" style={{ direction: 'rtl' }}>
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2"
          />
        </div>
        <h2 className=" font-seibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className=" font-normal text-[20px] leading-[20.20px] text-white ">{desc}</p>
        <p className=" font-normal text-[20px] text-white">{content}</p>
        
        <p className=" font-normal text-[20px] text-white">{content2}</p>
        
        <p className=" font-normal text-[20px] text-white">{content3}</p>
        
        <p className=" font-normal text-[20px] text-white">{content4}</p>
        
        <p className=" font-normal text-[20px] text-white">{content5}</p>
        <p className=" font-normal text-[20px] text-white">{content6}</p>
        <p className=" font-normal text-[20px] text-white">{content7}</p>
        <p className=" font-normal text-[20px] text-white">{content8}</p>
        <p className=" font-normal text-[20px] text-white">{content9}</p>
        <p className=" font-normal text-[20px] text-white">{content10}</p>
        <p className=" font-normal text-[20px] text-white">{content11}</p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
