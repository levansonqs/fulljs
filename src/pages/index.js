import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import css from './index.scss'
export default class App extends React.Component {
  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
    render() {
        return (
            <div className={css.example}>
                <Head>
                    <title>Home page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>              
                Hello world
                <Link
                  href="/about"
                >
                About Page
                </Link>
                <p
                  onClick={()=> Router.push('/about')}
                >
                About
                </p>
                <p>{this.props.userAgent}</p>              
                <img src='/static/img/111.jpg' />
            </div>
        )
    }
}
