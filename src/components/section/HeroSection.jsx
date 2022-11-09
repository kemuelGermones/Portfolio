import classes from './HeroSection.module.css';

function HeroSection() {
    return (
        <section className={ classes.hero }>
            <h1>
                I’m Kemuel,
                <br /> 
                <span> a full stack developer based in Philippines</span>
            </h1>
            <p>
                Currently looking for a web developer job as a self taught developer. 
                If you are interested working with me email me at kemuelgermones@gmail.com
            </p>
        </section>
    )
}

export default HeroSection;