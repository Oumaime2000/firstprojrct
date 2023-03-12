import './App.css';
import pizza from './assets/pizza.jpg'
import burger from './assets/burger.jpg'
import pizzaa from './assets/pizzaa.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
          <div>
            <h3 className='logo' >Wakelni</h3>
          </div>
          <div className='navteams'>
            <h3 > <a className='achernav'  href="#aboutus">about us</a>  </h3>
            <h3 > <a className='achernav'  href="#bestseller"> best seller</a> </h3>
            <h3 ><a  className='achernav' href="#contactus"> contact us</a> </h3>

          </div>
        </div>
        <div className='adresstitle'>
          <h4 className='adress'> Adresse : Av. Elissa, Jardins de carthage 1090 </h4>
          <h5 className='title' >eat at Wakelni</h5>
        </div>
      </header>
      <div id='aboutus' className='aboutussection'>
        <div className='aboutusleft'>
          <img className='img' src={pizza} alt="erreur" />
        </div>
        <div className='aboutusright'>
          <h1> aboutus </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi non aut beatae voluptatem a iure. Facilis, hic possimus. Hic commodi officiis exercitationem animi voluptas quis esse. Qui, pariatur provident.</p>
        </div>
      </div>
      <div id='bestseller' className='bestseller'>
        <div className='bestsellerHead'>
          <h1 className='bestsellettitle'> bestseller </h1>
          <p>this our best seller items on the nemu, <br /> try it and tell us what you think</p>
        </div>
        <div className='bestsellerCards'>

          <div className='bestsellerOne'>
            <img className='bestsellerImg' src={burger} alt="erreur" />
            <p>burger - 200$</p>
          </div>
          <div className='bestsellerTwo'>
            <img className='bestsellerImg' src={pizzaa} alt="erreur" />
            <p>pizz - 200$</p>

          </div>
        </div>
        
      </div>
      <div id='contactus' className='contact'>
          <p className='title'> send us a message</p>
           <input className='inpt' type="text" placeholder='full name'/>
           <input className='inpt' type="email" placeholder='your email' />
           <input className='inpt' type="number" placeholder='number' />
           <input className='inpt' type="textarea" placeholder='your message'/>
       <button className='btn'>   send</button>
        </div>
    </div>
  );
}

export default App;
