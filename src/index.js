import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "react-collapsible";

import "./main.scss";

const triggerSiblingExample = () => (
  <div className="Collapsible__custom-sibling">
    This is a sibling to the trigger which wont cause the Collapsible to open!
  </div>
);

const App = () => {
  return (
    <div>
      <Collapsible tabIndex={0} trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible transitionTime={400} trigger="Then try this one">
        <p>Would you look at that!</p>
        <p>See; you can nest as many Collapsible components as you like.</p>

        <Collapsible trigger="Mmmmm, it's all cosy nested here">
          <p>
            And there's no limit to how many levels deep you go. Or how many you
            have on the same level.
          </p>

          <Collapsible trigger="This is just another Collapsible">
            <p>
              It just keeps going and going! Well, actually we've stopped here.
              But that's only because I'm running out of things to type.
            </p>
          </Collapsible>
          <Collapsible trigger="But this one is open by default!" open={true}>
            <p>
              And would you look at that! This one is open by default. Sexy
              huh!?
            </p>
            <p>
              You can pass the prop of open=&#123;true&#125; which will make the
              Collapsible open by default.
            </p>
          </Collapsible>
          <Collapsible
            trigger="That's not all. Check out the speed of this one"
            transitionTime={100}
          >
            <p>Whoosh! That was fast right?</p>
            <p>
              You can control the time it takes to animate (transition) by
              passing the prop transitionTime a value in milliseconds. This one
              was set to transitionTime=&#123;100&#125;
            </p>
          </Collapsible>
        </Collapsible>
      </Collapsible>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
