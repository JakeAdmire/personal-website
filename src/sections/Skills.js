import React from "react";

import * as Icons from "../components/Icons";
import skills from "../data/skills";
import Header from "../components/Header";


const Skills = () => {
    const renderSkill = skill => {
        const Icon = Icons[skill.icon];

        return (
            <div className="m-auto">
                <div    className="flex items-center border rounded-lg py-1 pr-4 cursor-default transition duration-300 ease hover:bg-gray-100"
                        style={{ width: '20rem' }}
                        id="skill-card">
                    <span className="text-2xl px-4">
                        <Icon />
                    </span>
                    <span>
                        <p>{skill.title}</p>
                        <p className="opacity-50 text-sm">({skill.related})</p>
                    </span>
                </div>
            </div>
        );
    }

    return (
        <span>
            <Header iconName="FaPencilAlt" text="skills" />
            <section    className="grid row-gap-3 col-gap-1"
                        style={{ gridTemplateColumns: 'repeat(4, minmax(320px, 1fr))' }}>
                {skills.map(skill => renderSkill(skill))}
            </section>
        </span>
    );
}

export default Skills
