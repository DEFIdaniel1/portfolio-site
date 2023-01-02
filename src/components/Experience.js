import classes from './Experience.module.scss'
import backgroundImg from '../images/ghibliTree1.jpeg'

const Experience = () => {
    return (
        <div className={classes.experience}>
            <div className="titleSection">
                <h1>Experience</h1>
                <div className="line" />
            </div>

            {/* FIRST ROW */}
            <div className={classes.container}>
                {/* WEB DESIGN */}
                <div className={classes.section}>
                    <h2>Web Design</h2>
                    <h3>5 Yrs</h3>
                    <div className="line"></div>
                    <ul>
                        <li> Designing, building, & managing business websites. </li>
                        <li> Optimizing user flows to maximize conversion rates. </li>
                        <li> Soliciting & evaluating user feedback to improve designs. </li>
                        <li> Building site wireframes with Figma for development. </li>
                        <li> Conducting A/B tests to increase engagement & retention. </li>
                    </ul>
                </div>

                {/* WEB DEVELOPMENT */}
                <div className={classes.section}>
                    <h2>Web Development</h2>
                    <h3>2 Yrs</h3>
                    <div className="line"></div>
                    <ul>
                        <li> Front-end focused development with advanced CSS/SASS. </li>
                        <li> Designing, building, & deploying web using React.js. </li>
                        <li> Building customized, reusable, & responsive components. </li>
                        <li> Optimizing sites for cross-browser & device support. </li>
                        <li> Back-end development using Node.js, Express.js, & Next.js. </li>
                        <li> Manage data connections via WebSockets, REST, & GraphQL APIs. </li>
                        <li> Creating & connecting databases (SQL/NoSQL) to servers. </li>
                        <li> Testing, troubleshooting, & debugging applications. </li>
                    </ul>
                </div>
            </div>

            {/* SECOND ROW */}
            <div className={classes.container}>
                {/* BLOCKCHAIN */}
                <div className={classes.section}>
                    <h2>Blockchain</h2>
                    <h3>1 Yr</h3>
                    <div className="line"></div>
                    <ul>
                        <li> Writing and deploying Solidity smart contracts to Ethereum. </li>
                        <li> Integrating smart contracts with front-ends via ethers.js. </li>
                        <li> Using best security practices & achieving full test coverage. </li>
                        <li> Leveraging smart contract development tools & frameworks. </li>
                        <li> Deployed contracts for tokens, NFTs, & marketplaces. </li>
                    </ul>
                </div>
                {/* PROJECT MANAGEMENT */}
                <div className={classes.section}>
                    <h2>Management</h2>
                    <h3>10 Yrs</h3>
                    <div className="line"></div>
                    <ul>
                        <li> Co-founded, built, & sold an eCommerce business within 3 years. </li>
                        <li> Leading teams up to 11 people to ensure successful projects. </li>
                        <li> Managing multi-million-dollar programs to exceed deliverables. </li>
                        <li> Establishing successful SOPs for business operations. </li>
                        <li> Set up and managed supply chain operations during COVID. </li>
                        <li> Coaching teams to build strengths & improve team dynamics. </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
