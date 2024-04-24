export default function Wave({ flip }: { flip: boolean }) {
  return (
    <div class="w-full overflow-hidden">
      <svg
        id="visual"
        className={`fill-primary${flip ? " transform rotate-180" : ""}`}
        viewBox="0 0 1280 100"
        width="1280"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M0 83L53.3 78.2C106.7 73.3 213.3 63.7 320 53.2C426.7 42.7 533.3 31.3 640 34.8C746.7 38.3 853.3 56.7 960 64.3C1066.7 72 1173.3 69 1226.7 67.5L1280 66L1280 101L1226.7 101C1173.3 101 1066.7 101 960 101C853.3 101 746.7 101 640 101C533.3 101 426.7 101 320 101C213.3 101 106.7 101 53.3 101L0 101Z"
          stroke-linecap="round"
          stroke-linejoin="miter"
        >
        </path>
      </svg>
    </div>
  );
}
