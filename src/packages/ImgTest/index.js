import React from 'react';
import maoImg from '../../assets/images/18442221.jpeg'
import img1 from '../../assets/images/8694a4c27d1ed21bcf007ab8b34a4ec250da3f48.png';
import img2 from '../../assets/images/defultHead.svg';
import './index.less';

export default class ImgTest extends React.Component {
  render() {
    return (
      <img src={maoImg} className='mao-img' />
    )
  }
}

