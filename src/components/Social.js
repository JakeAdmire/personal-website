import React from "react";

import social from "../data/social.json";
import * as Icons from "./Icons";

const Social = ({ isTypingDone }) => {

    return (
        <div className={`flex ${isTypingDone ? 'opacity-100' : 'opacity-0'}`}>
            {social.map((ref, i) => {
                const Icon = Icons[ref.icon];

                return (
                    <a  key={ref.title}
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`m-1 p-3 bg-gray-300 rounded-full ${isTypingDone ? 'transition-opacity duration-300 opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: `${i * 0.5 + 1}s` }}
                        data-tip={ref.title}
                        data-place="bottom">
                        <Icon />
                    </a>
                );
            })}
        </div>
    );
}

export default Social;
