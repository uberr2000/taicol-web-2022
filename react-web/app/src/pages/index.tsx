import TaxonCountSection from 'src/components/frontend/home/TaxonCountSection'
import LatestNewsListSection from 'src/components/frontend/home/LatestNewsListSection'
import Banner from 'src/components/frontend/home/Banner'

const Home = () => {
  return (
    <div className="ovh">
      <Banner/>
      <TaxonCountSection />
      <LatestNewsListSection/>
    </div>
  )
}

export default Home
