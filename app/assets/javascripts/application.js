//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  require('dotenv').config();


  var bereavement_prototype_password = process.env.BEREAVEMENT_PROTOTYPE_PASSWORD;
  var bereavement_prototype_url = "https://bereavement-prototype.herokuapp.com?password=" + bereavement_support_password;
  document.write("<a href='" + bereavement_prototype_url + "'>Bereavement Prototype</a>");

})
