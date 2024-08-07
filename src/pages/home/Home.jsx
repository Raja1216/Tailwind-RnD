import Banner from "../../components/banner/Banner"
import Carousel from "../../components/carousel/Carousel"
import Table from "../../components/dataTable/Table"

const Home = () => {
  return (
    <div className="grid h-full grid-flow-row gap-3 p-6 backdrop-opacity-30 backdrop-invert bg-white/30 grid-rows-8">
     <div className="row-start-1 row-end-4">
        <Banner />
     </div>
     <div className="row-start-4 row-end-6">
        <Carousel />
     </div>
     <div className="row-start-6 row-end-10">
        <Table />
     </div>
    </div>
  )
}

export default Home
