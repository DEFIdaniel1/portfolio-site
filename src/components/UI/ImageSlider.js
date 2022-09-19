import { useState } from 'react'
import classes from './ImageSlider.module.scss'

const ImageSlider = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const { title, subtitle, description, features, github, link, gif } = slides[slideIndex]

    //Optional for object array loop
    let featureList = []
    const featureItems = () => {
        for (let i = 0; i < features.length; i++) {
            featureList.push(<li>{features[i]}</li>)
        }
        return featureList
    }
    featureItems()

    //Button click logic
    const goToPrevious = () => {
        const isFirstSlide = slideIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1
        setSlideIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = slideIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : slideIndex + 1
        setSlideIndex(newIndex)
    }
    const goToSlide = (idx) => {
        setSlideIndex(idx)
    }

    return (
        <div className={classes.slider}>
            {/* <div className={classes.slideCount}>
                {slideIndex + 1}/{slides.length}
            </div> */}
            <div className={classes.leftArrow} onClick={goToPrevious}>
                &lsaquo;
            </div>
            <div className={classes.rightArrow} onClick={goToNext}>
                &rsaquo;
            </div>
            <div className={classes.slide}>
                <div className={classes.text}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{description}</p>
                    <p>Features:</p>
                    <ul>{featureList}</ul>
                    <div className={classes.links}>
                        <div>GitHub Link</div>
                        <div>Live Site Link</div>
                    </div>
                </div>
                <div className={classes.gif}>
                    <img src="https://media.giphy.com/media/LkxiDPFHOpfQrDi2xH/giphy.gif" alt="" />
                    <div className={classes.gifText}>Hover for preview (HAND)</div>
                </div>
            </div>
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
