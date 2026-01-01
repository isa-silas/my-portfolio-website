import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { HoverSlideText } from "../components/HoverSlideText";
import computerImg from "../assets/images/green_computer_code.jpg";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="relative flex items-end grid-default-color grid-1">
                    <img
                        src={computerImg}
                        alt="Computer code"
                        className="absolute scale-[1.75] -right-[5rem] -top-[0.05rem]
               md:scale-[3] md:left-[50%] md:inset-y-110
               lg:scale-[2.5]"
                    />

                    <div className="z-10">
                        <p className="headtext">Hi, I'm Isabella Silas</p>
                        <p className="subtext-grid-1">
                            Since 2021, I’ve been building full-stack solutions with a focus on growth and precision. With an electrical engineering background, I see software as a living system—rooted in robust backend architecture and evolving into intuitive web and mobile experiences.
                        </p>
                    </div>

                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="relative block overflow-hidden justify-center w-full h-full"
                    >
                        <HoverSlideText className="flex items-end text-5xl text-primary font-bold uppercase">
                            Java
                        </HoverSlideText>
                        <HoverSlideText className="flex items-end text-5xl text-primary font-bold uppercase">
                            JavaScript
                        </HoverSlideText>
                        <HoverSlideText className="flex items-end text-5xl text-primary font-bold uppercase">
                            Kotlin
                        </HoverSlideText>
                        <HoverSlideText className="flex items-end text-5xl text-primary font-bold uppercase">
                            Python
                        </HoverSlideText>
                        <HoverSlideText className="flex items-end text-5xl text-primary font-bold uppercase">
                            C#
                        </HoverSlideText>
                        <Card
                            style={{ rotate: "0deg", top: "0.5%", left: "57%", width: "30%" }}
                            text="NodeJs"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "25%", left: "69%", width: "30%" }}
                            text="React"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "40%", left: "50%", width: "30%" }}
                            text="Spring"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "55%", left: "67%", width: "30%" }}
                            text="Angular"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "0deg", top: "70%", left: "45%", width: "30%" }}
                            text="SQL/NoSQL"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-default-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in São Paulo, Brazil, and open to connect with people worldwide
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;