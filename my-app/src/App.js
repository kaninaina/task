import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeroSection from './components/heroSection/heroSection';
import PostSection from './components/postSection/post';
import './App.css';

function App() {
  let data=[
    {image:"images/image1.jpg",view:16.7,like:3.3},
    {image:"images/image2.jpg",view:26.7,like:2.3},
    {image:"images/image3.jpg",view:13.7,like:2.1},
    {image:"images/image4.jpg",view:10.7,like:1.7},
    {image:"images/image5.jpg",view:17.7,like:4.2},
    {image:"images/image6.jpg",view:18.7,like:1.3},
    {image:"images/image7.jpg",view:15.7,like:1.6},
    {image:"images/image8.jpg",view:12.7,like:1.8},
    {image:"images/image9.jpg",view:19.7,like:2.0},
  ]
  return (
    <div className="App">
       <Header/>
    <HeroSection/>
    <PostSection images={data}/>
    <Footer/>
    </div>
  );
}

export default App;
