<!-- <svg
  width="25rem"
  height="0.25rem"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <linearGradient id="three_opacity_stops">
      <stop offset="0%" style="stop-color: #906; stop-opacity: 1.0" />
      <stop offset="50%" style="stop-color: #906; stop-opacity: 0.3" />
      <stop offset="100%" style="stop-color: #906; stop-opacity: 0.10" />
    </linearGradient>
  </defs>

  <rect
    x="20"
    y="20"
    width="200"
    height="100"
    style="fill: url(#three_opacity_stops); "
  />
</svg> -->
<svg width="400" height="1" class="left">
  <defs>
    <linearGradient id="three_opacity_stops">
      <stop offset="0" style="stop-color: #000000; stop-opacity: 0" />
      <stop offset="50%" style="stop-color: #000000; stop-opacity: 1.0" />
      <stop offset="100%" style="stop-color: #000000; stop-opacity: 0" />
    </linearGradient>
  </defs>
  <rect width="400" height="1" style="fill:url(#three_opacity_stops);" />
</svg>

<!-- <svg width="200" height="1" class="right">
  <defs>
    <linearGradient id="three_opacity_stops">
      <stop offset="0%" style="stop-color: #000000; stop-opacity: 1.0" />
      <stop offset="50%" style="stop-color: #000000; stop-opacity: 0.3" />
      <stop offset="100%" style="stop-color: #000000; stop-opacity: 0" />
    </linearGradient>
  </defs>
  <rect width="200" height="1" style="fill:url(#three_opacity_stops);" />
</svg> -->

<style>
  /* .right {
    transform-origin: 0 50%;
    animation: 2s ease-in-out 0s 1 rightIn;
  } */

  .left {
    transform-origin: 50% 0;
    animation: 1.5s ease-in-out 0s 1 leftIn;
  }

  /* @keyframes rightIn {
    0% {
      transform: rotateY(-90deg);
    }
    100% {
      transform: rotateY(0);
    }
  } */

  @keyframes leftIn {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0s);
    }
  }
</style>
