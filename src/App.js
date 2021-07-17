import { useState, useEffect, useRef } from 'react';
import Electric from './Components/Bots/Electric';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import robotsList from './Components/Bots/index';

const getBotId = () => {
  const robotId = Math.floor(Math.random() * robotsList.length);
  const randomRobot = robotsList[robotId];
  const gemId = Math.floor(Math.random() * randomRobot.gem.length);
  const gemHolderId = Math.floor(Math.random() * randomRobot.gemHolder.length);
  const eyeId = Math.floor(Math.random() * randomRobot.eye.length);
  const headId = Math.floor(Math.random() * randomRobot.head.length);
  const leftHandId = Math.floor(Math.random() * randomRobot.leftHand.length);
  const rightHandId = Math.floor(Math.random() * randomRobot.rightHand.length);
  const topId = Math.floor(Math.random() * randomRobot.top.length);
  const lowerBottomId = Math.floor(
    Math.random() * randomRobot.lowerBottom.length
  );
  const lowerBodyId = Math.floor(Math.random() * randomRobot.lowerBody.length);
  const feetId = Math.floor(Math.random() * randomRobot.feet.length);
  const gemSeedId = Math.floor(Math.random() * randomRobot.gemSeed.length);

  return {
    type: randomRobot.type,
    robotId,
    gemId,
    gemHolderId,
    eyeId,
    headId,
    leftHandId,
    rightHandId,
    topId,
    lowerBottomId,
    lowerBodyId,
    feetId,
    gemSeedId,
  };
};

// const generatedBotId = getBotId();

// const randomRobot = robotsList[generatedBotId.robotId];

const Robot = styled.div`
  position: relative;
  width: 16vw;
  height: 20vw;
  max-width: 150px;
  max-height: 210px;
`;

const Eye = styled(SVG)`
  position: absolute;
  height: 35%;
  z-index: 2;
  width: 35%;
  left: 17%;
  top: 8%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
  z-index: 14;
`;
const RightHand = styled(SVG)`
  z-index: 10;
  position: absolute;
  height: 50%;
  width: 50%;
  left: 47%;
  top: 20%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
const Head = styled(SVG)`
  height: 100%;
  position: absolute;
  left: 0%;
  top: -27%;
  width: 60%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
  z-index: 13;
`;
const LeftHand = styled(SVG)`
  z-index: 13;
  position: absolute;
  height: 35%;
  width: 21%;
  left: -8%;
  top: 35%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
const Top = styled(SVG)`
  z-index: 12;
  position: absolute;
  top: 19%;
  width: 70%;
  height: 50%;
  left: -5%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
const LowerBottom = styled(SVG)`
  position: absolute;
  top: 42%;
  width: 50%;
  height: 50%;
  z-index: 10;
  left: 5%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
const LowerBody = styled(SVG)`
  position: absolute;
  z-index: 10;
  top: 31%;
  width: 40%;
  height: 50%;
  left: 10%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
const Feet = styled(SVG)`
  position: absolute;
  top: 69%;
  width: 50%;
  height: 50%;
  left: 5%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;

const getPlantTypeGlowLight = (num) => {
  let color = {
    light: 'rgba(208, 252, 255, 0.25)',
    dark: 'rgba(208, 252, 255, 0.8)',
  };
  // eslint-disable-next-line default-case
  switch (num) {
    case 0:
      color = {
        light: 'rgba(208, 252, 255, 0.25)',
        dark: 'rgba(208, 252, 255, 0.8)',
      };
      break;
    case 1:
      color = {
        light: 'rgba(217, 194, 74, 0.25)',
        dark: 'rgba(217, 194, 74, 0.8)',
      };
      break;
    case 2:
      color = {
        light: 'rgba(102, 204, 0, 0.2)',
        dark: 'rgba(102, 204, 0, 0.8)',
      };
      break;
    case 3:
      color = {
        light: 'rgba(203, 80, 41, 0.3)',
        dark: 'rgba(203, 80, 41, 0.8)',
      };
      break;
    case 4:
      color = {
        light: 'rgba(41, 125, 203, 0.25)',
        dark: 'rgba(41, 125, 203, 0.8)',
      };
      break;
  }

  return color;
};

const Light = styled.div`
  background: ${getPlantTypeGlowLight((bot) => bot).light};
  display: block;
  z-index: -1;
  width: 100%;
  height: 85%;
  border-radius: 50%;
  position: relative;
  left: -20%;
`;

function App() {
  return (
    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
      {[...Array(100).keys()].map((x) => {
        const generatedBotId = getBotId();

        const randomRobot = robotsList[generatedBotId.robotId];
        return (
          <Robot>
            <Light bot={Math.random() * robotsList.length} />
            <Eye src={randomRobot.eye[generatedBotId.eyeId]} />
            <Head src={randomRobot.head[generatedBotId.headId]} />
            {/* <RightHand
              src={randomRobot.rightHand[generatedBotId.rightHandId]}
            /> */}
            {/* <LeftHand src={randomRobot.leftHand[generatedBotId.leftHandId]} /> */}
            <Top src={randomRobot.top[generatedBotId.topId]} />
            <LowerBottom
              src={randomRobot.lowerBottom[generatedBotId.lowerBottomId]}
            />
            <LowerBody
              src={randomRobot.lowerBody[generatedBotId.lowerBodyId]}
            />
            {/* <Feet src={randomRobot.feet[generatedBotId.feetId]} /> */}
          </Robot>
        );
      })}
    </div>
  );
}

// function App() {
//   const generatedRobotId = getBotId();
//   const randomRobot = robotsList[generatedRobotId.robotId];

//   const StyledSVG = styled(SVG)``;
//   const color = '#707bff';
//   return (
//     <div>
//       <Robot>
//         <StyledSVG src={randomRobot.eye[generatedRobotId.eyeId]} />
//         <StyledSVG
//           color={color}
//           src={randomRobot.rightHand[generatedRobotId.rightHandId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.head[generatedRobotId.headId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.leftHand[generatedRobotId.leftHandId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.top[generatedRobotId.topId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.lowerBottom[generatedRobotId.lowerBottomId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.lowerBody[generatedRobotId.lowerBodyId]}
//         />
//         <StyledSVG
//           color={color}
//           src={randomRobot.feet[generatedRobotId.feetId]}
//         />
//       </Robot>
//     </div>
//   );
// }

export default App;
