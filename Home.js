import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
    <div className = "home">
        <img 
            className = "home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB409152101_.jpg" 
            alt = ""
        />
        <div className ="home__row">
            <Product
                id="123"
                title="Ikigai: The Japanese secret to a long and happy life Hardcover – 27 September 2017"
                price={123}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
            />

            <Product
                id="1234"
                title="HP X1000 Wired Mouse (Black/Grey)"
                price={23.50}
                rating={1}
                image ="https://images-eu.ssl-images-amazon.com/images/I/41PvizV0gJL._AC_SY400_.jpg"
            />

            <Product
                id="1234"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={499.50}
                rating={3}
                image ="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
             <Product
                id="1234"
                title="WOW Skin Science Apple Cider Vinegar Foaming Face Wash - No Parabens, Sulphate & Silicones (with built-in brush)"
                price={9.50}
                rating={4}
                image ="https://images-eu.ssl-images-amazon.com/images/I/71P5PVH9CxL._AC_SY400_.jpg"
            />
        </div>

        <div className ="home__row">
            <Product
                id="12345"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={320}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />

            <Product
                id="123456"
                title="Kama Ayurveda Pure Rose, 50ml"
                price={123}
                rating={3}
                image="https://images-eu.ssl-images-amazon.com/images/I/31FkJRG2nFL._AC_US400_FMwebp_QL65_.jpg"
            />

            <Product
                id="1234567"
                title="DMosaic Hanging Swing Chair with Cushion & Hook/Color Black for 1 Outdoor/Indoor/Balcony/Garden/Patio"
                price={340.6}
                rating={2}
                image= "https://m.media-amazon.com/images/I/41KUHshnxnL._AC_UL800_FMwebp_QL65_.jpg"
            />
        </div>

        <div className ="home__row">
            <Product
                id="12345678"
                title="LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | with Built-in Alexa (Dark Meteo Titanium) (2019 Model)"
                price={900}
                rating={5}
                image="https://m.media-amazon.com/images/I/81bNwWF3Z2L._AC_UY545_FMwebp_QL65_.jpg"
            />
        </div>
    </div>
    );
}
export default Home;
