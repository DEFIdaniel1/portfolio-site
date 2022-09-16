import React from 'react'
import classes from './Portfolio.module.scss'
import PortfolioPiece from './UI/PortfolioPiece'

const Portfolio = () => {
    const items = {
        galXy: {
            title: 'GAL-XY',
            subtitle: 'NFT Marketplace',
            description:
                'Some description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum iusto vitae, iure modi sint! Porro illum perferendis ipsum Voluptate similique assumenda exercitationem sapiente iusto facilis molestias sunt veritatis praesentium?',
            features: ['Something', 'Something else', 'Another thing'],
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
