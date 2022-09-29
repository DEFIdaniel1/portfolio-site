import React from 'react'
import classes from './Portfolio.module.scss'
import ImageSlider from './UI/ImageSlider'

import backgroundImg from '../images/backgrounds/treeline.png'

import fractionalPropertiesVideo from '../video/websites/fractionalProperties.mp4'
import fractionalPropertiesImg from '../video/websites/fractionalProperties.png'
import noBankVideo from '../video/websites/noBank.mp4'
import noBankImg from '../video/websites/noBank.png'
import galXyVideo from '../video/websites/galXy.mp4'
import galXyImg from '../video/websites/galXy.png'
import octagoImg from '../video/websites/myOctago.png'

const Portfolio = () => {
    const slides = [
        {
            title: 'GAL-XY',
            subtitle: 'NFT Marketplace',
            description:
                'A full-stack website built from the ground-up. A random NFT mint feature that incorporates user inputs for dynamic ouput.',
            features: [
                'Custom Solidity smart contracts',
                'Random NFT minting, listing, and selling',
                'Fully customized UI',
                'Live on Ethereum testnet',
                'Extensive unit testing',
                'React | ethers.js | Hardhat | nodeJS',
            ],
            github: 'https://github.com/DEFIdaniel1/nftMarketplace-v2',
            link: 'https://gal-xy.web.app/',
            video: galXyVideo,
            image: galXyImg,
        },
        {
            title: 'NoBank',
            subtitle: 'Decentralized Finance dApp',
            description:
                'Custom ground-up build. Take your crypto holdings to a decentralized staking solution - all on-chain.',
            features: [
                'Typescript project',
                'APIs fetch real-time crypto price feeds',
                'Dynamic rates built-in for instant feedback',
                'Typescript | React | JavaScript | CSS',
            ],
            github: 'https://github.com/DEFIdaniel1/noBank',
            link: 'https://yield-calc.firebaseapp.com/',
            video: noBankVideo,
            image: noBankImg,
        },
        {
            title: 'Fractional Properties',
            subtitle: 'Real Estate as NFTs',
            description:
                'Front-end build-out for a conceptual project. Designed to be the airbnb for real estate - own, rent, and travel.',
            features: [
                'Fully customized design and UI build',
                'Custom menu animations',
                'Responsive design',
                'React | JavaScript | CSS',
            ],
            github: 'https://github.com/DEFIdaniel1/Fractional-Real-Estate',
            link: 'https://fractional-properties.web.app/',
            video: fractionalPropertiesVideo,
            image: fractionalPropertiesImg,
        },

        {
            title: 'Octago Products',
            subtitle: 'eCommerce Store',
            description:
                'Custom-built wooCommerce site for eCommerce brand. Hosts product range and branded content.',
            features: [
                'WooCommerce site with large product line',
                'Third party payments connected via Stripe',
                'API integrations with 3PL delivery partners',
                'Live and maintained for 2 years',
                'WooCommerce | Wordpress | CSS',
            ],
            link: 'http://myoctago.com',
            image: octagoImg,
        },
    ]

    return (
        <div className={classes.portfolio}>
            {/* <div className="backgroundImg">
                <img src={backgroundImg} alt="tree background"></img>
            </div> */}

            <div className={classes.title}>
                <h1>Portfolio</h1>
                <div className="line" />
            </div>
            <div>
                <ImageSlider slides={slides} />
            </div>
            {/* <button>View Full Github</button> */}
        </div>
    )
}

export default Portfolio
