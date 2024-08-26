
function App() {
return(

<div>
    <h1>Pcihai Amphanthong :</h1>
    <h1>age : {(new Date().toDateString().split(' ')[3])-1996}</h1>
    </div>
)
}
ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)