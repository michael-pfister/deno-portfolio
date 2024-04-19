import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm">
        <h1 class="text-4xl font-bold">
          <TypingAnimation
            strings={[
              "Hello, World!",
              "I'm a developer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I build web applications and websites using modern technologies.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
