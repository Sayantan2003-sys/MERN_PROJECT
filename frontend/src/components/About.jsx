import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fugit natus quam distinctio nihil consequatur nesciunt doloribus omnis aliquam voluptatem facere eius nulla, earum minus, voluptatibus, iure quia magnam fugiat. Voluptatum dolore voluptatibus earum. Reprehenderit nemo necessitatibus voluptas repellendus aperiam neque eligendi mollitia quidem! Tempora eveniet minus nemo molestias.
                    </p>
                    <Link to={"/"}>Explore Menu{" "}
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}
export default About