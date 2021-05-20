import pdfMake from 'pdfmake';

export const buildPDF = (data) =>{

    const fonts = {
        Roboto: {
          normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
          bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
          italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
          bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        },
      };

    let [month, date, year]  = new Date().toLocaleDateString("en-US").split("/");

    // Split text paragraphe
    const paragraph = [];
    for(let text of data.text.split('\n')){
      if(paragraph.length === 0){
        paragraph.push( {text: '\t'+text, preserveLeadingSpaces: true, margin: [0, 22, 0, 0]});
      } else {
        paragraph.push( {text, preserveLeadingSpaces: true, margin: [0, 9, 0, 0]});
      }
    }

    const docDefinition = {
        pageSize: 'A5',
        content: [
            {text: data.title.toLocaleUpperCase(), margin: [0, 22, 0, 0]},
            {text: `By ${data.author}`},
            ...paragraph,
            {text: `Published in ${year}\nGenerated with Freemarket.fr` },
        ]
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition, null, fonts);
    pdfDocGenerator.open();

}