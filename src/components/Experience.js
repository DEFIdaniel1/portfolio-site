import classes from './Experience.module.scss'

const Experience = () => {
    return (
        <div className={classes.experience}>
            <h1>Experience</h1>
            <div className="line" />

            <div className={classes.container}>
                <div className={classes.section}>
                    <h2>Web Design</h2>
                    <h3>5 Yrs</h3>
                    <div className="line"></div>
                    <ul>
                        <li>Designed, built, and managed eCommerce websites</li>
                        <li>Utilized Shopify, WooCommerce with third-party integrations</li>
                        <li>Connected multiple sales channels and 3PL solutions via APIs</li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h2>Web Development</h2>
                    <h3>1 Year</h3>
                    <div className="line"></div>
                    <ul>
                        <li>
                            Built, deployed, and debugged multiple websites using React, JQuery,
                            Redux, NodeJS
                        </li>
                        <li>
                            Customized components and responsive layouts using advanced CSS/SCSS
                        </li>
                        <li>
                            Creating dynamic web applications that captivate while being simple and
                            intuitive
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.section}>
                    <h2>Blockchain</h2>
                    <h3>6 Mon</h3>
                    <div className="line"></div>
                    <ul>
                        <li>
                            Built and deployed smart contracts, ERC-20s (Tokens), ERC-721s (NFTs)
                            using Solidity
                        </li>
                        <li>
                            Debugging, and constructing in-depth unit tests with Hardhat, Waffle,
                            and Chai
                        </li>
                        <li>
                            Interact with external smart contracts, interact with mainnet, testnets,
                            forked mainnets
                        </li>
                        <li>
                            Leverage openzeppelin interfaces and contracts to optimize safety and
                            speed
                        </li>
                        <li>
                            Upload NFT data to IPFS for blockchain and decentralized off-chain
                            storage solutions
                        </li>
                        <li>Utilize EthersJS to easily connect websites with smart contracts</li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h2>Project Management</h2>
                    <h3>10 Years</h3>
                    <div className="line"></div>
                    <ul>
                        <li>Leading teams up to 11 people to ensure successful projects</li>
                        <li>Managing multi-million-dollar programs to exceed deliverables </li>
                        <li>
                            Coordinating, producing, and editing photos, videos, and content for
                            websites
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
