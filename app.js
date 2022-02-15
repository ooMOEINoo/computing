const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const { numOfClass } = require("./utils/numOfClass");
const { computing } = require("./utils/computing");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main-layout.ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "محاسبه",
    countEquations: 0,
    active: 0,
    num_class: null,
    value: 2,
    lastClass: `${"one"}-last`,
    response: null
  });
});

app.get("/test", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  let { countEquations } = req.query;
  let active = true;
  if (!countEquations) {
    active = false;
    countEquations = 2;
  }
  const className = numOfClass(countEquations);
  res.render("index", {
    title: "تست",
    countEquations: +countEquations,
    active: active,
    num_class: className,
    value: countEquations,
    lastClass: `${className}-last`,
    response: null
  });
});
app.get("/moein", (req, res) => {
  response = computing(req.query);
  console.log(response);

  res.render('index', {
    title: "تست",
    countEquations: +0,
    active: 0,
    num_class: null,
    value: 0,
    lastClass: `${'one'}-last`,
    response,
  })
});


app.listen(8080, () => {
  console.log("server is running");
});
