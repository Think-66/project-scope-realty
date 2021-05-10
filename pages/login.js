import Head from 'next/head'
import SlideUpAnimation from '../animations/slideUpAnimation';
import FadeInAnimation from '../animations/fadeInAnimation';
import React, { useEffect  } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { signIn, csrfToken } from 'next-auth/client';

Login.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}

export default function Login({ csrfToken }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Login</title>
                <meta name="description" content />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>
            <div>
                <header className="login-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid position-relative">
                        <a className="navbar-brand" href="#">
                        <img src="images/footerlogo.png" alt="logo" className="img-fluid" />
                        </a>
                    </div>
                    </nav>
                </header>
                <section className="bannertitle-sec">
                    <div className="container">
                    <div className="bannerwithcount">
                        <h4 className="bannertitle col-xs-12 col-md-5 col-lg-3">
                        Log in
                        </h4>
                    </div>
                    </div>
                </section>
                <section className="referfriendpage_wrapper loginpage_wrapper">       
                    <div className="container">     
                    <div className="row">
                        <div className="col-md-7 col-lg-7 login_wrapper">
                        <form method='post' action='/api/auth/signin/email' className="login_form">
                            <div className="emailwrap">
                                <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
                                <label htmlFor="email">Email address</label>
                                <input type='text' id='email' name='email' placeholder="Type your email address"/>
                                <div className="submitbutton_wrap">
                                    <button type='submit' className=" save_btn ">Submit</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div></section>
                <footer>
                    <div className="container">
                    <div className="row footer_row">
                        <div className="col-md-5">
                        <div className="col-right-padding footer_widgets_logo">
                            <a href="#">
                            <img src="images/footerlogo.png" alt="logo" />
                            </a>
                            <p>
                            The premier real estate education resource.
                            </p>
                            <p>
                            Copyright © Summit RET 2021
                            </p>
                        </div>
                        </div>
                        <div className="col-md-2">
                        <div className="footer_widgets menu_widgets">
                            <ul>
                            <li>
                                <a href="#">
                                Courses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                About Us
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-2">
                        <div className="footer_widgets menu_widgets">
                            <ul>
                            <li>
                                <a href="#">
                                My Account
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Terms
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="footer_widgets menu_widgets">
                            <ul>
                            <li>
                                <a href="#">
                                support@summitret.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                (855) 765-0049
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
                {/*[if lt IE 8]>
                    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
                <![endif]*/}
                </div>
        </div>
    );
}