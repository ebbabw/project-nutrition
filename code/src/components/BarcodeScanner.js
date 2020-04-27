import React, { useRef, useState, useLayoutEffect } from "react"
import Quagga from "quagga"
import styled from 'styled-components/macro'

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code);
  });

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <>
      {initializing &&
        <div>Starting camera...</div>
      }
      <Video ref={cameraDivRef} className={className} />
    </>
  );
};

const Video = styled.div`
width: 600px;
height: 350px;
border-radius: 10px;
overflow: hidden;
margin: 50px;
@media(max-width: 449px) {
  width: 350px;
  height: 250px;
}
@media(min-width: 450px) and(max-width: 750px) {
  width: 350px;
  height: 250px;
}
`
