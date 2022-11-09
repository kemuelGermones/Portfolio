import classes from './ContactInfoSection.module.css';

function ContactInfoSection() {
    return (
        <section className={classes.contact} id='contact'>
            <ul className={classes.intro}>
                <li>Want to work together?</li>
                <li>Send me a message</li>
            </ul>
            <h1>
                <a href="mailto: kemuelgermones@gmail.com">
                    kemuelgermones@gmail.com
                </a>
            </h1>
        </section>
    );
}

export default ContactInfoSection;