import React, { useState } from "react";
import Typist from "react-typist";

import Social from "../components/Social";

const Hero = () => {
    const [isTypingDone, setTypingStatus] = useState(false);

    return (
        <header>
            <Typist cursor={{ show: false }}
                    avgTypingDelay={60}
                    onTypingDone={() => setTypingStatus(true)}
                    className="h-56 my-3">
                <h2 className="text-5xl">Hey there!</h2>
                <Typist.Delay ms={300} />
                <h1 className="text-6xl font-medium">I'm Jake Admire,</h1>
                <Typist.Delay ms={300} />
                <h3 className="text-5xl">UI Developer</h3>
                <Typist.Delay ms={300} />
            </Typist>
            <p className={`transition ${isTypingDone ? 'opacity-50 duration-1000' : 'opacity-0'}`}>
                Front-End Developer / UI Designer
            </p>
            <Social isTypingDone={isTypingDone} />
        </header>
    );
}

export default Hero;
