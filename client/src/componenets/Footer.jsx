import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterCom() {
    return (
        <Footer container className='border border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl front-semibold dark:text-white'>
                            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Avijit's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='' target='_blank' rel='noopener noreferrer'>
                                    100 JS Projects
                                </Footer.Link>
                                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                    Avijit's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Folllow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://github.com/Avijit200318' target='_blank' rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>
                                <Footer.Link href='https://www.linkedin.com/in/avijit-hira-819a99258/' target='_blank' rel='noopener noreferrer'>
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href=''>
                                    Privacy Plicy
                                </Footer.Link>
                                <Footer.Link href=''>
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Avijit's blog" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='https://www.facebook.com/avijit.hira.332' icon={FaFacebook} color='#816b6b' />
                        <Footer.Icon href='https://www.instagram.com/avijit.hira.332' icon={FaInstagram} color='#816b6b' />
                        <Footer.Icon href='https://www.linkedin.com/in/avijit-hira-819a99258/' icon={FaLinkedin} color='#816b6b' />
                        <Footer.Icon href='#' icon={FaSquareXTwitter} color='#816b6b' />
                        <Footer.Icon href='https://github.com/Avijit200318' icon={FaGithub} color='#816b6b' className='text-xl' style={{fontSize: "10rem"}} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
