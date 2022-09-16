import classes from './SectionImg.module.scss'

const SectionImg = ({ type, image, title, text, alt }) => {
    return (
        <div>
            {type === 'future' && (
                <div className={classes.section}>
                    <div className={classes.textL}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <div className={classes.imgDiv}>
                        <img src={image} alt={alt} />
                        <img src={image} alt={`${alt} reflection`} />
                    </div>
                </div>
            )}
            {type === 'bitcoin' && (
                <div className={classes.section}>
                    <div className={classes.bitcoinDiv}>
                        {/* <img src={image} alt={alt} /> */}
                        <div></div>
                        <div></div>
                        {/* <img src={image} alt={`${alt} reflection`} /> */}
                    </div>
                    <div className={classes.textR}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            )}
            {type === 'phone' && (
                <div>
                    <div className={classes.section}>
                        <div className={classes.textR}>
                            <h2>{title}</h2>
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

export default SectionImg
