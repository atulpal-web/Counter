import CardUi from "../layout/CardUi"

const Home = () => {
    return (
        <>

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
    <a class="navbar-brand" href="#">Sign up</a>
    <button class="navbar-toggler btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation"> Click here
    </button>
  </div>
</nav> */}
    <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-3">
                <CardUi title="Title:-1" paragraph="para1"/>
            </div>
            <div className="col-lg-3">
                <CardUi  title="Title:-2" paragraph="para2"/>
            </div>
            <div className="col-lg-3">
                <CardUi  title="Title:-3" paragraph="para3"/>
            </div>
            <div className="col-lg-3">
                <CardUi  title="Title:-4" paragraph="para4"/>
            </div>
        </div>
        </div>        
        </>
    )
}
export default Home