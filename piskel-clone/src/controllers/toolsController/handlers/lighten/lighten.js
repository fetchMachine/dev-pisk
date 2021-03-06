import hexToHsl from 'hex-to-hsl';
import hslToHex from 'hsl-to-hex';
import Handler from '../../Handler/index';

function getLightenHandler({ canvas, convetCoordsToCanvasRect, globalState }) {
  function onClick(clickEvt) {
    if (clickEvt.button === 1) {
      return;
    }
    const canvasCoords = {
      x: canvas.getBoundingClientRect().left,
      y: canvas.getBoundingClientRect().top,
      xEnd: canvas.getBoundingClientRect().right,
      yEnd: canvas.getBoundingClientRect().bottom,
    };

    const downCoords = {
      x: Math.min(Math.max(0, clickEvt.clientX - canvasCoords.x), canvasCoords.xEnd),
      y: Math.min(Math.max(0, clickEvt.clientY - canvasCoords.y), canvasCoords.yEnd),
    };

    const [i, j] = convetCoordsToCanvasRect(downCoords,
      globalState.mainCanvasSize, globalState.parts);

    const EMPTY_COLOR = 'rgba(0, 0, 0, 0)';
    if (globalState.activeRect[i][j] === EMPTY_COLOR) {
      return;
    }
    const color = hexToHsl(globalState.activeRect[i][j]);
    if (clickEvt.shiftKey) {
      color[2] = Math.max(0, color[2] - 10);
    } else {
      color[2] = Math.min(100, color[2] + 10);
    }
    // eslint-disable-next-line no-param-reassign
    globalState.activeRect[i][j] = hslToHex(...color);
    globalState.view.paintImage(globalState.activeRect);
    globalState.activeFrame.paintState();
  }

  const lightenHandler = new Handler(canvas, 'mouseup', onClick);
  return lightenHandler;
}

export default getLightenHandler;
