import classes from './AboutSection.module.scss'

const AboutSection = ({ type, image, title, text, alt }) => {
    return (
        <div>
            {type === 'future' && (
                <div className={classes.section}>
                    <div className={classes.textL}>
                        <h2>{title}</h2>
                        <div className="line" />
                        <p>{text}</p>
                    </div>
                    <div className={classes.futureDiv}>
                        <img src={image} alt={alt} />
                        <img src={image} alt={`${alt} reflection`} />
                    </div>
                </div>
            )}
            {type === 'bitcoin' && (
                <div className={classes.section}>
                    <div className={classes.bitcoinDiv}>
                        {/* bitcoin images use the 2 divs */}
                        <div></div>
                        <div></div>
                    </div>
                    <div className={classes.textR}>
                        <h2>{title}</h2>
                        <div className="line" />

                        <p>{text}</p>
                    </div>
                </div>
            )}
            {type === 'phone' && (
                <div>
                    <div className={classes.section}>
                        <div className={classes.textR}>
                            <h2>{title}</h2>
                            <div className="line" />
                            <p>{text}</p>
                        </div>
                        <div className={classes.phoneImgDiv}>
                            <img src={image} alt="phone" />
                            <img src={image} alt="phone" />
                            <img src={image} alt="phone" />
                            <img src={image} alt="phone reflection" />
                            <img src={image} alt="phone reflection" />
                            <img src={image} alt="phone reflection" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AboutSection
