import Layout from '../../components/layout'
import unfetch from 'isomorphic-unfetch'


const CharacterDetail = ({characters}) => {
  return (
    <Layout>
 
        <h1>index</h1>
     
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
export default CharacterDetail