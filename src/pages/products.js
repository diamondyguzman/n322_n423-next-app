import react from 'react';
import AboutStyles from '../styles/About.module.css';
import ProductStyles from '../styles/Products.module.css';
export default function ProductsPage(){
    return(
        <>
            <div className={ProductStyles.outbox}>
                <div className={AboutStyles.owners}>
                    <div className={AboutStyles.ownerImage}>
                        <img src='/images/butter-almond-soap.jpg'></img>
                    </div>
                    <div className={AboutStyles.info}>
                        <div>
                            <h1 className={AboutStyles.position}>Butter Almond Soap:</h1>
                            <div className={ProductStyles.productInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</div>
                        </div>
                    </div>
                </div>
                <div className={AboutStyles.owners}>
                    <div className={AboutStyles.ownerImage}>
                        <img src='/images/rose-gold-soap.jpg'></img>
                    </div>
                    <div className={AboutStyles.info}>
                        <div>
                            <h1 className={AboutStyles.position}>Rose-Gold Soap:</h1>
                            <div className={AboutStyles.ownerInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</div>
                        </div>
                    </div>
                </div>
                <div className={AboutStyles.owners}>
                    <div className={AboutStyles.ownerImage}>
                        <img src='/images/luxury-soap.jpg'></img>
                    </div>
                    <div className={AboutStyles.info}>
                        <div>
                            <h1 className={AboutStyles.position}>Luxury Soap:</h1>
                            <div className={AboutStyles.ownerInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}