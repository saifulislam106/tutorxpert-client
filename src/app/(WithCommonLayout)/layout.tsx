import Footer from "../../components/shared/footer";
import Navbar from "../../components/shared/navbar";



const CommonLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <>
            
            <Navbar></Navbar> 
            
            <main className="min-h-screen mx-auto bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
                {children}
                </main>
            
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;
