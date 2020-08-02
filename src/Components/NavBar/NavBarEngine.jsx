let root = document.querySelector(':root');
let isVisible = false;

let documentsHide = () => {
    root.style.setProperty("--correspondenceTop", "150px");
    root.style.setProperty("--documentsRootVisibility", "hidden");
    root.style.setProperty("--documentsRootOpacity", "0");
}

let documentsShow = () => {
    root.style.setProperty("--correspondenceTop", "220px");
    root.style.setProperty("--documentsRootVisibility", "visible");
    root.style.setProperty("--documentsRootOpacity", "1");
}

let correspondenceShow = () => {
    root.style.setProperty("--correspondenceRootVisibility", "visible");
    root.style.setProperty("--correspondenceRootOpacity", "1");
    isVisible = true;
}

let correspondenceHide = () => {
    root.style.setProperty("--correspondenceRootVisibility", "hidden");
    root.style.setProperty("--correspondenceRootOpacity", "0");
    isVisible = false;
}

export const onClickDocuments = () => {
    if (getComputedStyle(document.querySelector(':root')).getPropertyValue('--correspondenceTop') === "220px") {
        documentsHide()
    } else {
        documentsShow()
        correspondenceHide()
    }
}

export const onClickСorrespondence = () => {
    if (isVisible===false){
        documentsHide()
        correspondenceShow()
    }else{
        correspondenceHide()
    }

    if (getComputedStyle(document.querySelector(':root')).getPropertyValue('--correspondenceTop') === "220px") {
        documentsHide()
        correspondenceShow()
    }
    



}