const express = require("express");
const cors = require('cors');
const data = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let con = data.createConnection({
    host : "localhost",
    user : "root",
    password : "9952251932@uma" ,
    database : "customer"
})

con.connect(function(error){
    if(error)
    {
        console.log(error);
    }else{
        console.log("Success");
    }
})

app.get('/getdetails',(request,respond)=> {
    let sql = "select * from customerdetails";
    con.query(sql,(error,result)=>{
        if(error){
            respond.send(error);
        }else{
            respond.send(result);
        }
        
    })
})

app.post('/addcustomer',(request,response)=>{
    let {name,address,city,pincode,country} = request.body;
    let sql = 'insert into customerdetails(name,address,city,pincode,country,status) values (?,?,?,?,?,?)';
    con.query(sql,[name,address,city,pincode,country,1],(error,result)=>{
        if (error) {
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"success"}
            response.send(s);
        }
    })
})

app.get('/edit/:sno',(request,response)=>{
    let {sno}=request.params;
    let sql="select * from customerdetails where sno = ?";
    con.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.put('/edited/:sno',(request,response)=>{
    let sno=request.params.sno;
    let{name,address,city,pincode,country}=request.body;
    let sql='update customerdetails set name=?,address=?,city=?,pincode=?,country=? where sno=?'
    con.query(sql,[name,address,city,pincode,country,sno],(error,result)=>{
        if(error){
            let a={"status":"error"};
            response.send(a);
        }
        else {
            let a={"status":"success"};
            response.send(a);
        }
    })
})

app.get('/Viewcustomer/:sno',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from customerdetails where sno=?';
    con.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})


app.post('/Delete',(request,response)=>{
    let sno = request.body.sno;
    let sql = 'delete from customerdetails where sno = ?';

    con.query (sql,[sno],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s)
        }
    })
})
app.listen(3302,()=>{
    console.log("Server running on port:3302");});

