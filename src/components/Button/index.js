import React, { useState } from 'react';
import styles from './index.module.less';

function Button(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (typeof props.onClick === 'function') {
      props.onClick();
    }
  };

  return (
    <button onClick={handleClick} className={styles.btn}>{props.text}</button>
  )
}

export default React.memo(Button);
