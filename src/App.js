import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';

function App(props) {
 const data = [
 { id: 1, name: "Mobile #1" , title: "Mobile #1", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details", price: "16,000", image:"m1.jpg",variants:[
 {storage:'125G',price:"16,000"},{storage:'120G',price:12000}
 ]},
 { id: 2, name: "Mobile #2", title: "Mobile #2" , description: " Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details ", price: "15000", image:"m2.jpg",
 variants:[{storage:'125G',price:"16,000"},{storage:'120G',price:12000},{storage:'125G',price:"16,000"},{storage:'120G',price:12000}]
 },
 { id: 3, name: "Mobile #3" , title:"Mobile #3", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details ", price: "16000", image:"m3.jpg",
 variants:[{storage:'125G',price:"16,000"},{storage:'120G',price:12000},{storage:'125G',price:"16,000"},{storage:'120G',price:12000}]
 },
 { id: 4, name: "Mobile #4" , title:"Mobile #4", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details ", price: "16000", image:"m4.jpg",
 variants:[{storage:'125G',price:"16,000"},{storage:'120G',price:12000},{storage:'125G',price:"16,000"},{storage:'120G',price:12000}]
 },
 ];
 return (
 <div className="App">
 {data.map((item,index) => {
 return <Card key={data.id} title={item.title} description={item.description} image={item.image} variants = {item.variants} />
 })}
 </div>
 );
}
 
export default App;