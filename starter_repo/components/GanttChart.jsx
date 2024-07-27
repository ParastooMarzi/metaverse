// components/GanttChart.js
import { motion } from 'framer-motion';
import styles from './GanttChart.module.css';

const phases = [
  {
    name: "فاز اول : این مراحل به صورت همزمان انجام می شوند",
    steps: [
      "ماه اول: تحلیل فرآیندها، معماری اطلاعات، ساخت پرسونا، ساخت دیزاین سیستم اولیه",
      "ماه اول و دوم: طراحی وایرفریم و رابط کاربری صفحات عمودی",
      "ماه دوم و سوم: پیاده‌سازی فرانت‌اند، بک‌اند، پایگاه‌های داده، پنل مدیریت، تست صفحات",
    ],
    duration: [2, 2, 2],
  },
  {
    name: "فاز دوم",
    steps: [
      "ماه اول و دوم: تحلیل، بررسی رقبا، وایرفریم، طراحی رابط کاربری",
      "ماه سوم و چهارم: پیاده‌سازی بک‌اند، فرانت‌اند، APIها، جمع‌بندی و تست، پابلیش",
    ],
    duration: [2, 2],
  },
  {
    name: "فاز سوم",
    steps: [
        "ماه اول و دوم: تحلیل، بررسی رقبا، وایرفریم، طراحی رابط کاربری",
        "ماه سوم و چهارم: پیاده‌سازی بک‌اند، فرانت‌اند، APIها، جمع‌بندی و تست، پابلیش",
    ],
    duration: [2, 2],
  },
  {
    name: "پشتیبانی و نگهداری",
    steps: ["پشتیبانی 6 ماهه پس از تحویل پروژه شامل رفع مشکلات و به‌روزرسانی‌های مورد نیاز | ارائه مستندات کامل فنی برای تسهیل در نگهداری و توسعه بعدی"],
    duration: [6],
  },
];

const colors = ["#ff00261e", "#0079372c", "#ffe6002a", "#00ffdd2c"];

const GanttChart = () => {
  const totalMonths = phases.reduce((sum, phase) => sum + phase.duration.reduce((a, b) => a + b, 0), 0);

  return (
    <div className={styles.ganttChartContainer}>
      {phases.map((phase, phaseIndex) => (
        <div key={phaseIndex} className={styles.phase}>
          <div className={styles.phaseName} style={{ borderColor: colors[phaseIndex % colors.length] }}>
            {phase.name}
          </div>
          <div className={styles.stepsContainer}>
            {phase.steps.map((step, stepIndex) => {
              const stepDuration = phase.duration[stepIndex];
              return (
                <motion.div
                  key={stepIndex}
                  className={styles.step}
                  style={{
                    flex: stepDuration,
                    backgroundColor: colors[phaseIndex % colors.length],
                    width: `${(stepDuration / totalMonths) * 100}%`
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(stepDuration / totalMonths) * 100}%` }}
                  transition={{ duration: 0.5, delay: phaseIndex + stepIndex * 0.5 }}
                >
                  <span className={styles.stepName}>{step}</span>
                  <span className={styles.stepDuration}>{stepDuration} ماه</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GanttChart;
