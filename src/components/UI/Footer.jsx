import classes from './Footer.module.css';
import { BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr';

function Footer() {
    return (
        <div className={classes.footer}>
            <p>Kemuel Germones | Portfolio 2022</p>
            <div className={classes.iconscontainer}>
                <a href='https://github.com/kemuelGermones' target='_blank'>
                    <BsGithub size='2em' />
                </a>
                <a href='mailto: kemuelgermones@gmail.com'>
                    <GrMail size='2em'/>
                </a>
            </div>

        </div>
    );
}

export default Footer;
