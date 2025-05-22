import React from "react";
import { IStyle } from "../../types";
import CountUp from "react-countup";

interface IAmountProps {
  styles: IStyle;
}

const Amount: React.FC<IAmountProps> = ({ styles }) => {
  return (
    <div className={styles.counts}>
        <div className={styles.count}>
            <CountUp
                start={0}
                end={370}
                duration={1}
                useEasing={true}
            />
        </div>
        <div className={styles.count}>
            <CountUp
                start={0}
                end={7}
                duration={4}
                useEasing={true}
            />k
        </div>
        <div className={styles.count}>
            <CountUp
                start={0}
                end={25}
                duration={3}
                useEasing={true}
            />+
        </div>
    </div>
  );
};

export default Amount;