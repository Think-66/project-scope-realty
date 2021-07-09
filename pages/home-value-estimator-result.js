import ClientLayout from "../components/client-layout"

function HomeValueEstimatorResult() {
    return (
        <ClientLayout darkNav={true}>
            <section>
                <div className="esr-cen">
                    <div className="cen-i-cen">
                        <div className="container">
                            <div className="row">
                                <div className="col-5 col-lg-5 col-md-12 col-sm-12 col-12 m-auto">
                                    <div className="cmp-jon-con esr-value">
                                        <div className="header">
                                            <h3>Home Value</h3>
                                        </div>
                                        <div className="title-area">
                                            <p className='title'>1301 Ventura Blvd Spc 51</p>
                                            <p className='sub'>Oxnard CA 93036</p>
                                        </div>
                                        <div className="top-bar"></div>
                                        <div className="content-area">
                                            <p className='title'>Median est. home value</p>
                                            <p className='price'>$162,000</p>
                                            <p className='offer'>5% since last month</p>
                                        </div>
                                        <div className="ctl-con-btn">
                                            <input type="submit" value="List Your Home Now" />
                                        </div>
                                        <div className="bottom-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>
        </ClientLayout>
    )
}

export default HomeValueEstimatorResult;