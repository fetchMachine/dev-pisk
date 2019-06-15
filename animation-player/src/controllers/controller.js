import startAnimation from './utils/animation/animation';
import renderViewWithRandomRect from './utils/misc/index';
import handlers from './utils/handlers/index';
import ToolsController from './toolsController/index';

class Controller {
  constructor(View, Model, size) {
    this.view = new View(size);
    this.model = new Model(size);
    this.options = {
      defaultFPS: 5,
    };
    this.state = {
      parts: size,
      rects: [],
      activeRect: null,
      activeFrame: null,
      timer: null,
      fps: this.options.defaultFPS,
      mainCanvasSize: null,
      view: this.view,
      currColor: 'red',
    };
    this.tools = new ToolsController(size, this.view, this.state);
  }

  init() {
    renderViewWithRandomRect.call(this);
    const startAnimationBinded = startAnimation.bind(this);

    this.view.components.frames.components.btn.addEventListener('click', handlers.frame.addFrame.bind(this));
    // this.view.components.frames.components.
    // frameList.addEventListener('mouseover', handlers.frame.showFramePopup);
    this.view.components.frames.components.frameList.addEventListener('click', handlers.frame.frameActions.bind(this));

    this.view.components.preview.components.range.addEventListener('input', handlers.preview.changeFPS.bind(this));
    this.view.components.preview.components.fullScreenBtn.addEventListener('click', handlers.preview.fullScreenMode.bind(this));

    this.state.rects.getNext = (function getNextWrapepr() {
      let i = 0;
      return function getNext() {
        if (i >= this.length - 1) {
          i = 0;
        } else {
          i += 1;
        }
        return this[i];
      };
    }());

    startAnimationBinded();
    const canvasSize = this.view.components.canvas.getCanvasSize();
    this.state.mainCanvasSize = canvasSize;
    this.tools.init();
  }

  setToolsState() {
    return this;
  }
}

export default Controller;
