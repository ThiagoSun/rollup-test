import React, { useState } from 'react';

var styles = {"btn":"index-module_btn__1rK5U"};

function Button(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    if (typeof props.onClick === 'function') {
      props.onClick();
    }
  };

  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    className: styles.btn
  }, props.text);
}

var index = /*#__PURE__*/React.memo(Button);

export default index;
