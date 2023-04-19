
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


<style>
  .left {
    transform-origin: 50% 0;
    animation: 1.5s ease-in-out 0s 1 lineIn;
  }

  @keyframes lineIn {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0s);
    }
  }
</style>
