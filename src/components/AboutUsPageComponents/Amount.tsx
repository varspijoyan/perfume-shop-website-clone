import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { IStyle } from "../../types";

interface IAmountProps {
  styles: IStyle;
}

const Amount: React.FC<IAmountProps> = ({ styles }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className={styles.counts} ref={ref}>
      {inView && (
        <>
          <div className={styles.count}>
            <CountUp start={0} end={370} duration={1} useEasing={true} />
          </div>
          <div className={styles.count}>
            <CountUp start={0} end={7} duration={4} useEasing={true} />k
          </div>
          <div className={styles.count}>
            <CountUp start={0} end={25} duration={3} useEasing={true} />+
          </div>
        </>
      )}
    </div>
  );
};

export default Amount;
