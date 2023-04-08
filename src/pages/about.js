import React from 'react';
import AboutStyles from '../styles/About.module.css';
export default function AboutPage(){
    return(
        <>
            <div className={AboutStyles.outterbox}>
                <div className={AboutStyles.owners}>
                    <div className={AboutStyles.ownerImage}>
                        <img src='/images/owner.jpg'></img>
                    </div>
                    <div className={AboutStyles.info}>
                        <div>
                            <h1 className={AboutStyles.position}>The Owner:</h1>
                            <div className={AboutStyles.ownerInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</div>
                        </div>
                    </div>
                </div>
                <div className={AboutStyles.owners}>
                    <div className={AboutStyles.ownerImage}>
                        <img src='/images/co-owner.png'></img>
                    </div>
                    <div className={AboutStyles.info}>
                        <div>
                            <h1 className={AboutStyles.position}>The Co-Owner:</h1>
                            <div className={AboutStyles.ownerInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}