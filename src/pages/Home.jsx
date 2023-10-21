import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";


const Home = () => {

    return (        
                <>
                    <Header />
                    <Info />
                    <Section data={productsSection.iphonePro} />
                    <Section data={productsSection.iphone} />
                    <Section data={productsSection.macbookpro} />
                    <Products />
                </>
            )}        

export default Home;