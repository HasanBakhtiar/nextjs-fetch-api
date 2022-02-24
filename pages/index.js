import Layout from '../components/layout'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/Link';
import slug from 'slug'


const index = ({characters}) => {
  return (
    <Layout>
 
        <h1>index</h1>
        <ul>

        {characters.results.map(character => (
        <li key={character.id}>
          <Link href="/character/[slug]" 
          as={`/character/${slug(character.name)}-${character.id}`}>
        <a >{character.name}</a>
        </Link></li>
        ))}

        </ul>

        
        {/* <style jsx>{`
        h1{
          background:#000
        }
        `}</style> */}

{/* <style global jsx>{`
        h1{
          background:#000
        }
        `}</style> */}
    </Layout>
    
  )
}
export async function getStaticProps() {
  //data fetch
  const data = await unfetch("https://rickandmortyapi.com/api/character/")
  const characters = await data.json();
  // console.log(character);
  return {
    props: {
      characters
    }
  }
}
export default index