import Icon from './UI/Icon'
import classes from './Skills.module.scss'

import inkswipe3s from '../video/inkWhite2.mp4'

//IMAGES
import cssHtmlImg from '../images/icons/cssHtml.png'
import reactImg from '../images/icons/react.png'
import solidityImg from '../images/icons/solidity.png'
import javscriptImg from '../images/icons/javascript.png'
import bootstrapImg from '../images/icons/bootstrap.png'
import tailwindImg from '../images/icons/tailwind.png'
import reduxImg from '../images/icons/redux.png'
import nodeImg from '../images/icons/nodejs.png'
import gitImg from '../images/icons/github-logo.png'
import visualStudioImg from '../images/icons/visualStudio.png'
import firebaseImg from '../images/icons/firebase.png'
import wooCommerceImg from '../images/icons/wooCommerce.png'
import adobeCCImg from '../images/icons/adobeCC.png'
import finalCutImg from '../images/icons/fcpLogo.png'
import ethersImg from '../images/icons/etherslogo.png'
import typescriptImg from '../images/icons/typescript.png'

const javaScriptItem = { name: 'JavaScript', img: javscriptImg }
const cssHtmlItem = { name: 'HTML & CSS', img: cssHtmlImg }
const reactItem = { name: 'React', img: reactImg }
const reduxItem = { name: 'Redux', img: reduxImg }
const bootstrapItem = { name: 'Bootstrap', img: bootstrapImg }
const nodeItem = { name: 'NodeJS', img: nodeImg }
const ethersItem = { name: 'ethers.js', img: ethersImg }
const tailwindItem = { name: 'Tailwind', img: tailwindImg }
const solidityItem = { name: 'Solidity', img: solidityImg }
const typescriptItem = { name: 'Typescript', img: typescriptImg }

const gitHub = { name: 'GitHub', img: gitImg }
const visualStudio = { name: 'VS Code', img: visualStudioImg }
const firebase = { name: 'Firebase', img: firebaseImg }
const wooCommerce = { name: 'wooCommerce', img: wooCommerceImg }
const adobeCC = { name: 'Adobe CC', img: adobeCCImg }
const finalCut = { name: 'Final Cut Pro', img: finalCutImg }

const Skills = () => {
    return (
        <div>
            <div className={classes.skills}>
                <video src={inkswipe3s} type="video/mp4" autoPlay muted />
                <h1>Tech Skills</h1>
                <h2>Languages & Frameworks</h2>
                <div className={classes.webApps}>
                    <Icon name={cssHtmlItem.name} image={cssHtmlItem.img} />
                    <Icon name={javaScriptItem.name} image={javaScriptItem.img} />
                    <Icon name={typescriptItem.name} image={typescriptItem.img} />
                    <Icon name={reactItem.name} image={reactItem.img} />
                    <Icon name={reduxItem.name} image={reduxItem.img} />
                    <Icon name={nodeItem.name} image={nodeItem.img} />
                    <Icon name={solidityItem.name} image={solidityItem.img} />
                    <Icon name={ethersItem.name} image={ethersItem.img} />
                    <Icon name={bootstrapItem.name} image={bootstrapItem.img} />
                    <Icon name={tailwindItem.name} image={tailwindItem.img} />
                </div>
                <h2>Applications</h2>
                <div className={classes.webApps}>
                    <Icon name={gitHub.name} image={gitHub.img} />
                    <Icon name={visualStudio.name} image={visualStudio.img} />
                    <Icon name={firebase.name} image={firebase.img} />
                    <Icon name={wooCommerce.name} image={wooCommerce.img} />
                    <Icon name={adobeCC.name} image={adobeCC.img} />
                    <Icon name={finalCut.name} image={finalCut.img} />
                </div>
            </div>
        </div>
    )
}

export default Skills
