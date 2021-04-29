import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useCanvas from "../hooks/useCanvas";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import { setGameStarted } from "../store/slices/projects";

const Canvas = ({ draw, canvasRef, ...props }) => {
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width;
  var display = containerSize.display;
  var margin = config[display].margin;
  var gridHeight = config[display].grid.height;

  return (
    <canvas
      ref={canvasRef}
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${colors.eletricLime};
        margin: ${margin}px;
        border-radius: ${config[display].borderRadius}px;
        width: calc(100% - ${margin * 2}px);
        height: ${gridHeight * containerSize.width - margin * 2}px;

        @media screen and (min-width: 991px) {
          width: ${width * 0.49 - margin}px;
          height: ${gridHeight * (width * 0.6)}px;
        }
      `}
      {...props}
    />
  );
};

var initialState = {
  snake: [
    [9, 8],
    [9, 9],
    [9, 10],
    [10, 10],
    [11, 10],
    [12, 10],
    [13, 10],
  ],
  food: [20, 10],
  direction: "ArrowRight",
};

var snake = [...initialState.snake];

var gameOver = [
  [8, 6],
  [9, 6],
  [10, 6],
  [12, 6],
  [13, 6],
  [14, 6],
  [16, 6],
  [17, 6],
  [18, 6],
  [19, 6],
  [20, 6],
  [22, 6],
  [23, 6],
  [24, 6],
  [8, 7],
  [12, 7],
  [14, 7],
  [16, 7],
  [18, 7],
  [20, 7],
  [22, 7],
  [8, 8],
  [10, 8],
  [12, 8],
  [13, 8],
  [14, 8],
  [16, 8],
  [18, 8],
  [20, 8],
  [22, 8],
  [23, 8],
  [24, 8],
  [8, 9],
  [10, 9],
  [12, 9],
  [14, 9],
  [16, 9],
  [18, 9],
  [20, 9],
  [22, 9],
  [8, 10],
  [9, 10],
  [10, 10],
  [12, 10],
  [14, 10],
  [16, 10],
  [18, 10],
  [20, 10],
  [22, 10],
  [23, 10],
  [24, 10],
  [9, 12],
  [10, 12],
  [11, 12],
  [13, 12],
  [15, 12],
  [17, 12],
  [18, 12],
  [19, 12],
  [21, 12],
  [22, 12],
  [23, 12],
  [9, 13],
  [11, 13],
  [13, 13],
  [15, 13],
  [17, 13],
  [21, 13],
  [23, 13],
  [9, 14],
  [11, 14],
  [13, 14],
  [15, 14],
  [17, 14],
  [18, 14],
  [19, 14],
  [21, 14],
  [22, 14],
  [9, 15],
  [11, 15],
  [13, 15],
  [15, 15],
  [17, 15],
  [21, 15],
  [23, 15],
  [9, 16],
  [10, 16],
  [11, 16],
  [14, 16],
  [17, 16],
  [18, 16],
  [19, 16],
  [21, 16],
  [23, 16],
];

var score = 0;
var isGameOver = false;
var grid = [31, 21];
var food = [...initialState.food];
var direction = initialState.direction;
var moviment = {
  ArrowUp: (head) => {
    return [head[0], head[1] < 1 ? grid[1] : head[1] - 1];
  },
  ArrowDown: (head) => {
    return [head[0], head[1] == grid[1] ? 0 : head[1] + 1];
  },
  ArrowLeft: (head) => {
    return [head[0] < 1 ? grid[0] : head[0] - 1, head[1]];
  },
  ArrowRight: (head) => {
    return [head[0] == grid[0] ? 0 : head[0] + 1, head[1]];
  },
};

var isSnakeBody = (pos) => {
  // Validate new pos using snake pos
  for (var i = 0; i < snake.length; i++) {
    if (arraysMatch(pos, snake[i])) return true;
  }
  return false;
};
var generateFoodPos = () => {
  let newPos = [randomInt(0, grid[0]), randomInt(0, grid[1])];

  // Validate new pos using snake pos
  if (isSnakeBody(newPos)) return generateFoodPos();

  return newPos;
};

var Snake = ({ containerSize }) => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((store) => store.projects.isGameStarted);

  const renderFrame = (ctx) => {
    let unit = {
      x: ctx.canvas.width / (grid[0] + 1),
      y: ctx.canvas.height / (grid[1] + 1),
    };

    // Paint square
    const square = (x, y) => {
      ctx.fillStyle = "#222428";
      ctx.fillRect(unit.x * x, unit.y * y, unit.x + 1, unit.y + 1);
      ctx.fill();
    };

    // Clear frame
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Snake
    for (var i = 0; i < snake.length; i++) {
      square(snake[i][0], snake[i][1]);
    }

    // Food
    square(...food);
  };

  const draw = (ctx, frameCount) => {
    let snakeHead = () => snake[snake.length - 1];
    if (
      isGameStarted &&
      !isGameOver &&
      isSnakeBody(moviment[direction](snakeHead()))
    ) {
      isGameOver = true;
      window.gameOverTimer = setTimeout(() => onClickHandler(), 2000);
      // Enable scroll
      setScroll(true);
    }
    if (frameCount % 5 == 0 && isGameStarted && !isGameOver) {
      // Walk
      snake.push(moviment[direction](snakeHead()));
      snake.shift();

      // Check if encounter food
      if (arraysMatch(snakeHead(), food)) {
        // Generate new food
        food = generateFoodPos();

        // Score up
        score += 100;

        // Grow
        snake.unshift([snake[0][0], snake[0][1]]);
      }

      // Render frame
      renderFrame(ctx);
    }
    if (isGameOver && frameCount % 5 == 0) {
      snake = [...gameOver];
      food = [-1, -1];
      // Render frame
      renderFrame(ctx);
    }
  };

  var containerSize = useSelector((state) => state.container);
  var display = containerSize.display;
  var gridHeight = config[display].grid.height;

  const canvasRef = useCanvas(draw);
  function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = gridHeight * containerSize.width;
      return true; // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false;
  }

  useEffect(() => {
    if (containerSize.width) {
      resizeCanvasToDisplaySize(canvasRef.current);
      renderFrame(canvasRef.current.getContext("2d"));
    }
  }, [containerSize]);

  const setScroll = (isActive) => {
    var scrollbar = document.querySelector("#root > .scrollbar-container");
    scrollbar.style.scrollBehavior = isActive ? "initial" : "smooth";
  };

  useEffect(() => {
    if (isGameStarted) {
      var keydownHandler = (e) => {
        if (isGameStarted) {
          // Moviment
          let isMovimentKey = Object.keys(moviment).includes(e.key);
          if (isMovimentKey) {
            e.preventDefault();

            if (e.key == "ArrowUp" && direction == "ArrowDown") return false;
            if (e.key == "ArrowDown" && direction == "ArrowUp") return false;
            if (e.key == "ArrowLeft" && direction == "ArrowRight") return false;
            if (e.key == "ArrowRight" && direction == "ArrowLeft") return false;

            direction = e.key;
          }
        }

        // Disable scroll if not escape
        if (e.key == "Escape") {
        }
      };
      var wheelHandler = (e) => {
        e.preventDefault();
      };
      document.addEventListener("keydown", keydownHandler);
      document.addEventListener("wheel", wheelHandler, { passive: false });
    }
    // Game ended
    return () => {
      if (isGameStarted) {
        document.removeEventListener("keydown", keydownHandler);
      }
    };
  }, [isGameStarted]);

  const onClickHandler = (e) => {
    if (!isGameStarted) {
      direction = initialState.direction;
      dispatch(setGameStarted(true));
    }

    if (isGameOver) {
      dispatch(setGameStarted(false));
      isGameOver = false;
      snake = [...initialState.snake];
      food = [...initialState.food];
      renderFrame(canvasRef.current.getContext("2d"));
    }
  };

  return <Canvas canvasRef={canvasRef} onClick={onClickHandler} />;
};

function arraysMatch(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  // Otherwise, return true
  return true;
}

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Snake;
