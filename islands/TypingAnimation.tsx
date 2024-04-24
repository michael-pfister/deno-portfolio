import { Component } from "preact";
import Typewriter from "npm:typewriter-effect/dist/core.js";

interface TypingAnimationProps {
  strings: string[];
  autoStart: boolean;
}

export default class TypingAnimation extends Component<TypingAnimationProps> {
  constructor(props: TypingAnimationProps) {
    super(props);
  }

  componentDidMount() {
    new Typewriter("#typewriter", {
      strings: this.props.strings,
      autoStart: this.props.autoStart,
      loop: true,
    });
  }

  render() {
    return <div id="typewriter" />;
  }
}
