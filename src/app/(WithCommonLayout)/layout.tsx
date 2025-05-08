import Footer from "../../components/shared/footer";
import Navbar from "../../components/shared/navbar";



const CommonLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <>
            
            <Navbar></Navbar> 
            
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {children}
                </main>
            
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;
