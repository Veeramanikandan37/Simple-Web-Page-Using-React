function Content(){
    return(
        <div className="content">
            <div className="table">
                <h3>Students Detail</h3>
                <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Dep</th>
                        <th>College</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Veeramanikandan</td>
                        <td rowSpan={2}>ECE B</td>
                        <td>HICET</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Praveen</td>
                        <td>HIT</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sam</td>
                        <td rowSpan={2}>ECE A</td>
                        <td>HICET</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mukesh</td>
                        <td>HIT</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="form">
            <h3>Contact Us</h3>
            <form>
                <label>First Name :</label><input></input><span></span>
                <label>Last Name :</label><input></input><span></span>
                <label>Age :</label><input></input><span></span>
                <label>Dept :</label><input></input><span></span>
                <label>College :</label><input></input><span></span>
                <button>Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Content;