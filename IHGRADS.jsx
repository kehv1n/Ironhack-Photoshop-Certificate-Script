
//Important to note that this scripts works Photoshop CC 2014
// ES6 is NOT supported

var theClass = [];

// 1st Parameter MUST be array of student names,
// 2nd Parameter MUST be a string of class mode ('webdev' or 'uxui')

makeGrads(theClass, 'uxui');


function makeGrads(students, mode) {
  if (app.documents.length !== 0) {
    //get active docs
    var activeDoc = app.activeDocument;

    //traversing array
    for(i = 0; i < students.length; i++) {



    //get the first active layer
    var firstTextLayer = activeDoc.activeLayer;

    //checks to see if the active layer is a text layer
    if(firstTextLayer.kind == LayerKind.TEXT) {
    var txtItem = firstTextLayer.textItem;
    txtItem.contents = students[i];

    //student's name for file extension
    var studentName = students[i].replace(/ /g,'');

    //PDF saving madness..

    var fileName = '~/Desktop/ironCertificate/'+mode+'/IHGRAD'+studentName
    pdfFile = new File(fileName)
    pdfSaveOptions = new PDFSaveOptions()
    pdfSaveOptions.PDFCompatibility = PDFCompatibility.PDF14
    pdfSaveOptions.downSample = PDFResample.NONE
    pdfSaveOptions.colorConversion = true
    pdfSaveOptions.profileInclusionPolicy = true
    pdfSaveOptions.embedColorProfile = true
    pdfSaveOptions.destinationProfile = "U.S. Web Coated (SWOP) v2"
    pdfSaveOptions.preserveEditing = false
    pdfSaveOptions.layers = false
    pdfSaveOptions.outputConditionID = "Working CMYK"
    activeDoc.saveAs(pdfFile, pdfSaveOptions, true, Extension.LOWERCASE)


      }

      else {
      //the selected layer is not a text layer
        alert('The active layer is not a text layer')
      }
    }
  }

  else {
   alert('Not sufficient documents or someshit');
  }

}

///Written with ♥️ by Kevin Da Silva @ IronHack
