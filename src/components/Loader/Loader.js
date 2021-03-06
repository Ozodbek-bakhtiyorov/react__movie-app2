import React, {Component} from 'react';
import styled from "styled-components";

class Loader extends Component {
    render() {
        return (
            <LoaderContent>
                <div className="loadingio-spinner-double-ring-v1iab3hp4f">
                    <div className="ldio-b3n0wtq7uqi">
                        <div></div>
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </LoaderContent>
        );
    }
}
const LoaderContent = styled.div`
  position: fixed;
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%; 
  height: 100vh;
  z-index: 10000;
  background: rgba(0, 0 , 0, 0.5);
  @keyframes ldio-b3n0wtq7uqi {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .ldio-b3n0wtq7uqi div {
    box -sizing: border-box !important
  }

  .ldio-b3n0wtq7uqi > div {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 28px;
    left: 28px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #f8cdcf transparent #e1babb transparent;
    animation: ldio-b3n0wtq7uqi 1s linear infinite;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(2), .ldio-b3n0wtq7uqi > div:nth-child(4) {
    width: 108px;
    height: 108px;
    top: 46px;
    left: 46px;
    animation: ldio-b3n0wtq7uqi 1s linear infinite reverse;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(2) {
    border -color: transparent #f8b26a transparent #f8b26a
  }

  .ldio-b3n0wtq7uqi > div:nth-child(3) {
    border -color: transparent
  }

  .ldio-b3n0wtq7uqi > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .ldio-b3n0wtq7uqi > div:nth-child(3) div:before, .ldio-b3n0wtq7uqi > div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 48px;
    background: #15b7dc;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #f1a8ad;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(3) div:after {
    left: -16px;
    top: 48px;
    box-shadow: 128px 0 0 0 #e15b64;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(4) {
    border -color: transparent;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .ldio-b3n0wtq7uqi > div:nth-child(4) div:before, .ldio-b3n0wtq7uqi > div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 30px;
    background: #f8b26a;
    border-radius: 50%;
    box-shadow: 0 92px 0 0 #f8b26a;
  }

  .ldio-b3n0wtq7uqi > div:nth-child(4) div:after {
    left: -16px;
    top: 30px;
    box-shadow: 92px 0 0 0 #f8b26a;
  }

  .loadingio-spinner-double-ring-v1iab3hp4f {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }

  .ldio-b3n0wtq7uqi {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .ldio-b3n0wtq7uqi div {
    box -sizing: content-box;
  }

  /* generated by https://loading.io/ */
`
export default Loader;