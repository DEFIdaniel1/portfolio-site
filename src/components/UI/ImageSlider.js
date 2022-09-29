import { useState } from 'react'
import classes from './ImageSlider.module.scss'
import { motion } from 'framer-motion'

const ImageSlider = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const { title, subtitle, description, features, github, link, video, image } =
        slides[slideIndex]
    const [slideRight, setSlideRight] = useState(null)

    //Optional for object array loop
    let featureList = []
    const featureItems = () => {
        for (let i = 0; i < features.length; i++) {
            featureList.push(<li key={i}>{features[i]}</li>)
        }
        return featureList
    }
    featureItems()

    //Button click logic
    const goToPrevious = () => {
        const isFirstSlide = slideIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1
        setSlideIndex(newIndex)
        setSlideRight(false)
    }
    const goToNext = () => {
        const isLastSlide = slideIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : slideIndex + 1
        setSlideIndex(newIndex)
        setSlideRight(true)
    }
    const goToSlide = (idx) => {
        setSlideIndex(idx)
    }

    const windowWidth = window.innerWidth
    console.log(windowWidth)

    return (
        <div className={classes.slider}>
            <div className={classes.leftArrow} onClick={goToPrevious}>
                &lsaquo;
            </div>
            <div className={classes.rightArrow} onClick={goToNext}>
                &rsaquo;
            </div>
            {/* SLIDES*/}
            <motion.div
                className={classes.slide}
                key={slideIndex}
                initial={{ x: slideRight ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0, 0.71, 0.8, 1.01],
                }}
            >
                <div className={classes.title}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <div className="line" />
                </div>
                <div className={classes.innerSlider}>
                    <div className={classes.text}>
                        <p className={classes.description}>{description}</p>
                        {window.innerWidth > 1000 && <ul>{featureList}</ul>}
                        <div className={classes.links}>
                            {github && <a href={github}>Github</a>}
                            {link && <a href={link}>View Site</a>}
                        </div>
                    </div>
                    <div className={classes.media}>
                        {video ? (
                            <video
                                key={`${slideIndex}-video`}
                                src={video}
                                alt={`${title} website preview`}
                                typeof="video/mp4"
                                muted
                                autoPlay
                            />
                        ) : (
                            <img src={image} alt={`${title} website preview`} />
                        )}
                    </div>
                </div>
            </motion.div>
            <div className={classes.dotsContainer}>
                {slides.map((slide, idx) =>
                    idx === slideIndex ? (
                        <div key={idx} onClick={() => goToSlide(idx)}>
                            ⬤
                        </div>
                    ) : (
                        <div key={idx} onClick={() => goToSlide(idx)}>
                            ⭘
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default ImageSlider
