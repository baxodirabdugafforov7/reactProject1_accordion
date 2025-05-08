import { useState } from 'react';

function AccordionItem({ title, content, image }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button onClick={() => setIsOpen(!isOpen)} className="accordion-button">
                <span>{title}</span>
                <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>
            <div
                className={`accordion-content-wrapper ${isOpen ? 'open' : ''}`}
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <div className="accordion-content">
                    <p>{content}</p>
                    <img src={image} alt={title} className="accordion-image" />
                </div>
            </div>
        </div>
    );
}

export default function Accordion() {
    const data = [
        {
            title: "The Invasion of Poland (1939)",
            content:
                "World War II began with Germany's invasion of Poland on September 1, 1939. This act prompted Britain and France to declare war on Germany.",
            image: "/images/invasion-of-poland.jpg" // Correct path
        },
        {
            title: "The Battle of Britain (1940)",
            content:
                "The Battle of Britain was the first major military campaign fought entirely by air forces. The Royal Air Force successfully defended the UK against German Luftwaffe attacks.",
            image: "/images/battle-of-britain.jpg" // Correct path
        },
        {
            title: "The Attack on Pearl Harbor (1941)",
            content:
                "On December 7, 1941, Japan launched a surprise attack on the U.S. naval base at Pearl Harbor, leading the United States to enter World War II.",
            image: "/images/pearl-harbor.jpg" // Correct path
        },
        {
            title: "D-Day: Normandy Landings (1944)",
            content:
                "On June 6, 1944, Allied forces launched the largest seaborne invasion in history, storming the beaches of Normandy in Nazi-occupied France.",
            image: "/images/d-day-normandy.jpg" // Correct path
        },
        {
            title: "The Battle of Stalingrad (1942–1943)",
            content:
                "One of the bloodiest battles in history, the Battle of Stalingrad marked a turning point in the war, with the Soviet Union defeating Nazi forces and beginning to push them back.",
            image: "/images/battle-of-stalingrad.jpg" // Correct path
        },
        {
            title: "The Battle of Midway (1942)",
            content:
                "A decisive naval battle that took place in the Pacific theater. The United States Navy inflicted a significant defeat on the Japanese Imperial Navy, changing the course of the war in the Pacific.",
            image: "/images/battle-of-midway.jpg" // Correct path
        },
        {
            title: "The Fall of Berlin (1945)",
            content:
                "In May 1945, Soviet forces captured Berlin, marking the end of the European theatre of WWII and leading to Germany's unconditional surrender.",
            image: "/images/fall-of-berlin.jpg" // Correct path
        },
        {
            title: "The Bombing of Hiroshima and Nagasaki (1945)",
            content:
                "On August 6 and 9, 1945, the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki, leading to Japan's surrender and the end of World War II.",
            image: "/images/hiroshima-nagasaki.jpg" // Correct path
        }
    ];

    return (
        <div>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    image={item.image}
                />
            ))}
        </div>
    );
}
