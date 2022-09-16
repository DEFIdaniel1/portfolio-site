import React from 'react'
import classes from './Portfolio.module.scss'
import PortfolioPiece from './UI/PortfolioPiece'

const Portfolio = () => {
    const items = {
        galXy: {
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
    }

    return (
        <div className={classes.portfolio}>
            <h1>Portfolio</h1>
            <button>View Full Github</button>
            <div>
                <PortfolioPiece {...items.galXy} />
                <PortfolioPiece {...items.galXy} />
                <PortfolioPiece {...items.galXy} />
            </div>
        </div>
    )
}

export default Portfolio
