import "isomorphic-fetch"
import Link from 'next/link'
import css from './index.scss'
const About = ({starts}) =>
<div className={css.container}>
  Next starts: {starts}
  <Link href='/test' >
    Back
  </Link>
  <Link scroll={false} href="/about/?counter=10"><a className={css.linker} >Disables scrolling</a></Link>
  <Link href="/about/?counter=10"><a className={css.link} >Changes with scrolling to top</a></Link>
</div>

About.getInitialProps = async ({req}) =>{
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return {starts: json.stargazers_count}
}

export default About