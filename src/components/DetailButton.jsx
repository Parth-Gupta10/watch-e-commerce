import React from 'react';

const DetailButton = (props) => {
  return (
    <button className={"btn " + props.btnClass} disabled={props.disabled}>
      {props.btnTxt}
    </button>
  )
}

export default DetailButton;
