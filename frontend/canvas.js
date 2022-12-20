const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

export const DoorContext = {
    context: context,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT
};