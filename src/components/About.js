import React from 'react'
import classes from './About.module.scss'

import SectionImg from './UI/SectionImg'
import spaceSuit from '../images/spaceSuit.png'
import phones from '../images/phones.png'
import daniel from '../images/daniel.png'
import binaryBitcoin from '../images/binaryBitcoin.png'
import swipeVideo from '../video/inkswipe.mp4'

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.container}>
                <div className={classes.leftCol}>
                    <h1>About me</h1>
                    <p>I love building intuitive, beautiful applications.</p>
                    <p>
                        My background isn't your typical developer path. And I think that's a
                        <span className={classes.txtHighlight}> strength</span>.
                    </p>
                    <p>
                        My experience ranges from{' '}
                        <span className={classes.txtHighlight}> managing teams</span> and non-profit
                        programs to ensuring millions of dollars of ARR renewed for software
                        companies.
                    </p>
                    <p>
                        Most recently, I started and sold an{' '}
                        <span className={classes.txtHighlight}> eCommerce business</span>.
                        Responsible for product development, logistics, marketing, and of course,
                        our website.
                    </p>
                    <p>
                        Next step? After building out websites, I was hooked. I dove deep into CSS,
                        Javascript, React, and Solidity rabbit holes.
                    </p>
                    <p>Enjoy your stay - and don't hesitate to reach out!</p>
                </div>
                <div className={classes.rightCol}>
                    <img src={daniel} alt="" />
                </div>
            </div>

            <SectionImg
                type="phone"
                title="A Little UX/UI Obsessed"
                text={
                    <div>
                        I believe in crafting a user experience that's easy for everyone. Design is
                        my passion - crafting dynamic, beautiful applications. <br />
                        <br />
                        <div>The mission is the balance between.</div>
                    </div>
                }
                image={phones}
                alt={'phone'}
            />
            <SectionImg
                type="bitcoin"
                title="Immersed in Blockchain"
                text={
                    <div>
                        I believe in crafting a user experience that's easy for everyone. Design is
                        my passion - crafting dynamic, beautiful applications. <br />
                        <br />
                        <div>The mission is the balance between.</div>
                    </div>
                }
                image={binaryBitcoin}
                alt={'bitcoin from ones and zeroes'}
            />
            <SectionImg
                type="future"
                title="Building the Future"
                text={
                    <div>
                        Blockchain tech with a great UX is still a distant dream. I'm excited to be
                        working on that future - building out a great UX/UI experience for the next
                        generation of blockchain dApps.
                    </div>
                }
                image={spaceSuit}
                alt={'space suit'}
            />
        </div>
    )
}

export default About