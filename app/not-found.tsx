import Layout from "@/components/layout/Layout"
import Link from "next/link";
export default function Error404() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Page Not Found">
               
            <section className="error-section pb-130 pt-130">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/*====== Error Wrapper ======*/}
                        <div
                        className="error-wrapper bg_cover pt-130 pb-130"
                        style={{ backgroundImage: "url(/assets/images/bg/error-bg.jpg)" }}
                        >
                        <div className="error-content text-center text-white">
                            <span className="number">404</span>
                            <h1>Oops! Page Not Found</h1>
                            <p>
                            It looks like you&apos;ve encountered a &quot;Page Not Found&quot; error, also known as a 404 error. <br /> 
                            This typically happens when the web server cannot locate
                            </p>
                            <div className="error-button">
                            <Link href="/" className="theme-btn style-one">
                                Go To Home
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        
            </Layout>
        </>
    )
}
