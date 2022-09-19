import React from 'react'
import classes from './Portfolio.module.scss'
import ImageSlider from './UI/ImageSlider'

const Portfolio = () => {
    const slides = [
        {
            title: 'GAL-XY',
            subtitle: 'NFT Marketplace',
            description:
                'A website built from the ground-up. Custom solidity smart contracts for minting and listing NFTs on the platform. A random NFT mint feature that incorporates user inputs.',
            features: [
                'Solidity smart contracts for NFT minting and NFT marketplace',
                'Fully customized UI using Javascript and CSS',
                'Project is live on Goerli testnet',
                'React project with ethers.js blockchain connections',
            ],
            github: 'www',
            link: 'www',
            gif: 'something',
        },
        {
            title: 'Fractional Properties',
            subtitle: 'Real Estate as NFTs',
            description: 'Front-end build-out for a conceptual project.',
            features: [
                'Solidity smart contracts for NFT minting and NFT marketplace',
                'Fully customized UI using Javascript and CSS',
                'Project is live on Goerli testnet',
                'React project with ethers.js blockchain connections',
            ],
            github: 'www',
            link: 'www',
            gif: 'something',
        },
        {
            title: 'NoBank',
            subtitle: 'NFT Marketplace',
            description:
                'A website built from the ground-up. Custom solidity smart contracts for minting and listing NFTs on the platform. A random NFT mint feature that incorporates user inputs.',
            features: [
                'Solidity smart contracts for NFT minting and NFT marketplace',
                'Fully customized UI using Javascript and CSS',
                'Project is live on Goerli testnet',
                'React project with ethers.js blockchain connections',
            ],
            github: 'www',
            link: 'www',
            gif: 'something',
        },
        {
            title: 'Octago Products',
            subtitle: 'eCommerce Store',
            description:
                'A website built from the ground-up. Custom solidity smart contracts for minting and listing NFTs on the platform. A random NFT mint feature that incorporates user inputs.',
            features: [
                'Solidity smart contracts for NFT minting and NFT marketplace',
                'Fully customized UI using Javascript and CSS',
                'Project is live on Goerli testnet',
                'React project with ethers.js blockchain connections',
            ],
            github: 'www',
            link: 'www',
            gif: 'something',
        },
    ]

    return (
        <div className={classes.portfolio}>
            <h1>Portfolio</h1>
            <div>
                <ImageSlider slides={slides} />
            </div>
            {/* <button>View Full Github</button> */}
        </div>
    )
}

export default Portfolio
