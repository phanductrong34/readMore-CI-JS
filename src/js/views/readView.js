export const loadRead = readUrl => {
    let str = 'https://cors-anywhere.herokuapp.com/';

    var url = str + readUrl;
    // https://cors-anywhere.herokuapp.com/
    // let blob = fetch('https://firebasestorage.googleapis.com/v0/b/ci-thu-vien-sach.appspot.com/o/Sa%CC%81ch%2FTa%CC%80i%20Li%C3%AA%CC%A3u%20Ho%CC%A3c%20T%C3%A2%CC%A3p%2F360-cau-hoi-trac-nghiem-vat-ly-9-co-dap-an.pdf?alt=media&token=b3480b9a-9971-40d7-bde4-cc3c2b0a70a6').then(function(result) {
    //     console.log(result);
    // });
    
    let pdfDoc = null,
        pageNum = 1,
        pageIsRendering = false,
        pageNumIsPending = null;
    
    const scale = 1.5,
        canvas = document.querySelector('#pdf-render'),
        ctx = canvas.getContext('2d');
    
    // Render the page
    const renderPage = num => {
        pageIsRendering = true;
    
        // Get page
        pdfDoc.getPage(num).then(page => {
            // Set scale
            const viewport = page.getViewport({ scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
    
            const renderCtx = {
                canvasContext: ctx,
                viewport
            };
    
            page.render(renderCtx).promise.then(() => {
                pageIsRendering = false;
    
                if (pageNumIsPending !== null) {
                    renderPage(pageNumIsPending);
                    pageNumIsPending = null;
                }
            });
    
            // Output current page
            document.querySelector('#page-num').textContent = num;
            // console.log(num);
            var currentPage = num;
            console.log(currentPage);
        });
    };
    
    // Check for pages rendering
    const queueRenderPage = num => {
        if (pageIsRendering) {
            pageNumIsPending = num;
        } else {
            renderPage(num);
        }
    };
    
    // Show Prev Page
    const showPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    };
    
    // Show Next Page
    const showNextPage = () => {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    };
    
    // Get Document
    pdfjsLib
        .getDocument(url)
        .promise.then(pdfDoc_ => {
            pdfDoc = pdfDoc_;
    
            document.querySelector('#page-count').textContent = pdfDoc.numPages;
    
            renderPage(pageNum);
        })
        .catch(err => {
            // Display error
            const div = document.createElement('div');
            div.className = 'error';
            div.appendChild(document.createTextNode(err.message));
            document.querySelector('body').insertBefore(div, canvas);
            // Remove top bar
            document.querySelector('.top-bar').style.display = 'none';
        });
    
    // Button Events
    document.querySelector('.pagination__left-read').addEventListener('click', showPrevPage);
    document.querySelector('.pagination__right-read').addEventListener('click', showNextPage);

    document.querySelector('.read__hover--left').addEventListener('click', showPrevPage);
    document.querySelector('.read__hover--right').addEventListener('click', showNextPage);
}

